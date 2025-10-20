import Image from 'next/image';

// Definimos las props para mayor claridad con TypeScript
interface AboutMeSectionProps {
  name: string;
  description: string;
  imageAvatarUrl: string;
}

export const AboutMeSection = ({ name, description, imageAvatarUrl }: AboutMeSectionProps) => {
  return (
    // Contenedor principal de la sección con el color de fondo
    <section id="about" className="flex justify-center items-center min-h-screen bg-[#0A192F] p-8 sm:p-16">
      
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        
        {/* Columna de Texto */}
        <div className="md:col-span-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E6F1FF] mb-4">
            Sobre Mí
          </h2>
          <p className="text-[#CCD6F6] text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Columna de la Imagen */}
        <div className="md:col-span-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 group">
            {/* Usamos el componente Image de Next.js para optimización */}
            <Image
              src={imageAvatarUrl}
              alt={`Foto de perfil de ${name}`}
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-[#64FFDA] transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};