import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { TeachersSection } from "./components/TeachersSection";
import { CoursesSection } from "./components/CoursesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { MethodologySection } from "./components/MethodologySection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      
      
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        
        <section id="nosotros">
          <AboutSection />
        </section>
        
        <section id="profesores">
          <TeachersSection />
        </section>
        
        <section id="cursos">
          <CoursesSection />
        </section>
        
        <section id="testimonios">
          <TestimonialsSection />
        </section>
        
        <section id="metodologia">
          <MethodologySection />
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}
