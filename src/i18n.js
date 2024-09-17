// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
            //Traducciones del Footer
            "footer_message": "All rights reserved",
            "lets_chat": "LET'S CHAT",
            "still": "Still",
            "questions": "have questions?",
            "schedule_meeting": "SCHEDULE A MEETING",
            "send_message": "SEND US A MESSAGE",
            "follow_us": "Follow us",
            "on": "on",
            "footer_paragraph": "Contact our team for clarity on our services and how we can help grow your business.",
            // Header translations
            "home": "HOME",
            "about_us": "ABOUT US",
            "services": "SERVICES",
            "success_stories": "SUCCESS STORIES",
            "contact": "CONTACT",
            "media": "MEDIA",
            "profile": "Profile",
            "applications": "Applications",
            "logout": "Logout",
            "down_arrow": "Down arrow",
            "close_menu": "Close menu",
            "unlock_potential": "Unlock your",
            "business_potential": "company's",
            "business_growth": "potential",
            "header_paragraph": "We drive the sustainable success of your business with innovative advertising, positioning strategies, and expert consulting to increase your revenue and consolidate your position as a market leader.",
            "view_success_stories": "VIEW SUCCESS STORIES",
            
            //segunda sección traducciones
            "why_fedes": "WHY",
            "joined_by": "Joined by the",
            "name": "name",
            "passion": "passion",
            "commitment": "commitment",
            "your_success": "for your success",
            "and_the": "and the",
            "digital_natives": "As digital natives, our high adaptability allows us to keep your business at the forefront and 100% up to date.",
            "learn_more": "LEARN MORE",
            "years_boosting": "YEARS",
            "boosting_businesses": "Boosting<br />businesses",
            "projects_boosted": "Projects<br />Boosted",
            "market_leaders": "Market<br />Leaders",

            //Tercera sección
            "our_solutions": "OUR THREE SOLUTIONS",
            "innovative_solutions": "Innovative solutions that generate",
            "tangible_results": "tangible",
            "measurable_results": "and measurable results",
            "positioning_title": "Positioning",
            "positioning_desc": "The perfect complement to boost your revenue. We enhance your company's leadership with disruptive marketing, creative branding, and impactful communication for your brand.",
            "performance_title": "Performance",
            "performance_desc": "We boost your company's revenue with effective advertising campaigns. How do we do it? With our AD-OP Method.",
            "consulting_title": "Business Consulting",
            "consulting_desc": "We enhance your company's structure, technology, and organization to transform it into a solid and scalable enterprise.",
            "view_details": "VIEW DETAILS",

            //Cuarta sección
            "success_cases": "SUCCESS STORIES",
            "trusted_by_brands": "These brands trust",
            "collaborations_desc": "Through close collaborations and a deep understanding of their needs, we’ve helped these companies achieve new levels of accomplishment and success. Discover how our expertise and commitment made a difference for these businesses.",
            "view_case_study": "VIEW CASE STUDY",
            "brand_1": "Brand 1",
            "brand_2": "Brand 2",
            "brand_3": "Brand 3",
            "brand_4": "Brand 4",
            "what_clients_say": "And what do they say about",
            "our_clients": "us?",
            "client_feedback_1": "Fedes Consultora revitalized our image. They are simply the best!",
            "client_feedback_2": "Fedes Consultora boosted our sales with their innovative and professional approach.",
            "client_feedback_3": "Thanks to Fedes Consultora, we implemented cutting-edge technologies and improved our efficiency.",
            "not_here_yet": "Is your brand not here yet?",
            "make_it_happen": "Let's chat to make it happen.",

            // Traducciones de la Quinta Sección
            "our_footprint": "Our",
            "media_voice": "footprint in the voice of",
            "the_media": "the media",
            "media_description": "We invite you to explore our articles where we share valuable resources, practical advice, and our experiences as we work day by day on our purpose.",
            "note_1_title": "From a simple question to a company: The birth of Fedes Consultora.",
            "note_1_description": "The name Federico has given identity to kings, entrepreneurs, and important historical figures over time.",
            "note_2_title": "Digital Leadership in the Veterinary Industry",
            "note_2_description": "Digitalization has become a necessity to survive. Why, then, is there still so much resistance?",
            "read_more": "READ MORE",
            "stay_tuned": "Stay tuned for the upcoming notes we will upload to learn more about us!",

        }
    },
    es: {
      translation: {
            //Traducciones del Footer
            "footer_message": "Todos los derechos reservados",
            "lets_chat": "HABLEMOS",
            "questions": "tenés dudas?",
            "still": "¿Aún",
            "schedule_meeting": "AGENDA UNA REUNIÓN",
            "send_message": "ENVÍANOS UN MENSAJE",
            "follow_us": "Seguinos",
            "on": "en",
            "footer_paragraph": "Ponete en contacto con nuestro equipo para brindarte claridad sobre nuestro servicio y cómo podemos ayudarte a potenciar tu negocio.",
            // Traducciones del Header
            "home": "INICIO",
            "about_us": "SOBRE NOSOTROS",
            "services": "SERVICIOS",
            "success_stories": "CASOS DE ÉXITO",
            "contact": "CONTACTO",
            "media": "PRENSA",
            "profile": "Perfil",
            "applications": "Aplicaciones",
            "logout": "Cerrar sesión",
            "down_arrow": "Flecha hacia abajo",
            "close_menu": "Cerrar menú",
            "unlock_potential": "Desbloqueá el",
            "business_potential": "potencial",
            "business_growth": "de tu empresa",
            "header_paragraph": "Impulsamos el éxito sostenible de tu negocio con publicidad innovadora, estrategias de posicionamiento y consultoría experta, para aumentar tu facturación y consolidar tu posición como líder del mercado.",
            "view_success_stories": "VER CASOS DE ÉXITO",

            //Segunda sección traducciones
            
            "why_fedes": "¿POR QUÉ",
            "joined_by": "Unidos por el",
            "name": "nombre",
            "passion": "pasión",
            "commitment": "compromiso",
            "and_the": "y el",
            "your_success": "para tu éxito",
            "digital_natives": "Como nativos digitales, nuestra alta capacidad de adaptación nos permite mantener a tu empresa a la vanguardia y 100% actualizada.",
            "learn_more": "CONOCÉ MÁS",
            "years_boosting": "AÑOS",
            "boosting_businesses": "Potenciando<br />empresas",
            "projects_boosted": "Proyectos<br />Potenciados",
            "market_leaders": "Líderes<br />de Mercado",
            
            //Tercera sección traducciones
            "our_solutions": "NUESTRAS TRES SOLUCIONES",
            "innovative_solutions": "Soluciones innovadoras que generan resultados",
            "tangible_results": "tangibles",
            "measurable_results": "y mensurables",
            "positioning_title": "Posicionamiento",
            "positioning_desc": "El complemento perfecto para elevar tu facturación. Potenciamos el liderazgo de tu compañía con Marketing Disruptivo, Branding Creativo y Comunicación de Impacto para tu marca.",
            "performance_title": "Performance",
            "performance_desc": "Potenciamos la facturación de tu compañía con Campañas Publicitarias efectivas. ¿Cómo lo hacemos? Con nuestro Método AD-OP.",
            "consulting_title": "Consultoría Empresarial",
            "consulting_desc": "Potenciamos la estructura, tecnología y organización de tu empresa para transformarla en una compañía sólida y escalable.",
            "view_details": "VER DETALLES",

            // Traducciones de la Cuarta Sección
            "success_cases": "CASOS DE ÉXITO",
            "trusted_by_brands": "Estas marcas confían en",
            "collaborations_desc": "A través de colaboraciones cercanas y una profunda comprensión de sus necesidades, hemos ayudado a estas empresas a alcanzar nuevos niveles de logro y éxito. Descubre cómo nuestra experiencia y compromiso marcaron la diferencia para estos negocios.",
            "view_case_study": "VER CASO DE ÉXITO",
            "brand_1": "Marca 1",
            "brand_2": "Marca 2",
            "brand_3": "Marca 3",
            "brand_4": "Marca 4",
            "what_clients_say": "¿Y qué dicen de",
            "our_clients": "nosotros?",
            "client_feedback_1": "Fedes Consultora revitalizó nuestra imagen. ¡Son simplemente los mejores!",
            "client_feedback_2": "Fedes Consultora impulsó nuestras ventas con su enfoque innovador y profesional.",
            "client_feedback_3": "Gracias a Fedes Consultora, implementamos tecnologías de vanguardia y mejoramos nuestra eficiencia.",
            "not_here_yet": "¿Tu marca aún no está aquí?",
            "make_it_happen": "Charlemos para hacerlo realidad.",
            
            // Traducciones de la Quinta Sección
            "our_footprint": "Nuestra",
            "media_voice": "huella en la voz de",
            "the_media": "los medios",
            "media_description": "Te invitamos a explorar nuestros artículos donde compartimos recursos valiosos, consejos prácticos y nuestras experiencias a través de trabajar día a día en nuestro propósito.",
            "note_1_title": "De una simple pregunta a una empresa: El nacimiento de Fedes Consultora.",
            "note_1_description": "El nombre Federico ha dado identidad a reyes, emprendedores y figuras históricas importantes a lo largo del tiempo.",
            "note_2_title": "Liderazgo Digital en la Industria Veterinaria",
            "note_2_description": "La digitalización se ha vuelto una necesidad para no desaparecer. ¿Por qué entonces sigue habiendo tanta resistencia?",
            "read_more": "LEER MÁS",
            "stay_tuned": "¡Mantente atento a las próximas notas que subiremos para enterarte más sobre nosotros!",
        }

    }
  },
  lng: "es",  // Idioma por defecto
  fallbackLng: "es",

  interpolation: {
    escapeValue: false // React ya hace el escaping por nosotros
  }
});

export default i18n;
