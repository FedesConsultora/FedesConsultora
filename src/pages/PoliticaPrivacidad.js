import React, { useEffect } from "react";

/**
 * Página de Política de Privacidad – Fedes Consultora
 * Basado en los estilos de Blog (blog-container) pero con fondo propio
 */
export default function PoliticaPrivacidad() {
  // Lleva al inicio al montar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="legal-container">
      <div className="intro-legal">
        <h1 className="titulo-principal">🛡️ Política de Privacidad</h1>
        <p className="fecha-actualizacion">Última actualización: 26 de mayo de 2025</p>
        <p className="descripcion">
          En <strong>Fedes Consultora</strong> (nombre comercial de <strong>Fedes Solutions
          SRL</strong>) nos comprometemos a proteger tu privacidad y tus datos personales,
          conforme a la Ley 25.326 de Protección de Datos Personales de la República Argentina y a los términos de las plataformas con
          las que operamos (Meta Ads, Google Ads, WhatsApp Business).
        </p>
      </div>

      <div className="legal-content">
        {/* --- 1. Responsable --- */}
        <h2>1. Responsable del tratamiento</h2>
        <p>
          <strong>Fedes Solutions SRL</strong> <br /> CUIT: 30-71861095-4 <br /> Domicilio: Plaza
          Paso 159, Piso 9, Calle 50, La Plata Noroeste, Buenos Aires (1900), Argentina
          <br /> Mail: info@fedes.ai
        </p>

        {/* --- 2. Datos --- */}
        <h2>2. Datos que recopilamos</h2>
        <ul>
          <li>Nombre y apellido</li>
          <li>Correo electrónico</li>
          <li>Teléfono</li>
          <li>Información de navegación y dispositivos (cookies, píxeles y tecnologías similares)</li>
          <li>Datos ingresados en formularios internos o en Lead Ads dentro de Facebook / Instagram</li>
        </ul>

        {/* --- 3. Finalidades --- */}
        <h2>3. Finalidades</h2>
        <ul>
          <li>Responder consultas y cotizaciones enviadas vía formularios o WhatsApp.</li>
          <li>Enviar novedades, promociones y contenidos con tu consentimiento.</li>
          <li>Medir y optimizar nuestras campañas de marketing (Meta Ads, Google Ads).</li>
          <li>Mejorar la experiencia de usuario en nuestro sitio.</li>
        </ul>

        {/* --- 4. Base legal --- */}
        <h2>4. Base legal</h2>
        <p>
          Tratamos tus datos con tu <strong>consentimiento libre, expreso e informado</strong>. Podés
          retirarlo cuando quieras escribiendo a info@fedes.ai.
        </p>

        {/* --- 5. WhatsApp --- */}
        <h2>5. Comunicación por WhatsApp Business</h2>
        <p>
          Solo contactamos a quienes brindaron su número voluntariamente. Podés solicitar la baja o
          supresión de tus datos en cualquier momento. Toda la información intercambiada será
          tratada confidencialmente.
        </p>

        {/* --- 6. Cookies --- */}
        <h2>6. Cookies, Facebook Pixel y otras tecnologías de seguimiento</h2>
        <p>
          Nuestro sitio utiliza cookies propias y de terceros (incluido Meta Pixel/Facebook Pixel y
          Google Analytics) para:
        </p>
        <ul>
          <li>Analizar el tráfico y medir la eficacia de las campañas.</li>
          <li>Crear audiencias y mostrarte publicidad relevante en Facebook, Instagram y otros sitios.</li>
          <li>Recordar tus preferencias de navegación.</li>
        </ul>
        <blockquote className="meta-quote">
          “Facebook (Meta) y otros terceros pueden usar cookies, balizas web y tecnologías similares
          para recopilar o recibir información de este sitio web y de otras páginas de Internet, y
          usarla para proporcionar servicios de medición y anuncios dirigidos.”
        </blockquote>
        <h3>Cómo desactivar u optar por no participar</h3>
        <ul>
          <li>Configurá tus Preferencias de anuncios de Facebook.</li>
          <li>
            Visitá la página de opt‑out de la Digital Advertising Alliance: <a href="http://www.aboutads.info/choices" target="_blank" rel="noopener noreferrer">aboutads.info/choices</a>.
          </li>
          <li>Bloqueá o eliminá cookies desde tu navegador (puede afectar algunas funciones).</li>
        </ul>

        {/* --- 7. Lead Ads --- */}
        <h2>7. Procesamiento de datos de Lead Ads</h2>
        <p>
          Cuando completás un formulario de Lead Ad en Facebook o Instagram, Meta nos envía la
          información que brindaste. Usaremos esos datos únicamente para los fines indicados en esta
          política y según los consentimientos marcados en el formulario.
        </p>

        {/* --- 8. Seguridad --- */}
        <h2>8. Seguridad</h2>
        <p>
          Aplicamos medidas técnicas y organizativas razonables (cifrado en tránsito, controles de
          acceso, backups cifrados) para evitar acceso no autorizado, pérdida o alteración de los
          datos.
        </p>

        {/* --- 9. Transferencias --- */}
        <h2>9. Transferencias a terceros</h2>
        <p>
          No vendemos tus datos. Solo los compartimos con:
        </p>
        <ul>
          <li>Proveedores de servicios de email, hosting y análisis (p.ej. Meta Platforms, Google LLC).</li>
          <li>
            Proveedores que actúan en nuestro nombre y bajo acuerdos de confidencialidad. En caso de
            transferencias internacionales, garantizamos niveles adecuados de protección conforme
            art. 12 Ley 25.326.
          </li>
        </ul>

        {/* --- 10. Plazo --- */}
        <h2>10. Plazo de conservación</h2>
        <p>
          Conservamos los datos mientras dure la relación comercial o hasta que revoques tu
          consentimiento, salvo obligaciones legales de conservación más prolongadas.
        </p>

        {/* --- 11. Derechos --- */}
        <h2>11. Derechos de los titulares</h2>
        <p>
          Podés ejercer tus derechos de Acceso, Rectificación, Cancelación u Oposición enviando un
          mail a info@fedes.ai con copia de tu DNI. Responderemos en un plazo máximo de 10 días
          hábiles.
        </p>

        {/* --- 12. Autoridad --- */}
        <h2>12. Autoridad de control</h2>
        <p>
          Si considerás que tus derechos no han sido respetados, podés reclamar ante la Dirección
          Nacional de Protección de Datos Personales (AAIP) –{' '}
          <a href="https://www.argentina.gob.ar/aaip/datospersonales" target="_blank" rel="noopener noreferrer">
            https://www.argentina.gob.ar/aaip/datospersonales
          </a>.
        </p>

        {/* --- 13. Cambios --- */}
        <h2>13. Cambios en la política</h2>
        <p>
          Nos reservamos el derecho de modificar esta política. Las modificaciones se publicarán en
          este mismo enlace y regirán desde su publicación.
        </p>

        {/* --- 14. Contacto --- */}
        <h2>14. Contacto</h2>
        <p>
          📧 info@fedes.ai <br /> 📍 Plaza Paso 159, Piso 9, La Plata Noroeste, Calle 50, 1900 –
          Buenos Aires, Argentina <br /> 📞 +54 221 309 2529
        </p>
      </div>
    </section>
  );
}
