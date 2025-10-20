import Image from "next/image";
import { HeaderComponent } from "./components/header";
import { AboutMeSection } from "./components/aboutMeSection";
import { SkillsSection } from './components/abilities';

export default function Home() {
  return (
    <>
    
    <HeaderComponent></HeaderComponent>
    
    <AboutMeSection name="Texting" imageAvatarUrl="/img/imagen_cv.jpg" description=" Ingeniero en Computación con sólida formación académica y experiencia en el diseño, desarrollo y optimización de
 soluciones tecnológicas. Actualmente me desempeño como Desarrollador Full Stack, integrando conocimientos de
 frontend, backend y bases de datos para construir aplicaciones web robustas y eficientes. Destaco por mi capacidad para
 abordar problemas complejos con soluciones escalables y alineadas a buenas prácticas de ingeniería de software"></AboutMeSection>
    
    
  <SkillsSection></SkillsSection>
    </>

  );
}
