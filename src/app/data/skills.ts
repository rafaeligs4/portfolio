// Definimos un tipo para la estructura de cada habilidad.
// Nota: 'icon' ahora es una cadena de texto (string) con la ruta del archivo.
export type Skill = {
  name: string;
  icon: string; // Ruta a la imagen desde la carpeta 'public'
  level: string;
};

// Agrupamos las habilidades por categoría con tus íconos específicos.
export const skillsByCategory = {
  'Lenguajes y Maquetado': [
    { name: 'HTML', icon: '/icons/html.svg', level: 'Avanzado' },
    { name: 'CSS', icon: '/icons/css.svg', level: 'Avanzado' },
    { name: 'JavaScript', icon: '/icons/javascript.svg', level: 'Avanzado' },
    { name: 'Java', icon: '/icons/java.svg', level: 'Intermedio' },
    { name: 'PHP', icon: '/icons/php.svg', level: 'Básico' },
  ],
  'Frameworks y Librerías': [
    { name: 'React', icon: '/icons/react.svg', level: 'Avanzado' },
    { name: 'Spring', icon: '/icons/spring.svg', level: 'Intermedio' },
    { name: 'Node.js', icon: '/icons/node.svg', level: 'Intermedio' },
    { name: 'Angular', icon: '/icons/angular.svg', level: 'Básico' },
    { name: 'Vue.js', icon: '/icons/vue.svg', level: 'Básico' },
  ],
  'Herramientas y Bases de Datos': [
    { name: 'Git', icon: '/icons/git.svg', level: 'Avanzado' },
    { name: 'MySQL', icon: '/icons/mysql.svg', level: 'Intermedio' },
    { name: 'PostgreSQL', icon: '/icons/postgres.svg', level: 'Intermedio' },
  ],
};