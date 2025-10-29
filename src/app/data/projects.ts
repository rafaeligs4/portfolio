import { Project } from "../interfaces/data.interface";
import { getSkillsByName } from "./skills";

const pathBase = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const projects: Project[] =[
  {
    nameProject: "Proyecto 1",
    descriptionProject: "Desarrollo de una aplicación web para una empresa de tecnología",
    img: `${pathBase}/img/image_default.svg`,
    urlImage: `${pathBase}/img/image_default.svg`,
    urlProject: "",
    technologies: getSkillsByName(['Angular', 'Node.js', 'MySQL'])
  },
  {
    nameProject: "Proyecto 2",
    descriptionProject: "Desarrollo de una aplicación móvil para una empresa de servicios",
    img: `${pathBase}/img/image_default.svg`,
    urlImage: `${pathBase}/img/image_default.svg`,
    technologies: getSkillsByName(['React', 'Node.js', 'MySQL']),
    urlProject: ""
  },
  {
    nameProject: "Proyecto 3",
    descriptionProject: "Desarrollo de una aplicación de escritorio para una empresa de software",
    img: `${pathBase}/img/image_default.svg`,
    urlImage: `${pathBase}/img/image_default.svg`,
    technologies: getSkillsByName(['React', 'Node.js', 'MySQL']),
    urlProject: ""
  }
];

