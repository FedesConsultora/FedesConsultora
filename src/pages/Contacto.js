// src/pages/Contacto.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"; // Importamos iconos

const Contacto = () => {
  const { t } = useTranslation();

  // Estado para el formulario
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    empresa: "",
    servicio: "Consultoría Empresarial",
    mensaje: "",
  });

  // Estado para confirmar envío
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  // Manejo de inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);

    // Simulación de éxito
    setMensajeEnviado(true);

    // Limpiar el formulario
    setTimeout(() => {
      setMensajeEnviado(false);
      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        empresa: "",
        servicio: "Marketing Digital",
        mensaje: "",
      });
    }, 3000);
  };

  return (
    <main className="contactoContainer">
      <section className="main">
        {/* Título */}
        <article className="contenedorTitulos">
          <img
            className="linea"
            src="https://www.fedesagency.com/fedes-consultora/landing/lineaChicaNegra.svg"
            alt="linea divisoria"
            loading="lazy"
          />
          <p className="tituloSoluciones">CONTACTO</p>
        </article>

        <h2 className="contactoTitulo">
          Trabajemos juntos para impulsar <strong>tu negocio</strong>
        </h2>

        <p className="textoContacto">
          Contáctanos sobre cualquier consulta relacionada con nuestros{" "}
          <strong>servicios de consultoría y marketing digital.</strong> Te
          responderemos <strong>lo antes posible.</strong>
        </p>

        <div className="contactoContenido">
          {/* Formulario */}
          <form className="contactoForm" onSubmit={handleSubmit}>
            {/* Datos personales */}
            <div className="grupoFormulario">
              <label>Nombre completo *</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grupoFormulario">
              <label>Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>

            <div className="grupoFormulario">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Información adicional */}
            <div className="grupoFormulario">
              <label>Empresa</label>
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
              />
            </div>

            <div className="grupoFormulario">
              <label>Servicio de interés *</label>
              <select name="servicio" value={formData.servicio} onChange={handleChange}>
                <option value="Consultoría Empresarial">Consultoría Empresarial</option>
                <option value="Gestión de Redes Sociales">Posicionamiento</option>
                <option value="Publicidad y Performance">Performance</option>
              </select>
            </div>

            {/* Mensaje */}
            <div className="grupoFormulario">
              <label>Mensaje *</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </div>

            {/* Botón de envío */}
            <button type="submit" className="botonEnviar">
              Enviar mensaje
            </button>

            {/* Confirmación */}
            {mensajeEnviado && <p className="mensajeExito">Mensaje enviado con éxito 🎉</p>}
          </form>

          {/* Información de contacto */}
          <aside className="infoContacto">
            <p className="tituloInfo">Fedes Consultora</p>
            <ul>
              <li>
                <FaMapMarkerAlt className="contacto-icon" /> Plaza Paso 159, Buenos Aires
              </li>
              <li>
                <FaPhone className="contacto-icon" /> +54 9 221 303-2529
              </li>
              <li>
                <FaEnvelope className="contacto-icon" /> info@fedesconsultora.com
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
