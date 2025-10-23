import { Skill } from "../interfaces/data.interface";


// La función para obtener el color de la insignia no cambia
const getBadgeColor = (level: Skill['level']) => {
  switch (level) {
    case 'Avanzado':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'Intermedio':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    case 'Básico':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
  }
};

// CAMBIO AQUÍ: 'icon' ahora es un string (la ruta) y no un componente 'Icon'
export const SkillCard = ({ name, icon, level, yearsOfExperience, moreThanYearExp }: Skill) => {
  return (
     <div className="group relative flex flex-col items-center justify-center gap-4 p-6 bg-white dark:bg-[#112240] rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
      <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-semibold ${getBadgeColor(level)}`}>
        {level}
      </div>
      
      {/* CAMBIO AQUÍ: Usamos <img> en lugar de <Icon /> */}
      <div className="w-16 h-16">
        <img src={icon} alt={`Logo de ${name}`} className="w-full h-full object-contain" />
      </div>
      <div className='flex flex-col gap-1'>
      <h5 className="font-semibold text-center text-[#0A192F] dark:text-[#E6F1FF]">
        {name}
      </h5>
      {yearsOfExperience !== undefined && (
        <h6 className="lg:text-[0.7rem] font-semibold text-center text-[#0A192F] dark:text-[#E6F1FF]">
          {moreThanYearExp ? '+' : ''} {yearsOfExperience} {yearsOfExperience === 1 ? 'año' : 'años'} de Experiencia
        </h6>
      )}
      </div>
    
    </div>
  );
};
