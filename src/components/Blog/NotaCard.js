// src/components/Blog/NotaCard.js
import React from "react";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotaCard = ({ nota }) => {
  const { t } = useTranslation();
  return (
    <article className="nota-card">
      <div className="nota-header">
        <p className="fecha">{new Date(nota.date).toLocaleDateString("es-ES")}</p>
        {nota.author && (
          <div className="autor">
            {nota.authorImg && <img src={nota.authorImg} alt={nota.author} />}
            <p>{nota.author}</p>
          </div>
        )}
      </div>
      <div className="nota-contenido">
        <h2 className="titulo">{nota.title}</h2>
        <p className="descripcion">{nota.description}</p>
        <Link to={nota.link} className="leer-mas" target="_blank" rel="noopener noreferrer">
          {t('blog_page.read_more')} <FaArrowRight className="flecha" />
        </Link>
      </div>
      <img className="nota-imagen" src={nota.image} alt={nota.title} />
    </article>
  );
};

export default NotaCard;
