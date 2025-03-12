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
            "about_us": "ABOUT FEDES",
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
            
            // Traducciones nuevas página "Nosotros"
            "small_line": "Small line",
            "small_logo_fedes": "small logo Fedes",
            "why": "WHY",
            "united_by_name_part1": "United by the",
            "united_by_name_part2": "the",
            "united_by_name_part3": "and the",
            "united_by_name_part4": "to your success",
            "united_by_name_nombre": "name",
            "united_by_name_pasion": "passion",
            "united_by_name_compromiso": "commitment",
            "digital_natives": "As digital natives, our high adaptability allows us to keep your company at the forefront and 100% up-to-date.",
            "learn_more": "LEARN MORE",
            "semi_circular_frame": "Semi-circular frame",
            "fede_juan_1": ".Bachelor in Business Administration from Universidad de San Andrés",
            "fede_juan_2": ".Master’s in Design and Marketing from UNLP",
            "fede_juan_3": ".Founder of ReydelosNegocios (400k followers)",
            "fede_juan_4": ".Creator of over 50 digital brands",
            "fede_juan_5": ".More than 8 years of experience in the Digital Marketing world",
            "view_linkedin": "VIEW LINKEDIN",
            "semi_circular_frame": "Semi-circular frame",
            "arrow_right": "Right arrow",
            "leaders": "LEADERS",
            "team_of_professionals": "A team of professionals committed to delivering results for your company.",
            "leaders_text_part1": "A team of professionals",
            "leaders_text_strong1": "committed",
            "leaders_text_part2": "to delivering",
            "leaders_text_strong2": "results for your company.",

            //Tercera sección
            "our_solutions": "OUR THREE MAIN SERVICES",
            "innovative_solutions": "Innovative solutions that generate",
            "tangible_results": "tangible",
            "measurable_results": "and measurable results",
            "positioning_title": "Positioning",
            "positioning_desc": "The perfect complement to boost your revenue. We boost your company's leadership with disruptive marketing, creative branding, and impactful communications.",
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
            "about_us": "SOBRE FEDES",
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
            
            // Página Nosotros
            "small_line": "línea pequeña",
            "small_logo_fedes": "logo pequeño fedes",
            "why": "¿POR QUÉ",
            "united_by_name_part1": "Unidos por el",
            "united_by_name_part2": "la",
            "united_by_name_part3": "y el",
            "united_by_name_part4": "para tu éxito",
            "united_by_name_nombre": "nombre",
            "united_by_name_pasion": "pasión",
            "united_by_name_compromiso": "compromiso",
            "digital_natives": "Como nativos digitales, nuestra alta capacidad de adaptación nos permite mantener a tu empresa a la vanguardia y 100% actualizada.",
            "learn_more": "CONOCÉ MÁS",
            "semi_circular_frame": "Recuadro SemiCircular",
            "fede_juan_1": ".Licenciado en Administración de Empresas de la Universidad de San Andrés",
            "fede_juan_2": ".Máster en Diseño y Marketing en UNLP",
            "fede_juan_3": ".Fundador de ReydelosNegocios (400k seguidores)",
            "fede_juan_4": ".Creador de más de 50 marcas digitales",
            "fede_juan_5": ".Más de 8 años en el mundo del Marketing Digital",
            "fede_chironi_1": "Máster en Marketing Digital en Texas (USA).",
            "fede_chironi_2": "Gerente en Arcor S.A. de Marketing.",
            "fede_chironi_3": "Certificado por Google Partner.",
            "fede_chironi_4": "Miembro del Jurado Experto de la Asociación Argentina de Marketing.",
            "view_linkedin": "VER LINKEDIN",
            "arrow_right": "Flecha Derecha",
            "semi_circular_frame": "Recuadro SemiCircular",
            "leaders": "LÍDERES",
            "team_of_professionals": "Un equipo de profesionales comprometidos en brindarle resultados a tu compañía.",
            "leaders_text_part1": "Un equipo de profesionales",
            "leaders_text_strong1": "comprometidos",
            "leaders_text_part2": "en brindar",
            "leaders_text_strong2": "resultados para tu compañía.",
                
            //Tercera sección traducciones
            "our_solutions": "NUESTROS TRES SERVICIOS PRINCIPALES",
            "innovative_solutions": "Soluciones innovadoras que generan resultados",
            "tangible_results": "tangibles",
            "measurable_results": "y mensurables",
            "positioning_title": "Posicionamiento",
            "positioning_desc": "El complemento perfecto para elevar tu facturación. Potenciamos el liderazgo de tu compañía con marketing disruptivo, branding creativo y comunicación de impacto para tu marca.",
            "performance_title": "Performance",
            "performance_desc": "Potenciamos la facturación de tu compañía con campañas publicitarias efectivas. ¿Cómo lo hacemos? Con nuestro Método AD-OP.",
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
