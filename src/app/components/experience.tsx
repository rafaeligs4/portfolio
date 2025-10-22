import { ExperienceContainer } from "./experienceContainer";

interface ExperienceData  {
    dateWork: string[];
    nameEnterprise: string;
    descriptionJob: string;

}
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
        />)
    
        return <>
        <section id="experience" className="py-20 bg-[#F0F2F5] dark:bg-[#0A192F]">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0A192F] dark:text-[#E6F1FF] mb-12">{titleSection}</h2>
        <div className="flex flex-col gap-2">
        {experienceRef}
        </div>
        </section>
       
        </>
}