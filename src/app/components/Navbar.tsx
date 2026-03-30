import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-[#F5E6E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D64545] to-[#E87461] flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-[#D64545] group-hover:text-[#E87461] transition-colors duration-200">
              Academia Español
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-foreground hover:text-[#D64545] transition-colors duration-200 font-medium"
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="text-foreground hover:text-[#D64545] transition-colors duration-200 font-medium"
            >
              Sobre nosotros
            </a>
            <a
              href="#profesores"
              className="text-foreground hover:text-[#D64545] transition-colors duration-200 font-medium"
            >
              Profesores
            </a>
            <a
              href="#cursos"
              className="text-foreground hover:text-[#D64545] transition-colors duration-200 font-medium"
            >
              Cursos
            </a>
            <a
              href="#testimonios"
              className="text-foreground hover:text-[#D64545] transition-colors duration-200 font-medium"
            >
              Testimonios
            </a>
            <button className="px-6 py-3 bg-gradient-to-r from-[#D64545] to-[#E87461] hover:from-[#B93838] hover:to-[#D64545] text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
              Clase gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#FFF5F2] transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#D64545]" />
            ) : (
              <Menu className="w-6 h-6 text-[#D64545]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-[#F5E6E0]">
            <div className="flex flex-col gap-4">
              <a
                href="#inicio"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-[#D64545] transition-colors duration-200 font-medium py-2"
              >
                Inicio
              </a>
              <a
                href="#nosotros"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-[#D64545] transition-colors duration-200 font-medium py-2"
              >
                Sobre nosotros
              </a>
              <a
                href="#profesores"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-[#D64545] transition-colors duration-200 font-medium py-2"
              >
                Profesores
              </a>
              <a
                href="#cursos"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-[#D64545] transition-colors duration-200 font-medium py-2"
              >
                Cursos
              </a>
              <a
                href="#testimonios"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-[#D64545] transition-colors duration-200 font-medium py-2"
              >
                Testimonios
              </a>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-3 bg-gradient-to-r from-[#D64545] to-[#E87461] hover:from-[#B93838] hover:to-[#D64545] text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 mt-2"
              >
                Clase gratis
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
