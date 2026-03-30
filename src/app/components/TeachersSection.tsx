import { GraduationCap, Globe, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const teachers = [
  {
    name: "María García",
    image: "https://images.unsplash.com/photo-1758685848001-0396a85ba84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmZW1hbGUlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0NzIyMTU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Especialista en conversación con 12 años de experiencia. Apasionada por la cultura latinoamericana.",
    country: "España",
    specialty: "Conversación fluida",
  },
  {
    name: "Carlos Mendoza",
    image: "https://images.unsplash.com/photo-1584554376766-ac0f2c65e949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWxlJTIwdGVhY2hlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NDgxMjYwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Experto en español de negocios y preparación de exámenes DELE. Metodología práctica y efectiva.",
    country: "México",
    specialty: "Negocios & DELE",
  },
  {
    name: "Isabella Rodríguez",
    image: "https://images.unsplash.com/photo-1758525861586-1c8c8e424dc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZlbWFsZSUyMHR1dG9yJTIwc21pbGluZ3xlbnwxfHx8fDE3NzQ4MTI5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Profesora joven y dinámica. Especializada en clases interactivas para principiantes y nivel intermedio.",
    country: "Argentina",
    specialty: "Principiantes",
  },
  {
    name: "Roberto Fernández",
    image: "https://images.unsplash.com/photo-1758685734503-58a8accc24e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBtYWxlJTIwcHJvZmVzc29yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc0ODEyOTg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Con 20 años de trayectoria, se especializa en gramática avanzada y preparación académica.",
    country: "Colombia",
    specialty: "Gramática avanzada",
  },
  {
    name: "Ana Sofía Torres",
    image: "https://images.unsplash.com/photo-1643892055607-192cf75e93f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXNwYW5pYyUyMHdvbWFuJTIwdGVhY2hlciUyMHNtaWxpbmd8ZW58MXx8fHwxNzc0ODEyOTk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Enfoque comunicativo y cercano. Experta en cultura hispana y español para viajeros.",
    country: "Chile",
    specialty: "Cultura & Viajes",
  },
  {
    name: "Diego Morales",
    image: "https://images.unsplash.com/photo-1758685848001-0396a85ba84f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhY2hlciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NDgxMjk5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Profesor versátil con pasión por la enseñanza personalizada y clases adaptadas a cada estudiante.",
    country: "Perú",
    specialty: "Personalización",
  },
];

export function TeachersSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D64545] mb-4 inline-flex items-center gap-3 justify-center">
            <GraduationCap className="w-10 h-10" />
            Nuestros profesores
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Conoce a nuestro equipo de profesionales apasionados, certificados y dedicados a tu éxito
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-[#FFF5F2] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#F5E6E0] hover:border-[#E87461] transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <ImageWithFallback
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-transparent to-transparent"></div>
                
                {/* Country Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 shadow-lg">
                  <Globe className="w-4 h-4 text-[#D64545]" />
                  <span className="text-sm font-medium text-foreground">{teacher.country}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-foreground">{teacher.name}</h3>
                
                <div className="inline-flex items-center gap-2 bg-[#FFE8E3] px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-[#D64545]" fill="#D64545" />
                  <span className="text-sm font-medium text-[#D64545]">{teacher.specialty}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {teacher.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Quieres conocer a tu profesor ideal?
          </p>
          <button className="px-8 py-4 bg-[#E87461] hover:bg-[#D64545] text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
            Agenda una clase de prueba
          </button>
        </div>
      </div>
    </section>
  );
}
