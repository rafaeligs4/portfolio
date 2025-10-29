import { Project } from "../interfaces/data.interface"

export const ProjectCard = (project: Project)=>{
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return <>
    <div className="group relative flex flex-col items-center justify-center gap-4 p-6 bg-white dark:bg-[#112240] rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">

        <img src={project.img} alt={project.nameProject} className="w-full h-48 object-contain rounded-md" />
        <h3 className="card-header text-2xl font-bold">{project.nameProject}</h3>
        <div className="card-body"> 
            <p className="font-medium">{project.descriptionProject}</p>
            {/* Seccion de tecnologias */}
            <div className="flex justify-around items-center mt-3">
            { project.technologies && project.technologies.length > 0 && 
            <p className="text-[0.8rem] font-medium text-[#3B82F6] dark:text-[#64FFDA]" >Tecnologías Utilizadas:</p>
            }
             <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, index) => (
                    <img src={tech.icon} key={index} className="h-8 text-gray-800 dark:text-gray-200 py-1 px-2 rounded-md" />
                ))}
            </div>
            </div>
          
        </div>
        <div className="w-full flex justify-end">
            <button className="bg-[#000000] text-sm text-white font-semibold py-2 px-4 rounded-md "
            > <span className="">Ver Proyecto</span></button>
        </div>
    </div>
    </>
}