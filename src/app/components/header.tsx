"use client"; // Necesario para indicar que es un componente de cliente por el uso de useState

import { useState } from 'react';

export const HeaderComponent = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nombre = "RafaelGonzalez";
  const navLinks = [
    { href: "#about", label: "Sobre mí" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0A192F]/80 backdrop-blur-sm z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center p-4 text-[#CCD6F6]">
        
        {/* Logo o Nombre */}
        <div className="text-2xl font-bold text-[#64FFDA] tracking-wider">
          <a href="#">{`<${nombre} />`}</a>
        </div>

        {/* Navegación para Escritorio */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className="text-lg hover:text-[#64FFDA] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón de Menú para Móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              // Icono de "Cerrar" (X)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icono de "Hamburguesa"
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Menú Desplegable para Móvil */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#112240] p-4">
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="text-lg text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

/*
Fondo Principal (Azul Marino Oscuro): #0A192F - Un fondo oscuro y sobrio que hace que los demás elementos resalten.

Texto Principal (Gris Claro): #CCD6F6 - Fácil de leer sobre el fondo oscuro, sin ser un blanco puro que canse la vista.

Títulos y Énfasis (Blanco Hueso): #E6F1FF - Un color más brillante para los encabezados y elementos importantes.

Acento (Cian/Verde Menta): #64FFDA - Un color vibrante y energético para botones, enlaces y detalles que quieras destacar.

Fondo Secundario (Azul Marino más claro): #112240 - Para usar en tarjetas o contenedores que necesiten diferenciarse del fondo principal.
 */