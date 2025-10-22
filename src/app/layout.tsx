import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
// Configuración para 'Inter' (fuente principal para párrafos)
const inter = Inter({ 
  subsets: ["latin"], // Siempre especifica los 'subsets'
  display: 'swap', // Asegura que el texto sea visible mientras carga la fuente
  variable: '--font-inter', // Crea una variable CSS para usarla fácilmente
});

// Configuración para 'Poppins' (fuente para títulos)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '600', '700'], // Especifica los grosores que necesitarás
  variable: '--font-poppins',
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafael Gonzalez",
  description: "Portfolio Web developer",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <a href="https://www.flaticon.com/free-icons/picture" title="picture icons">Picture icons created by Freepik - Flaticon</a> */}
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
