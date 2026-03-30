import { Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758270705657-f28eec1a5694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGhhcHB5JTIwZ3JvdXAlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzQ4MTI5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Estudiantes felices aprendiendo español"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/80 via-[#D64545]/60 to-[#E87461]/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Video Preview */}
          <div className="mx-auto w-full max-w-2xl mb-8">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1608600712992-03e5325d94c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB2aWRlbyUyMGxlc3NvbiUyMHN0dWRlbnQlMjBsYXB0b3B8ZW58MXx8fHwxNzc0ODEyOTg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Clase de español online"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group cursor-pointer hover:bg-black/40 transition-all duration-300">
                <button className="w-20 h-20 rounded-full bg-[#D64545] text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 ml-1" fill="white" />
                </button>
              </div>
            </div>
          </div>

          {/* Main Text */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg leading-tight">
              Aprende español con <br />
              <span className="text-[#FFD4CC]">confianza y pasión</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto drop-shadow-md">
              Reserva tu clase de prueba GRATIS hoy mismo
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4 pt-6">
            <button className="px-12 py-5 bg-[#D64545] hover:bg-[#B93838] text-white rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg md:text-xl">
              Reserva tu clase gratis
            </button>
            <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <p className="text-[#D64545] font-semibold">
                ✨ Primera clase 100% gratuita
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#FEFBF8"
          />
        </svg>
      </div>
    </section>
  );
}
