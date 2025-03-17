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
            "galery": "GALERY",
            "contact": "CONTACT",
            "media": "BLOG",
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
            "arrow_right": "Right arrow",
            "leaders": "LEADERS",
            "team_of_professionals": "A team of professionals committed to delivering results for your company.",
            "leaders_text_part1": "A team of professionals",
            "leaders_text_strong1": "committed",
            "leaders_text_part2": "to delivering",
            "leaders_text_strong2": "results for your company.",
            "leader_desing": "Design leader",
            "leader_comunication": "Communication leader",
            "CMO": "CMO",
            "leader_proyect": "Proyect leader",
            //SERVICIOS
            "our_solutions": "OUR THREE MAIN SERVICES",
            "innovative_solutions": "Innovative solutions that generate",
            "tangible_results": "tangible",
            "measurable_results": "and measurable results",
            "arrow_left": "Left arrow",
            "service": {
              "posicionamiento": {
                "titulo": "Positioning",
                "texto": "The perfect complement to boost your revenue. We enhance your company's leadership with disruptive marketing, creative branding, and impactful communication."
              },
              "performance": {
                "titulo": "Performance",
                "texto": "We boost your company's revenue by enhancing its structure, technology, and organization to transform it into a solid and scalable enterprise."
              },
              "consultoria": {
                "titulo": "Business Consulting",
                "texto": "We strengthen your company's structure, technology, and organization to make it solid and scalable."
              }
            },

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
            // Gallery translations
            "gallery_loading": "Loading images...",
            "gallery_empty": "No images found",
            "gallery_title": "GALLERY",
            "gallery_subtitle": "Our <1>essence,</1> captured in <1>images that inspire</1>",

            "contact_page": {
              "title": "CONTACT",
              "subtitle": "Let's work together to boost <strong>your business</strong>",
              "description": "Contact us for any inquiry related to our <strong>consulting and digital marketing services.</strong> We will respond as soon as possible.",
              "form": {
                "label_fullname": "Full Name *",
                "label_phone": "Phone",
                "label_email": "Email *",
                "label_company": "Company",
                "label_interest": "Service of interest *",
                "interest_options": {
                  "consultoria": "Business Consulting",
                  "redes": "Social Media Management",
                  "performance": "Performance"
                },
                "label_message": "Message *",
                "button_send": "Send Message",
                "sending": "Sending message...",
                "success": "Message sent successfully 🎉"
              },
              "info": {
                "title": "Fedes Consultora",
                "address": "Plaza Paso 159, Buenos Aires",
                "phone": "+54 9 221 303-2529",
                "email": "info@fedesconsultora.com"
              }
            },
            "blog_page": {
              "title": "BLOG",
              "subtitle": "Our <1>footprint</1>, in the voice of <1>the media</1>",
              "description": "We invite you to explore our articles where we share valuable resources, practical advice, and our experiences on our journey towards digital transformation.",
              "read_more": "Read more",
              "loading": "Loading posts..."
            }
        }
    },
    es: {
      translation: {
            //Traducciones del Footer
            "footer_message": "Todos los derechos reservados",
            "lets_chat": "HABLEMOS",
            "questions": "tenés dudas?",
            "still": "¿Aún",
            "schedule_meeting": "AGENDÁ UNA REUNIÓN",
            "send_message": "ENVÍANOS UN MENSAJE",
            "follow_us": "Seguinos",
            "on": "en",
            "footer_paragraph": "Ponete en contacto con nuestro equipo para brindarte claridad sobre nuestro servicio y cómo podemos ayudarte a potenciar tu negocio.",
            // Traducciones del Header
            "home": "INICIO",
            "about_us": "SOBRE FEDES",
            "services": "SERVICIOS",
            "galery": "GALERÍA",
            "contact": "CONTACTO",
            "media": "BLOG",
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
            "leaders": "LÍDERES",
            "team_of_professionals": "Un equipo de profesionales comprometidos en brindarle resultados a tu compañía.",
            "leaders_text_part1": "Un equipo de profesionales",
            "leaders_text_strong1": "comprometidos",
            "leaders_text_part2": "en brindar",
            "leaders_text_strong2": "resultados para tu compañía.",
            "leader_desing": "Líder de diseño",
            "leader_comunication": "Líder de comunicación",
            "CMO": "CMO",
            "leader_proyect": "Líder de proyecto",
                
            // Traducciones para la sección de servicios (tercera sección)
            "our_solutions": "NUESTROS TRES SERVICIOS PRINCIPALES",
            "innovative_solutions": "Soluciones innovadoras que generan",
            "tangible_results": "resultados tangibles",
            "measurable_results": "y mensurables",
            "arrow_left": "Flecha Izquierda",
            "service": {
              "posicionamiento": {
                "titulo": "Posicionamiento",
                "texto": "El complemento perfecto para elevar tu facturación. Potenciamos el liderazgo de tu compañía con marketing disruptivo, branding creativo y comunicación de impacto para tu marca."
              },
              "performance": {
                "titulo": "Performance",
                "texto": "Potenciamos la estructura, tecnología y organización de tu empresa para transformarla en una compañía sólida y escalable."
              },
              "consultoria": {
                "titulo": "Consultoría empresarial",
                "texto": "Potenciamos la estructura, tecnología y organización de tu empresa para que sea sólida y escalable."
              }
            },

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

            // Traducciones de la Galería
            "gallery_loading": "Cargando imágenes...",
            "gallery_empty": "No hay imágenes",
            "gallery_title": "GALERÍA",
            "gallery_subtitle": "Nuestra <1>esencia,</1> capturada en <1>imágenes que inspiran</1>",

            //Contacto
            "contact_page": {
              "title": "CONTACTO",
              "subtitle": "Trabajemos juntos para impulsar <strong>tu negocio</strong>",
              "description": "Contáctanos sobre cualquier consulta relacionada con nuestros <strong>servicios de consultoría y marketing digital.</strong> Te responderemos <strong>lo antes posible.</strong>",
              "form": {
                "label_fullname": "Nombre completo *",
                "label_phone": "Teléfono",
                "label_email": "Email *",
                "label_company": "Empresa",
                "label_interest": "Servicio de interés *",
                "sending": "Enviando...",
                "interest_options": {
                  "consultoria": "Consultoría Empresarial",
                  "redes": "Posicionamiento",
                  "performance": "Performance"
                },
                "label_message": "Mensaje *",
                "button_send": "Enviar mensaje",
                "success": "Mensaje enviado con éxito 🎉",

              },
              "info": {
                "title": "Fedes Consultora",
                "address": "Plaza Paso 159, Buenos Aires",
                "phone": "+54 9 221 303-2529",
                "email": "info@fedesconsultora.com"
              },
            },
            "blog_page": {
              "title": "BLOG",
              "subtitle": "Nuestra <1>huella</1>, en la voz de <1>los medios</1>",
              "description": "Te invitamos a explorar nuestros artículos, donde compartimos recursos valiosos, consejos prácticos y experiencias en nuestro camino hacia la transformación digital.",
              "read_more": "Leer más",
              "loading": "Cargando publicaciones..."
            }
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
