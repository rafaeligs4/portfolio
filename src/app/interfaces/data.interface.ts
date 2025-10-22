export interface Experience {
    dateWork: string[];
    nameEnterprise: string;
    descriptionJob: string;
}


export interface Project {
    nameProject: string;
    descriptionProject: string;
    img: string;
    url: string;
}

export interface Skill {
    name: string;
    icon: string; // Ruta a la imagen desde la carpeta 'public'
    level: string;
    typeSkill: string; // Nueva propiedad para categorizar la habilidad
    yearsOfExperience?: number; // Nueva propiedad para indicar los años de experiencia
    moreThanYearExp?: boolean; // Nueva propiedad para indicar si es más de un año de experiencia
}
export interface SkillTypeName{
    [key: string]: string;
}

interface LevelSkill {
    [key: string]: string;
}

export interface SkillAgroupedByCategory  {
    [key: string]: Skill[];
}