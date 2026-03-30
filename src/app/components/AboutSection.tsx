import { Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-[#FFF5F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D64545] mb-4 inline-flex items-center gap-3 justify-center">
            <Heart className="w-10 h-10" fill="#D64545" />
            Nuestra historia
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1639104796286-9d5d0dd11430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzaW9uYXRlJTIwdGVhY2hlciUyMHN0b3J5dGVsbGluZ3xlbnwxfHx8fDE3NzQ4MTI5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Profesora enseñando con pasión"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E87461] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#F4A491] rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground/90">
                Nacimos de una <span className="text-[#D64545] font-semibold">pasión genuina</span> por compartir la riqueza del idioma español. 
                Hace más de una década, un grupo de profesores apasionados decidió crear un espacio donde el aprendizaje 
                fuera más que memorizar vocabulario: queríamos crear <span className="text-[#E87461] font-semibold">conexiones reales</span>.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/90">
                Creemos que cada estudiante merece atención personalizada y un ambiente donde sentirse 
                <span className="text-[#D64545] font-semibold"> confiado y motivado</span>. Nuestro enfoque humano nos distingue: 
                no somos solo una escuela, somos una <span className="text-[#E87461] font-semibold">familia global</span> unida por el amor al español.
              </p>

              <p className="text-lg leading-relaxed text-foreground/90">
                Desde entonces, hemos ayudado a miles de estudiantes de todo el mundo a descubrir la belleza de hablar español, 
                abriendo puertas a nuevas culturas, oportunidades profesionales y amistades que duran toda la vida.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-[#F5E6E0]">
                <div className="text-3xl font-bold text-[#D64545]">10+</div>
                <div className="text-sm text-muted-foreground mt-1">Años</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-[#F5E6E0]">
                <div className="text-3xl font-bold text-[#E87461]">5000+</div>
                <div className="text-sm text-muted-foreground mt-1">Estudiantes</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center border border-[#F5E6E0]">
                <div className="text-3xl font-bold text-[#F4A491]">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Países</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
