import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ru" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ru: {
    // Navbar
    "nav.home": "Главная",
    "nav.about": "О нас",
    "nav.teachers": "Преподаватели",
    "nav.courses": "Курсы",
    "nav.testimonials": "Отзывы",
    "nav.freeClass": "Бесплатный урок",
    
    // Hero
    "hero.title": "Учите испанский с",
    "hero.titleHighlight": "уверенностью и страстью",
    "hero.subtitle": "Забронируйте БЕСПЛАТНЫЙ пробный урок сегодня",
    "hero.cta": "Забронировать бесплатный урок",
    "hero.note": "✨ Первый урок 100% бесплатно",
    
    // About
    "about.title": "Наша история",
    "about.text1": "Мы родились из искренней страсти делиться богатством испанского языка. Более десяти лет назад группа увлеченных преподавателей решила создать пространство, где обучение — это больше, чем просто запоминание слов.",
    "about.text2": "Мы верим, что каждый студент заслуживает персонального внимания и среды, где можно чувствовать себя уверенно и мотивированно.",
    "about.text3": "С тех пор мы помогли тысячам студентов со всего мира открыть для себя красоту испанского языка.",
    "about.years": "Лет",
    "about.students": "Студентов",
    "about.countries": "Стран",
    
    // Teachers
    "teachers.title": "Наши преподаватели",
    "teachers.subtitle": "Познакомьтесь с командой профессионалов",
    "teachers.cta": "Запланировать пробный урок",
    "teachers.question": "Хотите познакомиться с вашим идеальным преподавателем?",
    
    // Courses
    "courses.title": "Наши курсы",
    "courses.subtitle": "Программы для ваших целей",
    "courses.conversational": "Разговорный испанский",
    "courses.conversationalDesc": "Учитесь свободно общаться в повседневных ситуациях.",
    "courses.business": "Деловой испанский",
    "courses.businessDesc": "Освойте профессиональный испанский для карьеры.",
    "courses.exams": "Подготовка к экзаменам",
    "courses.examsDesc": "Полная подготовка к DELE и SIELE.",
    "courses.moreInfo": "Подробнее",
    "courses.note": "Не знаете, что выбрать? На бесплатном уроке мы оценим ваш уровень.",
    
    // Testimonials
    "testimonials.title": "Что говорят наши студенты",
    "testimonials.subtitle": "Тысячи студентов изменили свою жизнь с нами",
    "testimonials.satisfaction": "Уровень удовлетворенности",
    "testimonials.rating": "Средняя оценка",
    "testimonials.reviews": "Положительных отзывов",
    
    // Methodology
    "methodology.title": "Наша методология",
    "methodology.subtitle": "Современный и эффективный подход",
    "methodology.communicative": "Коммуникативный подход",
    "methodology.communicativeDesc": "Реальное общение с первого дня.",
    "methodology.interactive": "Интерактивные уроки",
    "methodology.interactiveDesc": "Передовые технологии обучения.",
    "methodology.personalized": "Полная персонализация",
    "methodology.personalizedDesc": "Индивидуальный подход к каждому.",
    "methodology.materials": "Аутентичные материалы",
    "methodology.materialsDesc": "Реальные ресурсы из испаноязычного мира.",
    "methodology.question": "Готовы попробовать наш метод?",
    "methodology.cta": "Начать бесплатный урок",
    
    // CTA
    "cta.badge": "Ваше будущее на испанском начинается сегодня",
    "cta.title": "Начните своё путешествие",
    "cta.titleHighlight": "в испанском",
    "cta.subtitle": "Забронируйте бесплатный урок и узнайте, почему тысячи нам доверяют",
    "cta.primary": "Забронировать бесплатный урок",
    "cta.secondary": "Узнать больше",
    "cta.noCommitment": "Без обязательств",
    "cta.noCommitmentSub": "100% бесплатно",
    "cta.fastResponse": "Быстрый ответ",
    "cta.fastResponseSub": "Менее чем за 24 часа",
    "cta.flexibility": "Полная гибкость",
    "cta.flexibilitySub": "Выберите своё время",
    
    // Footer
    "footer.description": "Меняем жизни через испанский с 2016 года.",
    "footer.quickLinks": "Быстрые ссылки",
    "footer.courses": "Наши курсы",
    "footer.contact": "Контакты",
    "footer.quote": "Изучение нового языка — это не только изучение разных слов для одних и тех же вещей, но и изучение другого способа мышления.",
    "footer.rights": "Все права защищены.",
    "footer.madeWith": "Сделано с",
    "footer.forStudents": "для студентов со всего мира",
  },
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.about": "Sobre nosotros",
    "nav.teachers": "Profesores",
    "nav.courses": "Cursos",
    "nav.testimonials": "Testimonios",
    "nav.freeClass": "Clase gratis",
    
    // Hero
    "hero.title": "Aprende español con",
    "hero.titleHighlight": "confianza y pasión",
    "hero.subtitle": "Reserva tu clase de prueba GRATIS hoy mismo",
    "hero.cta": "Reserva tu clase gratis",
    "hero.note": "✨ Primera clase 100% gratuita",
    
    // About
    "about.title": "Nuestra historia",
    "about.text1": "Nacimos de una pasión genuina por compartir la riqueza del idioma español. Hace más de una década, un grupo de profesores apasionados decidió crear un espacio donde el aprendizaje fuera más que memorizar palabras.",
    "about.text2": "Creemos que cada estudiante merece atención personalizada y un ambiente donde sentirse confiado y motivado.",
    "about.text3": "Desde entonces, hemos ayudado a miles de estudiantes de todo el mundo a descubrir la belleza de hablar español.",
    "about.years": "Años",
    "about.students": "Estudiantes",
    "about.countries": "Países",
    
    // Teachers
    "teachers.title": "Nuestros profesores",
    "teachers.subtitle": "Conoce a nuestro equipo de profesionales",
    "teachers.cta": "Agenda una clase de prueba",
    "teachers.question": "¿Quieres conocer a tu profesor ideal?",
    
    // Courses
    "courses.title": "Nuestros cursos",
    "courses.subtitle": "Programas para tus objetivos",
    "courses.conversational": "Español Conversacional",
    "courses.conversationalDesc": "Aprende a comunicarte con fluidez en situaciones cotidianas.",
    "courses.business": "Español para Negocios",
    "courses.businessDesc": "Domina el español profesional para impulsar tu carrera.",
    "courses.exams": "Preparación para Exámenes",
    "courses.examsDesc": "Preparación completa para DELE y SIELE.",
    "courses.moreInfo": "Más información",
    "courses.note": "¿No sabes cuál elegir? En tu clase gratuita evaluaremos tu nivel.",
    
    // Testimonials
    "testimonials.title": "Lo que dicen nuestros estudiantes",
    "testimonials.subtitle": "Miles de estudiantes han transformado sus vidas con nosotros",
    "testimonials.satisfaction": "Tasa de satisfacción",
    "testimonials.rating": "Calificación promedio",
    "testimonials.reviews": "Reseñas positivas",
    
    // Methodology
    "methodology.title": "Nuestra metodología",
    "methodology.subtitle": "Un enfoque moderno y efectivo",
    "methodology.communicative": "Enfoque comunicativo",
    "methodology.communicativeDesc": "Comunicación real desde el primer día.",
    "methodology.interactive": "Clases interactivas",
    "methodology.interactiveDesc": "Tecnología de vanguardia para aprender.",
    "methodology.personalized": "Personalización total",
    "methodology.personalizedDesc": "Adaptado a cada estudiante.",
    "methodology.materials": "Materiales auténticos",
    "methodology.materialsDesc": "Recursos reales del mundo hispanohablante.",
    "methodology.question": "¿Listo para experimentar nuestro método?",
    "methodology.cta": "Empieza tu clase gratuita",
    
    // CTA
    "cta.badge": "Tu futuro en español empieza hoy",
    "cta.title": "Comienza hoy tu viaje",
    "cta.titleHighlight": "en español",
    "cta.subtitle": "Reserva tu clase gratuita y descubre por qué miles confían en nosotros",
    "cta.primary": "Reserva tu clase gratis",
    "cta.secondary": "Conoce más",
    "cta.noCommitment": "Sin compromiso",
    "cta.noCommitmentSub": "100% gratis",
    "cta.fastResponse": "Respuesta rápida",
    "cta.fastResponseSub": "En menos de 24h",
    "cta.flexibility": "Flexibilidad total",
    "cta.flexibilitySub": "Elige tu horario",
    
    // Footer
    "footer.description": "Transformando vidas a través del español desde 2016.",
    "footer.quickLinks": "Enlaces rápidos",
    "footer.courses": "Nuestros cursos",
    "footer.contact": "Contacto",
    "footer.quote": "Aprender un nuevo idioma no solo es aprender palabras diferentes para las mismas cosas, sino aprender otra manera de pensar sobre las cosas.",
    "footer.rights": "Todos los derechos reservados.",
    "footer.madeWith": "Hecho con",
    "footer.forStudents": "para estudiantes de todo el mundo",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ru] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
