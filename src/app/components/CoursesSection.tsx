import { MessageCircle, Briefcase, Award, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const courses = [
  {
    title: "Español Conversacional",
    description: "Aprende a comunicarte con fluidez y confianza en situaciones cotidianas. Perfecto para viajes, amistades y vida diaria.",
    icon: MessageCircle,
    image: "https://images.unsplash.com/photo-1758797316165-986ec92e7ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZXJzYXRpb24lMjBwcmFjdGljZSUyMGxhbmd1YWdlJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzc0ODEyOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Práctica intensiva de conversación",
      "Vocabulario para situaciones reales",
      "Mejora tu pronunciación",
      "Clases dinámicas y entretenidas"
    ],
    color: "from-[#D64545] to-[#E87461]",
  },
  {
    title: "Español para Negocios",
    description: "Domina el español profesional para impulsar tu carrera. Comunicación efectiva en entornos corporativos internacionales.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1758520145178-29eafeda9908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbHMlMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc3NDgxMjk5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Vocabulario corporativo especializado",
      "Presentaciones y negociaciones",
      "Emails y comunicación formal",
      "Casos reales de negocios"
    ],
    color: "from-[#E87461] to-[#F4A491]",
  },
  {
    title: "Preparación para Exámenes",
    description: "Preparación completa para DELE, SIELE y otros exámenes oficiales. Metodología probada con altas tasas de éxito.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBleGFtJTIwcHJlcGFyYXRpb258ZW58MXx8fHwxNzc0ODEyOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Estrategias específicas por examen",
      "Simulacros de pruebas reales",
      "Corrección detallada y feedback",
      "Material actualizado 2026"
    ],
    color: "from-[#F4A491] to-[#FFD4CC]",
  },
];

export function CoursesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF5F2] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D64545] mb-4">
            Nuestros cursos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Programas diseñados para tus objetivos específicos, con metodología flexible y profesores expertos
          </p>
        </div>

        {/* Courses Grid */}
        <div className="space-y-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                index % 2 === 0 ? 'lg:grid-cols-[1fr_1.2fr]' : 'lg:grid-cols-[1.2fr_1fr]'
              } grid lg:grid-cols-2 gap-0`}
            >
              {/* Image */}
              <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-30`}></div>
                
                {/* Icon */}
                <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  <course.icon className="w-8 h-8 text-[#D64545]" />
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {course.title}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#FFE8E3] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="w-4 h-4 text-[#D64545]" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="self-start px-8 py-4 bg-gradient-to-r from-[#D64545] to-[#E87461] hover:from-[#B93838] hover:to-[#D64545] text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Más información
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-[#FFF5F2] border-2 border-[#E87461] rounded-2xl px-8 py-6 max-w-2xl">
            <p className="text-lg text-foreground">
              <span className="font-semibold text-[#D64545]">¿No sabes cuál elegir?</span> En tu clase gratuita evaluaremos tu nivel y te recomendaremos el curso perfecto para ti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
