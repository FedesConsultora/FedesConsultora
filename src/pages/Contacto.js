import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";
import { enviarConsultaContacto } from "../services/googleApi";
import { useNavigate } from "react-router-dom";

const Contacto = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    empresa: "",
    servicio: "Consultoría Empresarial",
    mensaje: ""
  });

  const [enviando, setEnviando] = useState(false);

  /* ---------- handlers ---------- */
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  /* Envío “clásico” */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (enviando) return;
    setEnviando(true);

    const ok = await enviarConsultaContacto({ ...formData, origen: "web" });

    if (ok.success) {
      resetForm();
      navigate("/thank-you");
    } else {
      alert("Hubo un error enviando la consulta. Intenta nuevamente.");
    }
    setEnviando(false);
  };

  /* Envío vía WhatsApp */
  const handleWhatsApp = async () => {
    if (enviando) return;
    setEnviando(true);

    /* 1) guardamos indicando “whatsapp” */
    await enviarConsultaContacto({ ...formData, origen: "whatsapp" });

    /* 2) armamos mensaje y abrimos chat */
    const texto = encodeURIComponent(
      `Hola! Soy ${formData.nombre}\n` +
        `Teléfono: ${formData.telefono}\n` +
        `Email: ${formData.email}\n` +
        `Empresa: ${formData.empresa}\n` +
        `Servicio de interés: ${formData.servicio}\n` +
        `Mensaje: ${formData.mensaje}`
    );
    const wpNum =
      process.env.REACT_APP_WHATSAPP_NUMBER || "5492213092529"; // ← tu número
    window.open(`https://wa.me/${wpNum}?text=${texto}`, "_blank");

    /* 3) limpiamos form y vamos al thank-you */
    resetForm();
    setEnviando(false);
    navigate("/thank-you");
  };

  const resetForm = () =>
    setFormData({
      nombre: "",
      telefono: "",
      email: "",
      empresa: "",
      servicio: "Consultoría Empresarial",
      mensaje: ""
    });

  /* ---------- render ---------- */
  return (
    <main className="contactoContainer">
      <section className="main">
        {/* títulos */}
        <article className="contenedorTitulos">
          <img
            className="linea"
            src="https://www.fedesagency.com/fedes-consultora/landing/lineaChicaNegra.svg"
            alt="línea divisoria"
            loading="lazy"
          />
          <p className="tituloSoluciones">{t("contact_page.title")}</p>
        </article>

        <h2 className="contactoTitulo">
          <Trans i18nKey="contact_page.subtitle">
            Trabajemos juntos para impulsar <strong>tu negocio</strong>
          </Trans>
        </h2>

        <p className="textoContacto">
          <Trans i18nKey="contact_page.description">
            Contáctanos sobre cualquier consulta relacionada con nuestros{" "}
            <strong>servicios de consultoría y marketing digital.</strong> Te
            responderemos <strong>lo antes posible.</strong>
          </Trans>
        </p>

        <div className="contactoContenido">
          {/* ----------------- FORM ----------------- */}
          <form className="contactoForm" onSubmit={handleSubmit}>
            {/* nombre */}
            <div className="grupoFormulario">
              <label>{t("contact_page.form.label_fullname")}</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </div>
            {/* teléfono */}
            <div className="grupoFormulario">
              <label>{t("contact_page.form.label_phone")}</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>
            {/* email */}
            <div className="grupoFormulario">
              <label>{t("contact_page.form.label_email")}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* empresa */}
            <div className="grupoFormulario">
              <label>{t("contact_page.form.label_company")}</label>
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
              />
            </div>
            {/* servicio */}
            <div className="grupoFormulario">
              <label>{t("contact_page.form.label_interest")}</label>
              <select
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
              >
                <option value="Consultoría Empresarial">
                  {t("contact_page.form.interest_options.consultoria")}
                </option>
                <option value="Gestión de Redes Sociales">
                  {t("contact_page.form.interest_options.redes")}
                </option>
                <option value="Publicidad y Performance">
                  {t("contact_page.form.interest_options.performance")}
                </option>
              </select>
            </div>
            {/* mensaje */}
            <div className="grupoFormulario">
              <label>{t("contact_page.form.label_message")}</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
              />
            </div>

            {/* botones */}
            <button type="submit" className="botonEnviar" disabled={enviando}>
              {enviando
                ? t("contact_page.form.sending")
                : t("contact_page.form.button_send")}
            </button>

            <button
              type="button"
              className="botonWhatsapp"
              onClick={handleWhatsApp}
              disabled={enviando}
            >
              <FaWhatsapp className="iconoWp" />
              {t("contact_page.form.button_send_whatsapp")}
            </button>
          </form>

          {/* --------- datos de contacto --------- */}
          <aside className="infoContacto">
            <p className="tituloInfo">{t("contact_page.info.title")}</p>
            <ul>
              <li>
                <FaMapMarkerAlt className="contacto-icon" />{" "}
                {t("contact_page.info.address")}
              </li>
              <li>
                <FaPhone className="contacto-icon" />{" "}
                {t("contact_page.info.phone")}
              </li>
              <li>
                <FaEnvelope className="contacto-icon" />{" "}
                {t("contact_page.info.email")}
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
