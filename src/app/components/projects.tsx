import { Project } from "../interfaces/data.interface";
import { ProjectCard } from "./projectCard";


interface ProjectComponentInterface{
    projects: Project[];
    nameTitle: string;
}

export const ProjectsComponent = ({projects, nameTitle}: ProjectComponentInterface) => {
    
    
    const refProjects = projects.map(project => <ProjectCard 
        nameProject={project.nameProject}
        descriptionProject={project.descriptionProject}
        img={project.img}
        urlImage={project.urlImage}
        urlProject={project.urlProject}
        key={project.nameProject}
        technologies={project.technologies}
    ></ProjectCard>);

    return <>
    <section id="projects" className="py-20 bg-[#F0F2F5] dark:bg-[#0A192F]">
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0A192F] dark:text-[#E6F1FF] mb-12">{nameTitle}</h2>
    <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-1 px-4">
    {refProjects}
    </div>
    </section>
   
    </>
}