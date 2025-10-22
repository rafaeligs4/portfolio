
export const ContactComponent = ()=>{
    return <>
        <section id="contact" className="py-5  bg-[#F0F2F5] dark:bg-[#0A192F]">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0A192F] dark:text-[#E6F1FF] mb-12">Contacto</h2>
        <div className="flex justify-around items-center flex-col sm:flex-row gap-10">
            {/* Sección de contacto */}
            <div>
                <p className="text-center text-lg text-[#0A192F] dark:text-[#E6F1FF] mb-2">Correo Electrónico:</p>
                <a href="mailto:rafaeligs460@gmail.com" className="text-lg text-[#0A192F] dark:text-[#E6F1FF]">rafaeligs460@gmail.com</a>
            </div>
            {/* Seccion de navegacion */}
            <div className="flex flex-col">
                <a href="#about" className="text-lg text-[#0A192F] dark:text-[#E6F1FF]">Sobre mí</a>
                <a href="#skills" className="text-lg text-[#0A192F] dark:text-[#E6F1FF]">Habilidades</a>
                <a href="#projects" className="text-lg text-[#0A192F] dark:text-[#E6F1FF]">Proyectos</a>
                <a href="#experience" className="text-lg text-[#0A192F] dark:text-[#E6F1FF]">Experiencia</a>
                <a href="#contact" className="text-lg text-[#0A192F] dark:text-[#E6F1FF]">Contacto</a>
            </div>
            {/* Sección de redes sociales */}
            <div className="flex flex-col">
                <p className="text-center text-lg text-[#0A192F] dark:text-[#E6F1FF] mb-2">Redes Sociales:</p>
                <a href="https://www.linkedin.com/in/rafael-gonzales/" className="text-lg text-[#0A192F] dark:text-[#E6F1FF]">LinkedIn</a>
                <a href="https://github.com/rafagmz" className="text-lg text-[#0A192F] dark:text-[#E6F1FF]">GitHub</a>
            </div>
        </div>
        <div className="p-1">
            {/* Seccion de copyright */}
            <p className="text-center text-[#0A192F] dark:text-[#E6F1FF] text-sm leading-relaxed">
                © 2023 Rafael Gonzalez. Todos los derechos reservados.
            </p>
        </div>
        </section>
    </>
}