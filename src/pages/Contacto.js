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

  /* ---------- state ---------- */
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    empresa: "",
    servicio: "Consultoría Empresarial",
    mensaje: ""
  });
  const [sendingTarget, setSendingTarget] = useState(null); // null | 'email' | 'whatsapp'
  const [formError, setFormError] = useState("");

  /* ---------- handlers ---------- */
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const resetForm = () =>
    setFormData({
      nombre: "",
      telefono: "",
      email: "",
      empresa: "",
      servicio: "Consultoría Empresarial",
      mensaje: ""
    });

  /* Validación simple común a ambos envíos */
  const checkRequired = () => {
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setFormError("Por favor completá nombre, email y tu mensaje antes de enviar.");
      return false;
    }
    setFormError("");
    return true;
  };

  /* ---------- envío por email (web) ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sendingTarget) return;
    if (!checkRequired()) return;

    setSendingTarget("email");
    const ok = await enviarConsultaContacto({ ...formData, origen: "web" });

    setSendingTarget(null);
    if (ok.success) {
      resetForm();
      navigate("/thank-you");
    } else {
      alert("Hubo un error enviando la consulta. Intenta nuevamente.");
    }
  };

  /* ---------- envío por WhatsApp ---------- */
  const handleWhatsApp = async () => {
    if (sendingTarget) return;
    if (!checkRequired()) return;

    setSendingTarget("whatsapp");
    await enviarConsultaContacto({ ...formData, origen: "whatsapp" });

    /* Mensaje con emojis y saltos de línea */
    const texto = encodeURIComponent(
      `👋 ¡Hola! Soy ${formData.nombre}\n` +
        (formData.empresa ? `🏢 Empresa: ${formData.empresa}\n` : "") +
        `📞 Tel: ${formData.telefono || "–"}\n` +
        `✉️ Email: ${formData.email}\n\n` +
        `🛰️ Interés: ${formData.servicio}\n\n` +
        `💬 Mensaje:\n${formData.mensaje}`
    );

    const wpNum = process.env.REACT_APP_WHATSAPP_NUMBER || "5492213092529";
    window.open(`https://wa.me/${wpNum}?text=${texto}`, "_blank");

    setSendingTarget(null);
    resetForm();
    navigate("/thank-you");
  };

  /* ---------- render ---------- */
  return (
    <main className="contactoContainer">
      <section className="main">
        {/* Títulos */}
        <article className="contenedorTitulos">
          <img
            className="linea"
            src="https://www.fedesconsultora.com/fedes-consultora/landing/lineaChicaNegra.svg"
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
          {/* ---------- FORM ---------- */}
          <form className="contactoForm" onSubmit={handleSubmit}>
            {/* campos */}
            {[
              {
                label: t("contact_page.form.label_fullname"),
                name: "nombre",
                type: "text",
                required: true
              },
              {
                label: t("contact_page.form.label_phone"),
                name: "telefono",
                type: "tel"
              },
              {
                label: t("contact_page.form.label_email"),
                name: "email",
                type: "email",
                required: true
              },
              {
                label: t("contact_page.form.label_company"),
                name: "empresa",
                type: "text"
              }
            ].map((f) => (
              <div className="grupoFormulario" key={f.name}>
                <label>{f.label}</label>
                <input
                  type={f.type}
                  name={f.name}
                  value={formData[f.name]}
                  onChange={handleChange}
                  required={f.required}
                />
              </div>
            ))}

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

            {/* feedback de error */}
            {formError && <p className="formError">{formError}</p>}

            {/* botones */}
            <button
              type="submit"
              className="botonEnviar"
              disabled={!!sendingTarget}
            >
              {sendingTarget === "email"
                ? t("contact_page.form.sending")
                : t("contact_page.form.button_send")}
            </button>

            <button
              type="button"
              className="botonWhatsapp"
              onClick={handleWhatsApp}
              disabled={!!sendingTarget}
            >
              <FaWhatsapp className="iconoWp" />
              {sendingTarget === "whatsapp"
                ? t("contact_page.form.sending")
                : t("contact_page.form.button_send_whatsapp")}
            </button>
          </form>

          {/* -------- info lateral -------- */}
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