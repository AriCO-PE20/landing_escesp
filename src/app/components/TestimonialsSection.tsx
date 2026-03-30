import { Quote, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1758613654538-5f353b10f93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYW1lcmljYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDgxMjk4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    country: "Estados Unidos",
    role: "Ejecutiva de Marketing",
    comment: "Después de solo 3 meses puedo mantener conversaciones fluidas en español. Los profesores son increíblemente pacientes y las clases son muy dinámicas. ¡Recomendado al 100%!",
    rating: 5,
  },
  {
    name: "Kenji Tanaka",
    image: "https://images.unsplash.com/photo-1725473823290-8a261fe706a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnQlMjBzbWlsaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0ODEyOTg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    country: "Japón",
    role: "Estudiante universitario",
    comment: "La metodología es excelente. No solo aprendí el idioma, también conocí la cultura latina. Ahora tengo la confianza para viajar por Latinoamérica. ¡Gracias!",
    rating: 5,
  },
  {
    name: "Michael Roberts",
    image: "https://images.unsplash.com/photo-1717010029992-73634991491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXVjYXNpYW4lMjBtYWxlJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDgxMjk4N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    country: "Reino Unido",
    role: "Emprendedor",
    comment: "Necesitaba español para expandir mi negocio en España. El curso de negocios fue perfecto: profesional, práctico y muy efectivo. En 6 meses estaba cerrando contratos en español.",
    rating: 5,
  },
  {
    name: "Emma Schmidt",
    image: "https://images.unsplash.com/photo-1758685848001-0396a85ba84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0NzIyMTU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    country: "Alemania",
    role: "Profesora",
    comment: "Como profesora yo misma, puedo reconocer la calidad de la enseñanza. Los materiales son excelentes y el enfoque personalizado hace toda la diferencia.",
    rating: 5,
  },
  {
    name: "Chen Wei",
    image: "https://images.unsplash.com/photo-1584554376766-ac0f2c65e949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWxlJTIwdGVhY2hlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDgxMjYwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    country: "China",
    role: "Ingeniero de Software",
    comment: "Aprobé mi examen DELE C1 en el primer intento gracias a su preparación. Los simulacros y el feedback constante fueron clave para mi éxito. ¡Muy agradecido!",
    rating: 5,
  },
  {
    name: "Olivia Anderson",
    image: "https://images.unsplash.com/photo-1758525861586-1c8c8e424dc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZlbWFsZSUyMHR1dG9yJTIwc21pbGluZ3xlbnwxfHx8fDE3NzQ4MTI5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    country: "Australia",
    role: "Diseñadora gráfica",
    comment: "La flexibilidad de horarios es perfecta para mi estilo de vida. Las clases online son tan efectivas como las presenciales. ¡Una experiencia maravillosa!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#D64545] via-[#E87461] to-[#F4A491] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFD4CC]/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Quote className="w-12 h-12 text-white" fill="white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-lg text-white/95 max-w-2xl mx-auto">
            Miles de estudiantes han transformado sus vidas aprendiendo español con nosotros
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#F4A491]" fill="#F4A491" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#F5E6E0]">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#E87461]">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-[#E87461]">{testimonial.country}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-white/90">Tasa de satisfacción</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-white/90">Calificación promedio</div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">2500+</div>
            <div className="text-white/90">Reseñas positivas</div>
          </div>
        </div>
      </div>
    </section>
  );
}
