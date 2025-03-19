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
            },
            "manual_page": {
                "title": "THE ESSENCE OF A BRAND MANUAL",
                "intro_text": "A brand manual isn't just a pretty logo; it's a strategic guide that defines your identity and communicates your company's values.",
                "more_than_visual": "More than a visual guide",
                "more_than_visual_text_1": "When we think of a brand manual, it's easy to picture it as a technical document full of guidelines on logo usage, color schemes, or typography. <strong>But reducing it to that would be underestimating it.</strong>",
                "more_than_visual_text_2": "A brand manual is much more than a visual guide; it's a strategic tool that defines how a company presents itself to the world and builds meaningful relationships with its audience.",
                "why_fundamental": "Why is it a fundamental asset in corporate communication?",
                "why_fundamental_text": "A well-designed and updated manual not only organizes graphic elements but also becomes the common thread linking all brand expressions, from marketing to internal communication.",
                "click_emojis": "*Click on the emojis to see more benefits*",
                "benefits": {
                    "identity": "<strong>Define the company's identity.</strong> It’s not just about colors and logos but about values, purpose, and tone of voice. A strategy-aligned manual reinforces consistency at all touchpoints.",
                    "communication": "<strong>Enhance multichannel communication.</strong> Adaptability without losing consistency. The brand must be recognizable in social media, events, or commercial presentations.",
                    "value_proposal": "<strong>Reflect the value proposition.</strong> Differentiating in a crowded market requires more than good products or services. A strategic manual projects what makes your company unique.",
                    "efficiency": "<strong>Optimize processes and improve efficiency.</strong> Having clear guidelines saves time when creating communication pieces, avoids improvisation, and maintains message consistency."
                },
                "impact_organization": "Impact on the organization",
                "impact_text": "A well-structured manual aligns teams and turns employees into brand ambassadors.",
                "click_emojis_details": "*Click on the emojis to see more details*",
                "impact": {
                    "marketing_sales": "<strong>For marketing and sales teams:</strong> provides templates, key messages, storytelling examples, and formats adapted for effective communication.",
                    "employees": "<strong>For employees:</strong> facilitates the onboarding of new members and helps align the entire team under the same corporate identity.",
                    "internal_external_comms": "<strong>For internal and external communication:</strong> standardizes messages in social media, advertising, events, and other touchpoints.",
                    "employer_branding": "<strong>For employer branding:</strong> employees aligned with the brand become its best ambassadors."
                },
                "challenge_2025": "🌍 2025 Challenge",
                "challenge_title": "<strong>Engaging employees as protagonists of communication</strong>",
                "challenge_text_1": "The strongest brands are not built through advertising campaigns but through the commitment of those who make them up. In Simon Sinek’s words: \"Brands are not what we say they are; they’re what others say about us.\"",
                "challenge_text_2": "Therefore, an updated brand manual strengthens not only the external image but also serves as an internal compass, enabling every employee to become an active part of the company's narrative.",
                "challenge_text_3": "Does your company have a brand manual aligned with its vision? At Fedes Consultora, we help businesses develop manuals that organize their visual identity, boost positioning, strengthen reputation, and prepare them to lead their sector.",
                "challenge_contact": "<strong>📩 If you want your brand to not only look good but communicate with impact, let's talk.</strong>"
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
            "send_message": "ENVIANOS UN MENSAJE",
            "follow_us": "Seguinos",
            "on": "en",
            "footer_paragraph": "Ponete en contacto con nuestro equipo para que pueda brindarte claridad sobre nuestro servicio y sobre cómo potenciar tu negocio.",
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
            "header_paragraph": "Impulsamos el éxito sostenible de tu negocio con publicidad innovadora, estrategias de posicionamiento y consultoría experta para aumentar tu facturación y consolidar tu posición como líder del mercado.",
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
              "subtitle": "Nuestra <1>huella</1> en la voz de <1>los medios</1>",
              "description": "Te invitamos a explorar nuestros artículos, donde compartimos recursos valiosos, consejos prácticos y experiencias en nuestro camino hacia la transformación digital.",
              "read_more": "Leer más",
              "loading": "Cargando publicaciones..."
            },
            "manual_page": {
                "title": "LA ESENCIA DE UN MANUAL DE MARCA",
                "intro_text": "Un manual de marca no es solo un logo bonito, es la guía estratégica que define tu identidad y comunica los valores de tu empresa.",
                "more_than_visual": "Más que una guía visual",
                "more_than_visual_text_1": "Cuando pensamos en un manual de marca, es fácil imaginarlo como un documento técnico lleno de pautas sobre cómo usar el logo, qué colores emplear o qué tipografía elegir. <strong>Pero reducirlo a eso es subestimarlo.</strong>",
                "more_than_visual_text_2": "Un manual de marca es mucho más que una guía visual: es una herramienta estratégica que define cómo una compañía se presenta al mundo y construye relaciones significativas con su audiencia.",
                "why_fundamental": "¿Por qué es un activo fundamental en la comunicación corporativa?",
                "why_fundamental_text": "Un manual bien diseñado y actualizado no sólo ordena los elementos gráficos, sino que se convierte en el hilo conductor que une todas las expresiones de la marca, desde el marketing hasta la comunicación interna.",
                "click_emojis": "*Presioná los emojis para ver más beneficios*",
                "benefits": {
                    "0": "<strong>Definir la identidad de la compañía.</strong> No se trata solamente de colores y logotipos, sino de valores, propósito y tono de voz. Un manual alineado a la estrategia refuerza la coherencia en todos los puntos de contacto.",
                    "1": "<strong>Potenciar la comunicación multicanal.</strong> Adaptabilidad sin perder consistencia. La marca tiene que ser reconocible tanto en redes sociales como en eventos o presentaciones comerciales.",
                    "2": "<strong>Reflejar la propuesta de valor.</strong> Diferenciarse en un mercado saturado requiere más que buenos productos o servicios. Un manual estratégico proyecta lo que hace única a tu empresa.",
                    "3": "<strong>Optimizar procesos y mejorar la eficiencia.</strong> Contar con lineamientos claros ahorra tiempo en la creación de piezas de comunicación, evita improvisaciones y mantiene la coherencia de los mensajes."
                },
                "impact_organization": "Impacto en la organización",
                "impact_text": "Un manual bien estructurado alinea equipos y convierte a los colaboradores en embajadores de la marca.",
                "click_emojis_details": "*Presioná los emojis para ver más detalles*",
                "impact": {
                    "0": "<strong>Para el equipo de marketing y ventas:</strong> aporta templates, mensajes clave, ejemplos de storytelling y formatos adaptados para una comunicación efectiva.",
                    "1": "<strong>Para los colaboradores:</strong> facilita la integración de nuevos miembros y ayuda a alinear a todo el equipo bajo la misma identidad corporativa.",
                    "2": "<strong>Para la comunicación interna y externa:</strong> estandariza los mensajes en redes sociales, publicidad, eventos y otros puntos de contacto.",
                    "3": "<strong>Para el employer branding:</strong> los colaboradores alineados con la marca se convierten en sus mejores embajadores."
                },
                "challenge_2025": "🌍 Desafío 2025",
                "challenge_title": "<strong>Integrar a los colaboradores como protagonistas de la comunicación</strong>",
                "challenge_text_1": "Las marcas más fuertes no se construyen con campañas publicitarias, sino con el compromiso de quienes las conforman. En palabras de Simon Sinek: \"Las marcas no son lo que decimos que son; son lo que otros dicen sobre nosotros\".",
                "challenge_text_2": "Por eso, un manual de marca actualizado no sólo fortalece la imagen externa, sino que también es una brújula interna para que cada colaborador se convierta en parte activa de la narrativa de la empresa.",
                "challenge_text_3": "¿Tu empresa tiene un manual de marca alineado a su visión? En Fedes Consultora ayudamos a compañías a desarrollar manuales que organizan su identidad visual, potencian su posicionamiento, fortalecen su reputación y los preparan para liderar su sector.",
                "challenge_contact": "<strong>📩 Si querés que tu marca no sólo se vea bien, sino que comunique con impacto, hablemos.</strong>"
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
