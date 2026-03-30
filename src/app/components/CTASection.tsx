import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D64545] via-[#E87461] to-[#F4A491]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD4CC]/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-10 left-10 w-4 h-4 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-white/40 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-white/20 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-10 right-1/3 w-4 h-4 bg-white/30 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/30">
          <Sparkles className="w-5 h-5 text-white" fill="white" />
          <span className="text-white font-medium">Tu futuro en español empieza hoy</span>
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Comienza hoy tu viaje <br />
          <span className="text-[#FFD4CC]">en español</span>
        </h2>

        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
          Reserva tu clase gratuita ahora y descubre por qué miles de estudiantes confían en nosotros
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="group px-10 py-5 bg-white text-[#D64545] rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg font-semibold flex items-center gap-3">
            Reserva tu clase gratis
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 text-lg font-semibold">
            Conoce más
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
            <div className="text-white/90 text-sm mb-1">Sin compromiso</div>
            <div className="text-white font-semibold">100% gratis</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
            <div className="text-white/90 text-sm mb-1">Respuesta rápida</div>
            <div className="text-white font-semibold">En menos de 24h</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/20">
            <div className="text-white/90 text-sm mb-1">Flexibilidad total</div>
            <div className="text-white font-semibold">Elige tu horario</div>
          </div>
        </div>
      </div>
    </section>
  );
}
