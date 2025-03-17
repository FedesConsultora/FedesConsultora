import React, { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { enviarConsultaContacto } from "../services/googleApi";

const Contacto = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    empresa: "",
    servicio: "Consultoría Empresarial",
    mensaje: ""
  });

  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (enviando) return;

    setEnviando(true);

    const result = await enviarConsultaContacto(formData);

    if (result.success) {
      setMensajeEnviado(true);
      setTimeout(() => {
        setMensajeEnviado(false);
        setFormData({
          nombre: "",
          telefono: "",
          email: "",
          empresa: "",
          servicio: "Consultoría Empresarial",
          mensaje: ""
        });
      }, 3000);
    } else {
      alert("Hubo un error enviando la consulta. Intenta nuevamente.");
    }

    setEnviando(false);
  };

  return (
    <main className="contactoContainer">
      <section className="main">
        <article className="contenedorTitulos">
          <img
            className="linea"
            src="https://www.fedesagency.com/fedes-consultora/landing/lineaChicaNegra.svg"
            alt="línea divisoria"
            loading="lazy"
          />
          <p className="tituloSoluciones">{t('contact_page.title')}</p>
        </article>

        <h2 className="contactoTitulo">
          <Trans i18nKey="contact_page.subtitle">
            Trabajemos juntos para impulsar <strong>tu negocio</strong>
          </Trans>
        </h2>

        <p className="textoContacto">
          <Trans i18nKey="contact_page.description">
            Contáctanos sobre cualquier consulta relacionada con nuestros <strong>servicios de consultoría y marketing digital.</strong> Te responderemos <strong>lo antes posible.</strong>
          </Trans>
        </p>

        <div className="contactoContenido">
          <form className="contactoForm" onSubmit={handleSubmit}>
            <div className="grupoFormulario">
              <label>{t('contact_page.form.label_fullname')}</label>
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </div>

            <div className="grupoFormulario">
              <label>{t('contact_page.form.label_phone')}</label>
              <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} />
            </div>

            <div className="grupoFormulario">
              <label>{t('contact_page.form.label_email')}</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="grupoFormulario">
              <label>{t('contact_page.form.label_company')}</label>
              <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} />
            </div>

            <div className="grupoFormulario">
              <label>{t('contact_page.form.label_interest')}</label>
              <select name="servicio" value={formData.servicio} onChange={handleChange}>
                <option value="Consultoría Empresarial">{t('contact_page.form.interest_options.consultoria')}</option>
                <option value="Gestión de Redes Sociales">{t('contact_page.form.interest_options.redes')}</option>
                <option value="Publicidad y Performance">{t('contact_page.form.interest_options.performance')}</option>
              </select>
            </div>

            <div className="grupoFormulario">
              <label>{t('contact_page.form.label_message')}</label>
              <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required />
            </div>

            <button type="submit" className="botonEnviar" disabled={enviando}>
              {enviando ? t('contact_page.form.sending') : t('contact_page.form.button_send')}
            </button>

            {mensajeEnviado && <p className="mensajeExito">{t('contact_page.form.success')}</p>}
          </form>

          <aside className="infoContacto">
            <p className="tituloInfo">{t('contact_page.info.title')}</p>
            <ul>
              <li><FaMapMarkerAlt className="contacto-icon" /> {t('contact_page.info.address')}</li>
              <li><FaPhone className="contacto-icon" /> {t('contact_page.info.phone')}</li>
              <li><FaEnvelope className="contacto-icon" /> {t('contact_page.info.email')}</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
