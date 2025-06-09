import React, { useEffect, useRef } from 'react';
import {
  FaLightbulb, FaFingerprint, FaRedoAlt,
  FaLink, FaExclamationTriangle
} from 'react-icons/fa';

/* —— Bloques de contenido —— */
const bloques = [
  {
    id: 'intro',
    span: 3,
    icono: <FaLightbulb />,
    texto: `Las audiencias están cada vez más entrenadas y los formatos cambian a toda velocidad.
En ese contexto, lo que diferencia a una marca no es quién publica más, sino quién logra sostener una narrativa confiable, consistente y con sentido.
El contenido no es un truco. Es una forma de construir vínculos. Y para eso, hay tres pilares que no pueden faltar en ninguna estrategia: credibilidad, constancia y coherencia.`
  },
  {
    id: 'cred',
    span: 1,
    icono: <FaFingerprint />,
    texto: `Credibilidad
La base de todo. 
La confianza no se gana con promesas vacías, sino con contenidos que reflejan lo que la marca realmente es.
Credibilidad es decir lo que hacés y hacer lo que decís. Es mostrar sin exagerar. Es no subestimar a la audiencia. Y en redes, donde todo se expone, o sos creíble o sos descartable.`
  },
  {
    id: 'const',
    span: 1,
    icono: <FaRedoAlt />,
    texto: `Constancia
No alcanza con tener buenas ideas. Hay que sostenerlas.
La constancia es ese músculo silencioso que no se ve en la publicación viral, pero sí en la estrategia de fondo.
Es estar presente. Escuchar. Medir. Ajustar. Es entender que una marca no se construye en un día ni con una campaña, sino con cada pequeño paso que reafirma su identidad.`
  },
  {
    id: 'coher',
    span: 1,
    icono: <FaLink />,
    texto: `Coherencia
El gran diferenciador.
El contenido puede ser lindo, ingenioso o incluso viral, pero si no está alineado con los valores y el tono de la marca, pierde fuerza.
La coherencia es lo que permite que todo tenga un hilo: el posteo, la respuesta a un comentario, la campaña, el mail, el sitio web. Es lo que hace que una marca se sienta real, íntegra, confiable.`
  },
  {
    id: 'manif',
    span: 3,
    destacado: true,
    icono: <FaExclamationTriangle />,
    texto: `Credibilidad sin constancia es una promesa rota. Constancia sin coherencia es ruido. Coherencia sin credibilidad no conmueve.`
  },
  {
    id: 'cierre',
    span: 3,
    icono: <FaLightbulb />,
    texto: `Quienes crean contenido con estas tres C no sólo comunican: construyen marcas que importan.`
  }
];

const TresC = () => {
  const ref = useRef(null);

  /* Re-animar cada vez que entra / sale del viewport */
  useEffect(() => {
    const cards = ref.current.querySelectorAll('.notaCard');
    const io = new IntersectionObserver(
      entries =>
        entries.forEach(e =>
          e.isIntersecting
            ? e.target.classList.add('show')
            : e.target.classList.remove('show')
        ),
      { threshold: 0.15 }
    );
    cards.forEach(c => io.observe(c));
    return () => cards.forEach(c => io.unobserve(c));
  }, []);

  return (
    <main className="blogArticleSection tresCSection">
      <article className="articleCard">
        <header className="header">
          <h1>Las tres C de los creadores de contenido</h1>
        </header>

        <div className="gridNotas" ref={ref}>
          {bloques.map(({ id, span, icono, texto, destacado }) => (
            <section
              key={id}
              className={`notaCard${destacado ? ' destacado' : ''}`}
              style={{ gridColumn: `span ${span}` }}
            >
              <div className="icono">{icono}</div>

              {destacado ? (
                texto.split('. ').map((f, i) => (
                  <p key={i} className="sentence">
                    {f.trim()}
                    {f.trim().endsWith('.') ? '' : '.'}
                  </p>
                ))
              ) : (
                <p>
                  {texto.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              )}
            </section>
          ))}
        </div>
        <div className="articleImage">
          <img
            src="https://fedesagency.com/fedes-consultora/landing/imagen-nota-larga16.png"
            alt="Imagen de 3C"
            loading="lazy"
          />
        </div>
      </article>
    </main>
  );
};

export default TresC;