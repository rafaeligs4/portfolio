import Image from "next/image";
import { HeaderComponent } from "./components/header";
import { AboutMeSection } from "./components/aboutMeSection";
import { SkillsSection } from './components/abilities';
import { ProjectsComponent } from "./components/projects";
import { ExperienceComponent } from './components/experience';
import { ContactComponent } from "./components/contact";

const projects: {
  nameProject: string;
  descriptionProject: string;
  img: string;
  url: string;
}[] = [
  {
    nameProject: "Proyecto 1",
    descriptionProject: "Desarrollo de una aplicación web para una empresa de tecnología",
    img: "/img/project1.png",
    url: "https://github.com/rafagmz/proyecto1"
  },
  {
    nameProject: "Proyecto 2",
    descriptionProject: "Desarrollo de una aplicación móvil para una empresa de servicios",
    img: "/img/project2.png",
    url: "https://github.com/rafagmz/proyecto2"
  },
  {
    nameProject: "Proyecto 3",
    descriptionProject: "Desarrollo de una aplicación de escritorio para una empresa de software",
    img: "/img/project3.png",
    url: "https://github.com/rafagmz/proyecto3"
  }
];
const experience:  {
    dateWork: string[];
    nameEnterprise: string;
    descriptionJob: string;

}[]  = [
  {
    dateWork: ['2023-09-06','2025-08-11'],
    descriptionJob: 'Desarrollador full Stack',
    nameEnterprise: 'Fibex Telecom C.A'
  },
    {
    dateWork: ['2023-09-06','2025-08-11'],
    descriptionJob: 'Especialista de Apliaciones',
    nameEnterprise: 'Encava'
  }

];


export default function Home() {
  return (
    <>
    
    <HeaderComponent></HeaderComponent>
    
    <AboutMeSection name="Texting" imageAvatarUrl="/img/imagen_cv.jpg" description=" Ingeniero en Computación con sólida formación académica y experiencia en el diseño, desarrollo y optimización de
 soluciones tecnológicas. Actualmente me desempeño como Desarrollador Full Stack, integrando conocimientos de
 frontend, backend y bases de datos para construir aplicaciones web robustas y eficientes. Destaco por mi capacidad para
 abordar problemas complejos con soluciones escalables y alineadas a buenas prácticas de ingeniería de software"></AboutMeSection>
    
    
  <SkillsSection></SkillsSection>


  <ProjectsComponent projects={projects} nameTitle="Proyectos"></ProjectsComponent>
  
  <ExperienceComponent experience={experience} titleSection="Experiencia" ></ExperienceComponent>
  <ContactComponent></ContactComponent>  
  </>
  );
}
