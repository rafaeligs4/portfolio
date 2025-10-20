interface Project{
    nameProject: string;
    descriptionProject: string;
    img: string;
    url: string;
}


export const ProjectCard = (project: Project)=>{

    return <>
    <div className="group relative flex flex-col items-center justify-center gap-4 p-6 bg-white dark:bg-[#112240] rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
        <div className="card-header">{project.nameProject}</div>
        <div className="card-body"> {project.descriptionProject}


        </div>
        <div className="card-footer"></div>
    </div>
    </>
}