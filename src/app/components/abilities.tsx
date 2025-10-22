

import { SkillAgroupedByCategory, SkillTypeName } from '../interfaces/data.interface';
import { SkillCard } from './skill.card';

interface SkillsSectionComponent  {
  categories: string[];
  categoryObject: SkillTypeName;
  skillObject: SkillAgroupedByCategory;
}
export const SkillsSection = ({categories,skillObject,categoryObject}:SkillsSectionComponent) => {
  return (
    <section id="skills" className="py-20 bg-[#F0F2F5] dark:bg-[#0A192F]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0A192F] dark:text-[#E6F1FF] mb-12">
          Mis Habilidades
        </h2>

        {/* Iteramos sobre cada categoría */}
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-center text-[#3B82F6] dark:text-[#64FFDA] mb-8">
              {categoryObject[category]}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {/* Iteramos sobre las habilidades de esa categoría para crear las tarjetas */}
              {skillObject[category].map((skill) => (
                <SkillCard 
                typeSkill={skill.typeSkill}
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  yearsOfExperience={skill.yearsOfExperience}
                  moreThanYearExp={skill.moreThanYearExp}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};