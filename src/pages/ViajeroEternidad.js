import React from 'react';
import {
  FaBookOpen,  FaQuoteLeft, FaMapMarkedAlt, FaUsers,
  FaHandshake, FaSyncAlt, FaSnowflake
} from 'react-icons/fa';

/* ─── Bloques ya armados según el orden pedido ─── */
const bloques = [
  /* 1ª FILA (izq-centro = 2 col   ·   der = 1 col) */
  {
    id: 'a',
    span: 2,               // ocupa 2 columnas
    icono: <FaBookOpen />,
    texto: [
      `Leí El Eternauta por primera vez a los 16 años, cuando estaba en la escuela secundaria, durante todo un fin de semana. Recuerdo con nitidez que me sentí consumida por el placer íntimo de la lectura silenciosa. Lo que no imaginé fue que ese mundo creado con improvisación, nieve y comunidad volvería a mí más de una década después.`,
      `En estos días, vivo el privilegio de mirar la historia con otros ojos. Ya no como estudiante, sino como docente de Letras y como parte de una empresa que trabaja todos los días con una idea que no se declama, se practica.`
    ].join('\n\n')
  },
  {
    id: 'b',
    span: 1,
    destacado: true,
    icono: <FaQuoteLeft />,
    texto: `Nadie se salva solo.`
  },

  /* 2ª FILA  (una sola tarjeta que cubre 3 col, texto en 2 columnas) */
  {
    id: 'c',
    span: 3,
    dobleCol: true,
    icono: <FaMapMarkedAlt />,
    texto: [
      `Lo que antes era consigna, hoy es urgencia. El Eternauta es, en muchos sentidos, un mapa emocional de lo que significa sobrevivir, e incluso vivir, con otros. Eso, inevitablemente, también nos habla del trabajo. Más allá de procesos, métricas o entregables, lo que sostiene a un equipo no siempre se ve y son la confianza, la escucha, la presencia.`,
      `En Fedes lo vivimos cada día. No hay estructura que funcione sin lo más elemental: cuidarnos, acompañarnos, complementarnos. Cada proyecto es una forma de resistencia frente a lo incierto. Lo resolvemos con lo que tenemos. A veces improvisando, como el Tano con una radio vieja, pero siempre en equipo.`,
      `No brindamos sólo servicios: construimos vínculos sostenibles. Elegimos la cooperación incluso cuando lo fácil sería competir.`
    ].join('\n\n')
  },

  /* 3ª FILA  (destacada · normal · destacada) */
  {
    id: 'd',
    span: 1,
    destacado: true,
    icono: <FaSyncAlt />,
    texto: `Nadie lidera todo el tiempo.\nNadie acompaña siempre.`
  },
  {
    id: 'e',
    span: 1,
    icono: <FaUsers />,
    texto: [
      `Nos vamos turnando. Como en la historia de Oesterheld, como en las relaciones humanas, como en la vida.`,
      `Y cuando las nevadas invisibles caen (el desgaste, el miedo, la incertidumbre), la única forma de resistir es abrigándonos entre todos.`
    ].join('\n\n')
  },
  {
    id: 'f',
    span: 1,
    destacado: true,
    icono: <FaSnowflake />,
    texto:`Con lo que tenemos.\nCon lo que somos.\nCon lo que elegimos ser.`
  }
];

const ViajeroEternidad = () => (
  <main className="blogArticleSection">
    <article className="articleCard">
      <header className="header">
        <h1>El viajero de la eternidad</h1>
        <h2 className="sub">
          y una certeza que vuelve cuando más la necesitamos
        </h2>
        <p className="author">
          Por Romina Albanesi, Responsable de Comunicación de Fedes Consultora
        </p>
      </header>

      <div className="gridNotas">
        {bloques.map(({ id, span, icono, texto, destacado, dobleCol }) => (
          <section
            key={id}
            className={`notaCard${destacado ? ' destacado' : ''}${
              dobleCol ? ' dobleCol' : ''
            }`}
            style={{ gridColumn: `span ${span}` }}
          >
            <div className="icono">{icono}</div>
            <p>
              {texto.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </section>
        ))}
      </div>
      <div className="articleImage">
        <img
          src="https://fedesagency.com/fedes-consultora/landing/imagen-nota-larga14.png"
          alt="Ilustración de la nota"
          loading="lazy"
        />
      </div>
    </article>
  </main>
);

export default ViajeroEternidad;
