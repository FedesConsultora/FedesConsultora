import React from 'react';
import {
  FaRocket, FaUsersCog, FaBullseye,
  FaHandshake, FaHeart, FaCommentDots
} from 'react-icons/fa';

/* ─ Bloques en el orden EXACTO del texto ─ */
const bloques = [
  {
    id: 1,
    span: 3,          
    icono: <FaRocket />,
    texto: `En Fedes, cada comienzo de año es una invitación a volver a lo esencial.
    Por eso, el kick-off no es una reunión más: es un momento fundacional. Nos encontramos como equipo para lo que realmente importa. Para pensar juntos, para planificar, para decirnos esas cosas que a veces cuesta, pero que son las que mueven.`
  },
  {
    id: 2,
    span: 3,
    icono: <FaBullseye />,
    texto: `Planificamos campañas, sí. Proyectamos objetivos, también. Pero lo más importante es que alineamos propósitos. Porque no hacemos estrategias para cumplir con una hoja de ruta: las hacemos para que tengan sentido. Y eso sólo se logra si las personas que las construyen están en sintonía.`
  },
  { 
    id: 3,
    span: 1,
    destacado: true,
    icono: <FaHeart />,
    texto: `Es cultura.`
  },
  {
    id: 4,
    span: 2,
    icono: <FaUsersCog />,
    texto: `Nuestra forma de trabajar está atravesada por algo que nos define: el compromiso. Con los procesos, con los resultados, con los vínculos y, sobre todo, con el valor que le damos al trabajo en equipo.
    El kick-off fue eso: una pausa activa para repensar, reorganizar, para abrir el juego y escucharnos.`
  },
  {
    id: 5,
    span: 3,
    dobleCol: true,         
    icono: <FaCommentDots />,
    texto: `Hablamos de roles, de nuevas formas de colaborar, de cómo usar mejor la tecnología sin perder la humanidad y de cómo seguir construyendo un entorno donde todos —clientes y equipo— sientan que están donde quieren estar.`
  },
  { 
    id: 6,
    span: 3,
    destacado: true,
    icono: <FaHandshake />,
    texto: `Cuando hay una cultura clara, los objetivos no sólo se alcanzan: se disfrutan en el camino.`
  },
  {
    id: 7,
    span: 3,
    icono: <FaBullseye />,
    texto: `¿Querés este nivel de compromiso y estrategia en tu marca?
    Conversemos. En Fedes, las ideas no quedan en la mesa: se ejecutan, se miden y se transforman en resultados.

    Escribinos y pensemos juntos la estrategia que tu marca necesita para crecer con propósito.`
  }
];

const Kickoff2025 = () => (
  <main className="blogArticleSection">
    <article className="articleCard">
      <header className="header">
        <h1>Kick-off 2025</h1>
        <h2 className="sub">Cuando la estrategia se piensa y también se siente</h2>
      </header>

      <div className="gridNotas">
        {bloques.map(({ id, span, icono, texto, destacado, dobleCol }) => (
          <section
            key={id}
            className={`notaCard${destacado ? ' destacado' : ''}${dobleCol ? ' dobleCol' : ''}`}
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
          src="https://fedesagency.com/fedes-consultora/landing/imagen-nota-larga15.jpg"
          alt="Kick-off 2025"
          loading="lazy"
        />
      </div>
    </article>
  </main>
);

export default Kickoff2025;
