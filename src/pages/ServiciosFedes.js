// src/pages/ServiciosFedes.jsx
import { FaBullseye, FaChartLine, FaLightbulb, FaPenFancy,
         FaBullhorn, FaLayerGroup } from 'react-icons/fa';

const bloques = [
  {
    id: 1,
    icono: <FaBullseye />,
    titulo: 'Estrategia antes que acción',
    texto: `El marketing no es publicar por publicar. Pensamos antes de hacer: 
            planeamos con inteligencia, ejecutamos con sensibilidad y medimos con precisión. 
            Cada servicio nace de una estrategia clara trabajada codo a codo con vos y alineada 
            con tus objetivos reales de negocio.`
  },
  {
    id: 2,
    icono: <FaChartLine />,
    titulo: 'Posicionamiento digital que trasciende',
    texto: `Diseñamos sitios web, blogs y landings que no sólo informan, sino que persuaden. 
            Creamos y renovamos marcas con estrategia, no sólo con diseño, y desarrollamos manuales 
            que unifican criterios para cada punto de contacto.`
  },
  {
    id: 3,
    icono: <FaBullhorn />,
    titulo: 'Publicidad con foco en resultados',
    texto: `Meta Ads, Google Ads, segmentación inteligente, optimización continua. 
            Nada de promesas vacías: planificación, seguimiento y mejora constante. 
            Cada peso invertido tiene que tener sentido. Cada mensaje, un objetivo.`
  },
  {
    id: 4,
    icono: <FaLightbulb />,
    titulo: 'Consultoría estratégica',
    texto: `Desde análisis de competencia hasta definición de KPIs. 
            Nos involucramos para que cada decisión esté respaldada por información, 
            intuición y experiencia. Nada se improvisa, todo se conecta.`
  },
  {
    id: 5,
    icono: <FaPenFancy />,
    titulo: 'Contenido que se siente',
    texto: `Creamos textos, imágenes, campañas, producciones audiovisuales, newsletters 
            y piezas que no sólo se ven: se sienten. El contenido con propósito construye relaciones duraderas.`
  },
  {
    id: 6,
    icono: <FaLayerGroup />,
    titulo: 'Ecosistema digital integrado',
    texto: `Redes sociales, mailings, canales de atención, eventos en vivo, salas de streaming, comunidad. 
            No se trata de sumar canales, sino de integrarlos con coherencia para darle a tu marca 
            presencia real, voz clara y acción efectiva.`
  }
];

const ServiciosFedes = () => (
  <main className="blogArticleSection">
    <article className="articleCard">
      <header className="header">
        <h1>¿Qué servicios ofrecemos en Fedes?</h1>
        <p className="lede">
          En Fedes no hacemos de todo. <strong>Hacemos lo importante.</strong><br />
          Lo que hace crecer, conectar, emocionar; lo que transforma una marca en una experiencia.
        </p>
      </header>

      {/* Intro estrategia general, sin modificar el texto */}
      <section className="introParrafo">
        <p>
          Sabemos que el marketing no es publicar por publicar. Es pensar antes de hacer. 
          Es planear con inteligencia, ejecutar con sensibilidad y medir con precisión. 
          Por eso, cada uno de nuestros servicios parte de una estrategia clara, trabajada en conjunto 
          con nuestros clientes, alineada a sus objetivos reales de negocio.
        </p>
      </section>

      {/* Bloques de servicios */}
      <div className="gridServicios">
        {bloques.map(({ id, icono, titulo, texto }) => (
          <section key={id} className="servicioCard">
            <div className="numero">{id.toString().padStart(2, '0')}</div>
            <div className="icono">{icono}</div>
            <h2>{titulo}</h2>
            <p>{texto}</p>
          </section>
        ))}
      </div>

      {/* Conclusión */}
      <section className="conclusion">
        <p>
          En resumen: no hacemos marketing para estar. <strong>Hacemos marketing para transformar.</strong>
          Y si estás leyendo esto, es porque sentís que tu marca tiene más para dar.
        </p>
        <p>Hablemos. En Fedes, estamos siempre listos para construir con vos.</p>
        <a href="/contactanos" className="ctaLink">Contactanos</a>
      </section>
    </article>
  </main>
);

export default ServiciosFedes;