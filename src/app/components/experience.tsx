import { ExperienceData } from "../interfaces/data.interface";
import { ExperienceContainer } from "./experienceContainer";


interface ExperienceSection {
    titleSection: string;
    experience: ExperienceData[];
}


export const ExperienceComponent = ({ titleSection, experience}: ExperienceSection)=>{
        
        const experienceRef = experience.map((exp,i)=><ExperienceContainer 
        dateWork={exp.dateWork} 
        descriptionJob={exp.descriptionJob}
        key={i}
        nameEnterprise={exp.nameEnterprise}

        />);

        const formateDates = (dates:string[], currentJob?: boolean)=>{
            const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            if(dates.length===1){
                 const date1 = new Date(dates[0]);
                return ` ${months[date1.getMonth()]} ${date1.getFullYear()} - ${currentJob ? "Actualidad" : dates[0]}`;
            }else if(dates.length===2){
                const date1 = new Date(dates[0]);
                const date2 = new Date(dates[1]);

                return `${date1.getFullYear()} - ${months[date2.getMonth()]} ${date2.getFullYear()}`;
            }else{
                return "";
            }
        };

        /*
         Contract / notas:
         - Cada elemento del timeline será una fila con tres zonas visuales: izquierda (titulo y fechas),
           centro (bola sobre la barra vertical) y derecha (tarjeta con rol/descripción).
         - La bola se posiciona con `absolute` y se centra horizontalmente con `left-1/2 -translate-x-1/2`.
           Verticalmente la colocamos en el centro de la fila con `top-1/2 -translate-y-1/2`.
           Para el primer y último elemento ajustamos la posición para que sobresalga del comienzo/fin.
         - `formatBallsExperience` devuelve clases tailwind que aplican estos ajustes.
         - `formatTextTitleExperience` aplica un pequeño desplazamiento visual para el primer/último título.
         Edge cases: experiencia vacía (no se renderiza nada), un solo elemento (bola centrada y ajustada al inicio/fin).
        */
        const formatBallsExperience = (index:number)=>{
            // Para todos los elementos por defecto centramos la bola verticalmente en la fila
            const center = "left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2";
            if(index === 0){
                // Primer elemento: colocamos la bola en la parte superior de la fila para que parezca inicio
                return "left-1/2 -translate-x-1/2 top-0 -translate-y-1/2";
            } else if(index === experience.length - 1){
                // Último elemento: colocamos la bola en la parte inferior de la fila para que parezca final
                return "left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2";
            } else {
                return center;
            }
        };

        const formatTextTitleExperience = (index:number)=>{
            // Ajustes estéticos: mover el título fuera un poco en el primer/último elemento
            if(index === 0 ){
                return "relative -top-8"; // equivalente a top-[-2rem]
            }
            else if(index === experience.length-1){
                return "relative -bottom-8"; // equivalente a bottom-[-2rem]
            }
            else{
                return "relative";
            }
        }
        
        /*
         Alternancia por índice:
         - Nota: en JS los índices empiezan en 0. Cuando el usuario habla de "impares" normalmente
           se refiere a la posición 1,3,5... (humana). Para mapear eso al índice usamos la comprobación
           `isOddHuman(index) = index % 2 === 0` (porque 0 -> posición 1 -> impar humano).
         - Si es impar (posición humana impar) dejamos el layout normal (título a la izquierda, tarjeta a la derecha).
         - Si es par (posición humana par) aplicamos `flex-row-reverse` al contenedor para voltear las columnas.
        */
        const isOddHuman = (index:number) => index % 2 === 0; // true para 0,2,4 -> posiciones humanas 1,3,5 (impares)

        const rowDirection = (index:number) => {
            // Devuelve la clase que invierte el orden de las columnas cuando corresponde
            return isOddHuman(index) ? '' : 'flex-row-reverse';
        };

        const titleAlignment = (index:number) => {
            // Controla alineación interna del título según lado
            return isOddHuman(index) ? 'items-start text-left' : 'items-end text-right';
        };

        const cardAlignment = (index:number) => {
            // Controla alineación interna de la tarjeta según lado
            return isOddHuman(index) ? 'items-start text-left' : 'items-end text-right';
        };
        return <>
        <section id="experience" className="px-10 py-20 bg-[#F0F2F5] dark:bg-[#0A192F]">
        <h2 className="text-3xl  sm:text-4xl font-bold text-center text-[#0A192F] dark:text-[#E6F1FF] mb-12">{titleSection}</h2>
        <div className="relative flex gap-10 flex-col w-full h-auto" >
        {experience.map((exp,i)=>
        /* Cada fila del timeline se compone de 3 zonas:
           - left (w-1/3): título y fechas
           - center: bola (absolute, centrada en la línea vertical)
           - right (w-1/3): tarjeta con rol/descripción
           Para alternar lados simplemente aplicamos `flex-row-reverse` en las filas pares (posición humana par).
        */
        <div className={`relative flex items-center justify-between w-full ${rowDirection(i)}`} key={i}>
            {/* Título y fechas: anchura fija (1/3). `formatTextTitleExperience` mantiene pequeños offsets para primero/último */}
            <div className={`${formatTextTitleExperience(i)} w-1/3 flex flex-col px-4 ${titleAlignment(i)}`}>
                <h2 className="text-lg">{exp.nameEnterprise}</h2>
                <h4 className="text-xs">{formateDates(exp.dateWork,exp?.currentJob)}</h4>
            </div>

            {/* Bola central: absolute para superponer sobre la barra vertical que está en el contenedor padre */}
            <div className={`absolute z-20 ${formatBallsExperience(i)} rounded-full w-5 h-5 bg-gray-300 dark:bg-gray-600`} />

            {/* Tarjeta: misma anchura (1/3). Restauramos estilos visuales (bg, sombras, transiciones) */}
            <div className={`w-1/3 flex flex-col justify-center gap-2 p-4 bg-white dark:bg-[#112240] rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 ${cardAlignment(i)}`}>
                <p className="text-sm">{exp.nameRole}</p>
                <h4 className="text-xs">{exp.descriptionJob}</h4>
            </div>

        </div>)}
        {/* Barra */}
        <div className="absolute z-10 top-0 left-1/2 -translate-x-1/2 w-2 h-full bg-gray-300 dark:bg-gray-600">

        </div>
        {/* {experienceRef} */}
        </div>
        </section>
       
        </>
}