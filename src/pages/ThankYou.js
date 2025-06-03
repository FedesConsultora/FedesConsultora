// src/pages/ThankYou.js
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const ThankYou = () => (
  <main className="contactoContainer thankyou-page">
    
    <section className="main">
      <article className="contenedorTitulos">
        <img
          className="linea"
          src="https://www.fedesagency.com/fedes-consultora/landing/lineaChicaNegra.svg"
          alt="línea divisoria"
          loading="lazy"
        />
        <p className="tituloSoluciones">¡Gracias!</p>
      </article>

      <h3 className="contactoTitulo">
        Tu mensaje despegó <strong>correctamente</strong>
      </h3>

      {/* Animación Lottie */}
      <Player
        autoplay
        loop
        keepLastFrame
        src="/assets/videos/coheteThankYou.json"
        style={{ height: "280px", width: "280px", margin: "0 auto" }}
        className="thankyou-animation"
      />

      {/* CTA */}
      <Link to="/" className="botonVolverInicio">
        Volver al inicio
      </Link>
    </section>
  </main>
);

export default ThankYou;
