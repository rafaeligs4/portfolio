// Definimos un tipo para la estructura de cada habilidad.
// Nota: 'icon' ahora es una cadena de texto (string) con la ruta del archivo.
import { Skill, SkillAgroupedByCategory, SkillTypeName } from "../interfaces/data.interface";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''; // El mismo que en next.config.ts
// Agrupamos las habilidades por categoría con tus íconos específicos.
// export const skillsByCategory = {
//   'Lenguajes y Maquetado': [
//     { name: 'HTML', icon: `${basePath}/icons/html.svg`, level: 'Avanzado' },
//     { name: 'CSS', icon: `${basePath}/icons/css.svg`, level: 'Avanzado' },
//     { name: 'JavaScript', icon: `${basePath}/icons/javascript.svg`, level: 'Avanzado' },
//     { name: 'Java', icon: `${basePath}/icons/java.svg`, level: 'Intermedio' },
//     { name: 'PHP', icon: `${basePath}/icons/php.svg`, level: 'Básico' },
//   ],
//   'Frameworks y Librerías': [
//     { name: 'React', icon: `${basePath}/icons/react.svg`, level: 'Avanzado' },
//     { name: 'Spring', icon: `${basePath}/icons/spring.svg`, level: 'Intermedio' },
//     { name: 'Node.js', icon: `${basePath}/icons/node.svg`, level: 'Intermedio' },
//     { name: 'Angular', icon: `${basePath}/icons/angular.svg`, level: 'Básico' },
//     { name: 'Vue.js', icon: `${basePath}/icons/vue.svg`, level: 'Básico' },
//   ],
//   'Herramientas y Bases de Datos': [
//     { name: 'Git', icon: `${basePath}/icons/git.svg`, level: 'Avanzado' },
//     { name: 'MySQL', icon: `${basePath}/icons/mysql.svg`, level: 'Intermedio' },
//     { name: 'PostgreSQL', icon: `${basePath}/icons/postgres.svg`, level: 'Intermedio' },
//   ],
// };

export const skillName: SkillTypeName = {"Frontend": 'Desarrollo Frontend', "Backend": 'Desarollo Backend', "Tools": "Herramientas"};

const skills : Skill[]  = [
    { name: 'HTML', icon: `${basePath}/icons/html.svg`, level: 'Avanzado', typeSkill: 'Frontend', yearsOfExperience: 3, moreThanYearExp: false },
    { name: 'CSS', icon: `${basePath}/icons/css.svg`, level: 'Avanzado', typeSkill: 'Frontend', yearsOfExperience: 3, moreThanYearExp: false },
    { name: 'JavaScript', icon: `${basePath}/icons/javascript.svg`, level: 'Avanzado', typeSkill: 'Frontend', yearsOfExperience: 3, moreThanYearExp: false },
    { name: 'Java', icon: `${basePath}/icons/java.svg`, level: 'Intermedio', typeSkill: 'Backend', yearsOfExperience: 3, moreThanYearExp: false },
    { name: 'PHP', icon: `${basePath}/icons/php.svg`, level: 'Básico', typeSkill: 'Backend', yearsOfExperience: 3, moreThanYearExp: false },
    {name: 'Laravel', icon: `${basePath}/icons/laravel.svg`, level: 'Básico', typeSkill: 'Backend', yearsOfExperience: 2, moreThanYearExp: false},
    { name: 'React', icon: `${basePath}/icons/react.svg`, level: 'Avanzado', typeSkill: 'Frontend', yearsOfExperience: 2, moreThanYearExp: false },
    { name: 'SpringBoot', icon: `${basePath}/icons/spring.svg`, level: 'Intermedio', typeSkill: 'Backend', yearsOfExperience: 2, moreThanYearExp: true },
    { name: 'Node.js', icon: `${basePath}/icons/node.svg`, level: 'Intermedio', typeSkill: 'Backend', yearsOfExperience: 2, moreThanYearExp: false },
    { name: 'Angular', icon: `${basePath}/icons/angular.svg`, level: 'Básico', typeSkill: 'Frontend', yearsOfExperience: 3, moreThanYearExp: false },

    { name: 'Git', icon: `${basePath}/icons/git.svg`, level: 'Avanzado', typeSkill: 'Tools', yearsOfExperience: 3, moreThanYearExp: false },
    { name: 'MySQL', icon: `${basePath}/icons/mysql.svg`, level: 'Intermedio', typeSkill: 'Backend', yearsOfExperience: 3, moreThanYearExp: false },
]
  export const categories = Array.from(new Set(skills.map(skill => skill.typeSkill)));
  export const skillsObject: SkillAgroupedByCategory = {};

  categories.forEach(category => {
    skillsObject[category] = skills.filter(skill => skill.typeSkill === category);
  });
