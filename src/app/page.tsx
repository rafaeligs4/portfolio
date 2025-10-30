import Image from "next/image";
import { HeaderComponent } from "./components/header";
import { AboutMeSection } from "./components/aboutMeSection";
import { SkillsSection } from './components/abilities';
import { ProjectsComponent } from "./components/projects";
import { ExperienceComponent } from './components/experience';
import { ContactComponent } from "./components/contact";
import { categories, skillName, skillsObject } from "./data/skills";
import { projects } from "./data/projects";
import {  ExperienceData } from "./interfaces/data.interface";
import { experience } from "./data/experience";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';




export default function Home() {
  return (
    <>
    
    <HeaderComponent></HeaderComponent>

    <AboutMeSection name="Texting" imageAvatarUrl={`${basePath}/img/imagen_cv.jpg`} description=" Ingeniero en Computación con sólida formación académica y experiencia en el diseño, desarrollo y optimización de
 soluciones tecnológicas. Actualmente me desempeño como Desarrollador Full Stack, integrando conocimientos de
 frontend, backend y bases de datos para construir aplicaciones web robustas y eficientes. Destaco por mi capacidad para
 abordar problemas complejos con soluciones escalables y alineadas a buenas prácticas de ingeniería de software"></AboutMeSection>
    
    
  <SkillsSection categories={categories} skillObject={skillsObject} categoryObject={skillName}  ></SkillsSection>


  <ProjectsComponent projects={projects} nameTitle="Proyectos"></ProjectsComponent>
  
  <ExperienceComponent experience={experience} titleSection="Experiencia" ></ExperienceComponent>
  <ContactComponent></ContactComponent>  
  </>
  );
}
