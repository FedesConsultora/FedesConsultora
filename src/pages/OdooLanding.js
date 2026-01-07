import React, { useState } from "react";
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaWhatsapp,
    FaInstagram,
    FaLinkedin,
    FaYoutube
} from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import { enviarConsultaContacto } from "../services/googleApi";

const OdooLanding = () => {

    /* ---------- state ---------- */
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        email: "",
        empresa: "",
        servicio: "Agromarketing (Consultoría)",
        mensaje: ""
    });
    const [sendingTarget, setSendingTarget] = useState(null); // null | 'email' | 'whatsapp'
    const [formError, setFormError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    /* ---------- handlers ---------- */
    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const checkRequired = () => {
        if (!formData.nombre || !formData.email || !formData.mensaje) {
            setFormError("Por favor completá nombre, email y tu mensaje antes de enviar.");
            return false;
        }
        setFormError("");
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (sendingTarget) return;
        if (!checkRequired()) return;

        setSendingTarget("email");
        const ok = await enviarConsultaContacto({ ...formData, origen: "odoo_qr" });

        setSendingTarget(null);
        if (ok.success) {
            setSubmitted(true);
        } else {
            alert("Hubo un error enviando la consulta. Intenta nuevamente.");
        }
    };

    const handleWhatsApp = () => {
        const texto = encodeURIComponent(
            `👋 ¡Hola! Vengo desde el QR de Agromarketing y me gustaría recibir más información.` +
            (formData.nombre ? `\n\n👤 Mi nombre es: ${formData.nombre}` : "") +
            (formData.empresa ? `\n🏢 Empresa: ${formData.empresa}` : "") +
            (formData.mensaje ? `\n\n💬 Mensaje: ${formData.mensaje}` : "")
        );

        const wpNum = "5492213092529";
        window.open(`https://wa.me/${wpNum}?text=${texto}`, "_blank");
    };

    return (
        <div className="odooLanding">
            {/* SUCCESS OVERLAY */}
            {submitted && (
                <div className="success-overlay">
                    <div className="success-content">
                        <Player
                            autoplay
                            loop={false}
                            keepLastFrame
                            src="/assets/videos/coheteThankYou.json"
                            style={{ height: "300px", width: "300px" }}
                        />
                        <h2>¡MENSAJE ENVIADO!</h2>
                        <p>Gracias por contactarte. Nuestro equipo técnico se comunicará con vos a la brevedad.</p>
                        <button onClick={() => setSubmitted(false)} className="close-success">CONTINUAR</button>
                    </div>
                </div>
            )}

            {/* HERO SECTION WITH FORM */}
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-text">
                        <span className="badge-agro">BIENVENIDO AL ECOSISTEMA DEL AGROMARKETING</span>
                        <h1>¿CUÁNTO TE CUESTA EL <strong>SILENCIO</strong> DE TU MARCA?</h1>
                        <p>No sólo produzcas excelencia, asegurate de que el mercado lo sepa.</p>

                        <div className="hero-footer-info">
                            <img src="https://fedesconsultora.com/fedes-consultora/landing/lineaBlancaHorizontal.svg" alt="fedes" className="mini-logo" />
                            <div className="social-icons-hero">
                                <a href="https://www.instagram.com/fedesconsultora/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                                <a href="https://www.linkedin.com/company/fedesagency/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                                <a href="https://www.youtube.com/@fedesconsultora" target="_blank" rel="noreferrer"><FaYoutube /></a>
                            </div>
                        </div>
                    </div>

                    <div className="hero-form">
                        <div className="form-card">
                            <h3>Accedé a una consultoría sin costo</h3>
                            <form className="google-form-odoo" onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required placeholder="Nombre completo" />
                                </div>

                                <div className="input-group">
                                    <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Tu Empresa / Establecimiento" />
                                </div>

                                <div className="input-group">
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Correo electrónico" />
                                </div>

                                <div className="input-group">
                                    <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="WhatsApp / Teléfono" />
                                </div>

                                <div className="input-group">
                                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required placeholder="¿Cómo podemos ayudarte?" />
                                </div>

                                {formError && <p className="error-msg">{formError}</p>}

                                <button type="submit" className="submit-btn" disabled={!!sendingTarget}>
                                    {sendingTarget === 'email' ? 'Enviando...' : 'ENVIAR CONSULTA'}
                                </button>

                                <button type="button" className="whatsapp-btn" onClick={handleWhatsApp} disabled={!!sendingTarget}>
                                    <FaWhatsapp /> {sendingTarget === 'whatsapp' ? 'Abriendo...' : 'WHATSAPP'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* SIMPLIFIED FOOTER INFO */}
            <section className="odoo-footer-contact">
                <div className="contact-grid">
                    <p><FaMapMarkerAlt /> Plaza Paso 159, La Plata</p>
                    <p><FaPhone /> +54 9 221 309-2529</p>
                    <p><FaEnvelope /> info@fedesconsultora.com</p>
                </div>
            </section>

            <div className="cta-bar">
                ACCEDÉ A UNA CONSULTORÍA ESTRATÉGICA INICIAL, SIN COSTO.
                <br />
                <strong>Potenciamos tu presencia en el sector agropecuario.</strong>
            </div>
        </div>
    );
};

export default OdooLanding;
