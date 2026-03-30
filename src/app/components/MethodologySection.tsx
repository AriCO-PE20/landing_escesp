import { Users, Video, Book, Target, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const methodology = [
  {
    icon: Users,
    title: "Enfoque comunicativo",
    description: "Priorizamos la comunicación real desde el primer día. No solo gramática, sino conversación práctica y útil.",
  },
  {
    icon: Video,
    title: "Clases interactivas",
    description: "Utilizamos tecnología de vanguardia para crear experiencias de aprendizaje inmersivas y dinámicas.",
  },
  {
    icon: Target,
    title: "Personalización total",
    description: "Cada estudiante es único. Adaptamos el contenido, ritmo y metodología a tus necesidades específicas.",
  },
  {
    icon: Book,
    title: "Materiales auténticos",
    description: "Trabajamos con recursos reales: videos, artículos, podcasts y situaciones cotidianas del mundo hispanohablante.",
  },
];

const benefits = [
  "Horarios flexibles que se adaptan a tu vida",
  "Feedback constante y personalizado",
  "Acceso a recursos adicionales 24/7",
  "Certificados de progreso oficiales",
  "Comunidad global de estudiantes",
  "Soporte técnico y académico continuo",
];

export function MethodologySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#FFF5F2]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D64545] mb-4">
            Nuestra metodología
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un enfoque moderno, efectivo y probado para que alcances tus objetivos de manera natural
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Images Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1755548413928-4aaeba7c740e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkeW5hbWljJTIwY2xhc3Nyb29tJTIwaW50ZXJhY3RpdmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzQ4MTI2MDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Clase interactiva"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1690192435015-319c1d5065b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwdGVhY2hlciUyMHRlYWNoaW5nJTIwbGVzc29ufGVufDF8fHx8MTc3NDgxMjk4NHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Profesor enseñando"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1581019055756-93b5361f9536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMHRleHRib29rJTIwc3BhbmlzaCUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NDgxMjk5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Material de estudio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1690079374922-7f50d5c1a102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwY2xhc3Nyb29tJTIwY296eSUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NzQ4MTI5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Ambiente de aprendizaje"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative gradient */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#F4A491] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#E87461] rounded-full opacity-20 blur-3xl"></div>
          </div>

          {/* Methodology Cards */}
          <div className="space-y-6">
            {methodology.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#F5E6E0] hover:border-[#E87461] group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D64545] to-[#E87461] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-[#FFF5F2] to-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#F5E6E0]">
          <h3 className="text-3xl font-bold text-center text-[#D64545] mb-8">
            ¿Qué hace especial nuestro método?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#D64545] flex-shrink-0 mt-0.5" fill="#D64545" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Listo para experimentar nuestro método?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#D64545] to-[#E87461] hover:from-[#B93838] hover:to-[#D64545] text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            Empieza tu clase gratuita
          </button>
        </div>
      </div>
    </section>
  );
}
