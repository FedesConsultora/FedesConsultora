// src/pages/TerminosCondiciones.js
import React from 'react';

const TerminosCondiciones = () => {
  return (
    <section className="legal-container">
      {/* Introducción */}
      <header className="intro-legal">
        <h1 className="titulo-principal">📜 Términos y Condiciones de Uso</h1>
        <p className="fecha-actualizacion">
          Última actualización: 26 de mayo de 2025
        </p>
        <p className="descripcion">
          Los presentes Términos y Condiciones regulan el acceso y uso del sitio
          web <strong>fedes.ai</strong> (en adelante, el “Sitio”), titularidad de
          Fedes Solutions SRL (nombre comercial: Fedes Consultora), CUIT
          30-71861095-4, con domicilio en Plaza Paso 159, Piso 9, Calle 50, La
          Plata Noroeste, Buenos Aires (1900), Argentina (en adelante, “Fedes”,
          “nosotros” o la “Empresa”). Al navegar o utilizar el Sitio, el usuario
          (en adelante, “vos” o el “Usuario”) acepta plena y expresamente estos
          Términos y nuestra&nbsp;
          <a href="/politica-de-privacidad">Política de Privacidad</a>, que
          forma parte integrante de este documento. Si no estás de acuerdo,
          debés abstenerte de usar el Sitio.
        </p>
      </header>

      {/* Contenido legal */}
      <div className="legal-content">
        <h2>1. Objeto del Sitio</h2>
        <p>
          El Sitio brinda información sobre los servicios de consultoría,
          marketing y performance empresarial que ofrece Fedes. El contenido es
          puramente informativo y su publicación <strong>no constituye</strong>{' '}
          una oferta contractual, ni implica la celebración de un contrato de
          servicios. Cualquier propuesta comercial será enviada de forma
          individual y por escrito.
        </p>

        <h2>2. Uso permitido</h2>
        <p>Podés utilizar el Sitio únicamente con fines lícitos y personales. Queda prohibido:</p>
        <ul>
          <li>Utilizar el Sitio de forma que infrinja leyes vigentes o derechos de terceros.</li>
          <li>Intentar acceder sin autorización a bases de datos, cuentas o sistemas relacionados con el Sitio.</li>
          <li>Cargar o difundir virus, malware o código malicioso.</li>
          <li>
            Reproducir, duplicar, copiar, vender o explotar el Sitio o su
            contenido con fines comerciales sin permiso escrito de Fedes.
          </li>
        </ul>

        <h2>3. Envío de datos y formularios</h2>
        <p>
          Al completar formularios o contactarnos vía WhatsApp Business,
          garantizás que la información suministrada es veraz y actual. El
          tratamiento de datos personales se rige por la&nbsp;
          <a href="/politica-de-privacidad">Política de Privacidad</a>, donde se
          detallan finalidades, derechos y mecanismos de ejercicio (ARCO).
        </p>

        <h2>4. Propiedad intelectual</h2>
        <p>
          Todo el material del Sitio —textos, diseños, logotipos, gráficos,
          videos, bases de datos y código fuente— es propiedad exclusiva de
          Fedes o se utiliza con licencias debidamente autorizadas. Queda
          prohibida su reproducción total o parcial, modificación o distribución
          sin autorización previa y por escrito.
        </p>

        <h2>5. Contenido de terceros y enlaces externos</h2>
        <p>
          El Sitio puede incluir enlaces a sitios de terceros o integrar
          contenidos embebidos (por ejemplo, publicaciones en redes sociales).
          Fedes no controla ni asume responsabilidad por dichos contenidos ni
          por las prácticas de protección de datos de esos sitios. El acceso a
          servicios de terceros corre por tu cuenta y riesgo.
        </p>

        <h2>6. Exclusión y limitación de responsabilidad</h2>
        <p>
          Fedes realiza esfuerzos razonables para mantener la información
          actualizada, pero <strong>no garantiza</strong> que el contenido sea
          exacto, completo o libre de errores.
        </p>
        <p>
          El uso del Sitio se realiza <strong>bajo tu propia responsabilidad</strong>. Fedes no
          será responsable por daños directos o indirectos que pudieran derivarse
          del uso o imposibilidad de uso del Sitio.
        </p>
        <p>
          Fedes no garantiza la disponibilidad continua y operatividad
          ininterrumpida del Sitio; puede suspenderse por mantenimiento técnico
          o causas de fuerza mayor.
        </p>

        <h2>7. Herramientas de medición y publicidad</h2>
        <p>
          El Sitio utiliza cookies y tecnologías de terceros —incluidos Meta
          Pixel y Google Analytics— para fines de medición, remarketing y
          segmentación publicitaria. Al navegar aceptás el uso de estas
          tecnologías según lo detallado en la Política de Privacidad y las
          opciones de opt-out allí indicadas.
        </p>

        <h2>8. Modificaciones</h2>
        <p>
          Fedes puede modificar en cualquier momento estos Términos o la
          Política de Privacidad. Las modificaciones se publicarán en el Sitio y
          entrarán en vigor desde su fecha de publicación. El uso continuado del
          Sitio implicará la aceptación de los cambios.
        </p>

        <h2>9. Legislación aplicable y jurisdicción</h2>
        <p>
          Estos Términos se rigen por las leyes de la República Argentina.
          Cualquier controversia derivada del uso del Sitio será sometida a la
          jurisdicción de los Tribunales Ordinarios de la Ciudad de La Plata,
          con renuncia expresa a cualquier otro fuero o jurisdicción que pudiera
          corresponder.
        </p>

        <h2>10. Contacto</h2>
        <p>
          Para consultas sobre estos Términos podés escribirnos a:&nbsp;
          <br />
          📧 <a href="mailto:info@fedes.ai">info@fedes.ai</a>
          <br />
          📍 Plaza Paso 159, Piso 9, La Plata Noroeste, Calle 50, 1900 – Buenos Aires, Argentina
          <br />
          📞 +54 221 309 2529
        </p>
      </div>
    </section>
  );
};

export default TerminosCondiciones;
