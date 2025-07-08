import React, { useEffect, useRef } from 'react';
import {
  FaQuestionCircle, FaLightbulb, FaFlask,
  FaBullseye, FaExclamationTriangle
} from 'react-icons/fa';

/* ——— Texto intacto ——— */
const bloques = [
  {
    id: 'intro', span: 3, icono: <FaQuestionCircle />,
    texto: `¿Qué pasa entre pedir creatividad e innovación en un brief y conseguir resultados reales? ¿Cuándo esas palabras que tanto se repiten pierden sentido y dejan de significar algo?`
  },
  {
    id: 'creatividad', span: 3, dobleCol: true, icono: <FaLightbulb />,
    texto: `Creatividad
La creatividad no es sólo pensar distinto por el gusto de ser diferente ni llamar la atención por el ruido que genera. Es pensar mejor. Es encontrar soluciones valiosas para desafíos concretos, conectando con lo que realmente le importa a una audiencia específica. No aparece de repente: se trabaja, se nutre de observación, análisis y criterio. Una idea verdaderamente creativa no se reconoce por ser original, sino por ser relevante.`
  },
  {
    id: 'innovacion', span: 3, dobleCol: true, icono: <FaFlask />,
    texto: `Innovación
Con la innovación pasa algo parecido. Innovar no es sólo presentar algo nuevo. Es transformar lo existente en algo mejor: mejorar procesos, optimizar formas de comunicarse, cambiar la manera en la que una marca se vincula con su público. No siempre lo innovador es visible a primera vista ni provoca ruido inmediato, pero si es auténtico genera cambios profundos y sostenibles. Lo demás es efímero.`
  },
  {
    id: 'brief', span: 3, icono: <FaBullseye />,
    texto: `Desafío del brief
Es fácil poner creatividad e innovación en un brief. Lo realmente desafiante es llenarlas de contenido real y estratégico. Se pueden hacer campañas visualmente impactantes, conceptos originales y piezas disruptivas, pero, si no están alineadas a objetivos claros y necesidades genuinas, pierden valor. Se vuelven entretenimiento superficial, no estrategias sólidas.`
  },
  {
    id: 'manifiesto', span: 3, destacado: true, icono: <FaExclamationTriangle />,
    texto: `La creatividad sin estrategia es sólo decoración. La innovación sin foco es asumir riesgos innecesarios.`
  },
  {
    id: 'cierre', span: 3, icono: <FaLightbulb />,
    texto: `Conclusión
En Fedes, sabemos que creatividad e innovación no son accesorios, sino piezas fundamentales para lograr resultados. Pero ninguna funciona por sí misma: ambas necesitan método, propósito y medición. Cuando se trabajan con claridad y consistencia, estas palabras dejan de ser clichés en un brief y se convierten en resultados concretos, relevantes y tangibles.`
  }
];

const CreatividadInnovacion = () => {
  const ref = useRef(null);

  /* Scroll-trigger que muestra/oculta .show para reanimar */
  useEffect(() => {
    const cards = ref.current.querySelectorAll('.notaCard');
    const io = new IntersectionObserver(
      entries =>
        entries.forEach(e =>
          e.isIntersecting
            ? e.target.classList.add('show')
            : e.target.classList.remove('show')
        ),
      { threshold: 0.2 }
    );
    cards.forEach(c => io.observe(c));
    return () => cards.forEach(c => io.unobserve(c));
  }, []);

  /* ——— util: separa título (1ª línea) y cuerpo ——— */
  const renderTexto = (texto, destacado) => {
    if (destacado) {
      return texto.split('. ').map((f, i) => (
        <p key={i} className="sentence">
          {f.trim()}
          {f.trim().endsWith('.') ? '' : '.'}
        </p>
      ));
    }
    /* bloque normal → título interno + cuerpo */
    const [titulo, ...resto] = texto.split('\n');
    return (
      <>
        {resto.length ? <h3 className="blockTitle">{titulo}</h3> : null}
        <p>
          {(resto.length ? resto.join('\n') : titulo).split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </>
    );
  };

  return (
    <main className="blogArticleSection creInnovaSection">
      <article className="articleCard">
        <header className="header">
          <h1>Creatividad e innovación: del brief a los resultados</h1>
        </header>

        <div className="gridNotas" ref={ref}>
          {bloques.map(({ id, span, icono, texto, destacado, dobleCol }) => (
            <section
              key={id}
              className={`notaCard${destacado ? ' destacado' : ''}${dobleCol ? ' dobleCol' : ''}`}
              style={{ gridColumn: `span ${span}` }}
            >
              <div className="icono">{icono}</div>
              {renderTexto(texto, destacado)}
            </section>
          ))}
        </div>

        {/* Imagen inferior */}
        <div className="articleImage">
          <img
            src="https://fedesagency.com/fedes-consultora/landing/imagen-nota-larga17.png"
            alt="Creatividad e innovación"
            loading="lazy"
          />
        </div>
      </article>
    </main>
  );
};

export default CreatividadInnovacion;
