import React from "react";
import NotasList from "../components/Blog/NotasList";

const Blog = () => {
  return (
    <main className="blog-container">
      <section className="contenedor-prensa">
        <h3 className="titulo-principal">BLOG</h3>
        <h2 className="titulo-secundario">
          Nuestra <span>huella</span>, en la voz de <span>los medios</span>
        </h2>
        <p className="descripcion">
          Te invitamos a explorar nuestros artículos, donde compartimos recursos valiosos, consejos prácticos y experiencias en nuestro camino hacia la transformación digital.
        </p>
      </section>
      <NotasList />
    </main>
  );
};

export default Blog;
