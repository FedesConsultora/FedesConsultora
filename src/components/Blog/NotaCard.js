import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Ícono de flecha
import { Link } from "react-router-dom";

const NotaCard = ({ nota }) => {
  return (
    <article className="nota-card">
      {/* Cabecera con fecha y autor */}
      <div className="nota-header">
        <p className="fecha">{new Date(nota.date).toLocaleDateString("es-ES")}</p>
        {nota.author && (
          <div className="autor">
            {nota.authorImg && <img src={nota.authorImg} alt={nota.author} />}
            <p>{nota.author}</p>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="nota-contenido">
        <h2 className="titulo">{nota.title}</h2>
        <p className="descripcion">{nota.description}</p>
        <Link to={nota.link} className="leer-mas" target="_blank" rel="noopener noreferrer">
          Leer más <FaArrowRight className="flecha" />
        </Link>
      </div>

      {/* Imagen */}
      <img className="nota-imagen" src={nota.image} alt={nota.title} />
    </article>
  );
};

export default NotaCard;
