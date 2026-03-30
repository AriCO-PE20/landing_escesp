import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#2C1810] to-[#4A2D1F] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#FFD4CC]">
              Academia Español
            </h3>
            <p className="text-white/80 leading-relaxed">
              Transformando vidas a través del español desde 2016. 
              Pasión, excelencia y compromiso en cada clase.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D64545] flex items-center justify-center transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D64545] flex items-center justify-center transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D64545] flex items-center justify-center transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D64545] flex items-center justify-center transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD4CC]">Enlaces rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-white/80 hover:text-[#F4A491] transition-colors duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-white/80 hover:text-[#F4A491] transition-colors duration-200">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#profesores" className="text-white/80 hover:text-[#F4A491] transition-colors duration-200">
                  Profesores
                </a>
              </li>
              <li>
                <a href="#cursos" className="text-white/80 hover:text-[#F4A491] transition-colors duration-200">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-white/80 hover:text-[#F4A491] transition-colors duration-200">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD4CC]">Nuestros cursos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-[#F4A491] transition-colors duration-200">
                  Español conversacional
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#F4A491] transition-colors duration-200">
                  Español para negocios
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#F4A491] transition-colors duration-200">
                  Preparación DELE
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#F4A491] transition-colors duration-200">
                  Preparación SIELE
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#F4A491] transition-colors duration-200">
                  Clases personalizadas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD4CC]">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#F4A491] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@academiaespanol.com" className="text-white/80 hover:text-[#F4A491] transition-colors duration-200">
                  info@academiaespanol.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F4A491] flex-shrink-0 mt-0.5" />
                <a href="tel:+34123456789" className="text-white/80 hover:text-[#F4A491] transition-colors duration-200">
                  +34 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F4A491] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Madrid, España
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-center text-white/90 text-lg italic max-w-3xl mx-auto">
            "Aprender un nuevo idioma no solo es aprender palabras diferentes para las mismas cosas, 
            sino aprender otra manera de pensar sobre las cosas."
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Academia Español. Todos los derechos reservados.
            </p>
            <p className="text-white/60 text-sm flex items-center gap-2">
              Hecho con <Heart className="w-4 h-4 text-[#D64545]" fill="#D64545" /> para estudiantes de todo el mundo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
