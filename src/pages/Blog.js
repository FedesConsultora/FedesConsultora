// src/pages/Blog.js
import React from "react";
import { useTranslation, Trans } from "react-i18next";
import NotasList from "../components/Blog/NotasList";

const Blog = () => {
  const { t } = useTranslation();
  return (
    <main className="blog-container">
      <section className="contenedor-prensa">
        <h3 className="titulo-principal">{t('blog_page.title')}</h3>
        <h2 className="titulo-secundario">
          <Trans i18nKey="blog_page.subtitle">
            Nuestra <span>huella</span>, en la voz de <span>los medios</span>
          </Trans>
        </h2>
        <p className="descripcion">
          <Trans i18nKey="blog_page.description">
            Te invitamos a explorar nuestros artículos, donde compartimos recursos valiosos, consejos prácticos y experiencias en nuestro camino hacia la transformación digital.
          </Trans>
        </p>
      </section>
      <NotasList />
    </main>
  );
};

export default Blog;
