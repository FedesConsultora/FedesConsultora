// src/pages/TarjetasDigitales/TarjetaMartin.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaPhone, FaEnvelope, FaLinkedin, FaDownload, FaGoogle, FaApple, FaUserPlus } from 'react-icons/fa';
import { generateVCard, downloadVCard } from '../../utils/vCardGenerator';

const contactData = {
    firstName: 'Martin',
    lastName: 'Spinelli',
    cargo: 'COO',
    phone: '+54 9 2213 03-3285',
    phoneClean: '+5492213033285',
    email: 'martin@fedesconsultora.com',
    company: 'Fedes Consultora',
    website: 'https://fedesconsultora.com',
    address: 'La Plata, Buenos Aires, Argentina',
    linkedin: '', // Completar después
    // Foto: colocar en public/assets/team/ o similar
    photo: '/assets/team/martin-spinelli.jpg',
};

const TarjetaMartin = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleDownloadVCard = () => {
        const vCardContent = generateVCard(contactData);
        downloadVCard(vCardContent, `${contactData.firstName}_${contactData.lastName}.vcf`);
        setShowOptions(false);
    };

    const handleGoogleContacts = () => {
        handleDownloadVCard();
        window.open('https://contacts.google.com/', '_blank');
    };

    const handleAppleContacts = () => {
        handleDownloadVCard();
    };

    return (
        <>
            <Helmet>
                <title>{contactData.firstName} {contactData.lastName} - {contactData.cargo} | Fedes Consultora</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="description" content={`Contacto de ${contactData.firstName} ${contactData.lastName}, ${contactData.cargo} en Fedes Consultora`} />
            </Helmet>

            <main className="tarjetaDigitalContainer">
                <section className="tarjetaCard">
                    {/* Header con foto de perfil */}
                    <div className="tarjetaHeader">
                        <div className="avatarContainer">
                            {!imageError ? (
                                <img
                                    src={contactData.photo}
                                    alt={`${contactData.firstName} ${contactData.lastName}`}
                                    className="avatarImage"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <div className="avatarPlaceholder">
                                    <span>{contactData.firstName[0]}{contactData.lastName[0]}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Info personal */}
                    <div className="tarjetaBody">
                        <h1 className="nombreCompleto">{contactData.firstName} {contactData.lastName}</h1>
                        <p className="cargo">{contactData.cargo}</p>

                        <div className="empresaInfo">
                            <span className="empresa">{contactData.company}</span>
                        </div>

                        {/* Separador elegante */}
                        <div className="separadorElegante"></div>

                        {/* Datos de contacto */}
                        <div className="contactoInfo">
                            <a href={`tel:${contactData.phoneClean}`} className="contactoItem">
                                <div className="contactoIconWrapper">
                                    <FaPhone className="contactoIcon" />
                                </div>
                                <div className="contactoTexto">
                                    <span className="contactoLabel">Teléfono</span>
                                    <span className="contactoValor">{contactData.phone}</span>
                                </div>
                            </a>
                            <a href={`mailto:${contactData.email}`} className="contactoItem">
                                <div className="contactoIconWrapper">
                                    <FaEnvelope className="contactoIcon" />
                                </div>
                                <div className="contactoTexto">
                                    <span className="contactoLabel">Email</span>
                                    <span className="contactoValor">{contactData.email}</span>
                                </div>
                            </a>

                        </div>

                        {/* LinkedIn */}
                        <div className="redesSocialesTarjeta">
                            <a href={contactData.linkedin || 'https://www.linkedin.com/company/fedesagency/'} target="_blank" rel="noopener noreferrer" className="redSocialBtn">
                                <FaLinkedin className="redSocialIcon" />
                                <span>Conectar en LinkedIn</span>
                            </a>
                        </div>

                        {/* Botón Agendame */}
                        <div className="agendameContainer">
                            <button
                                className="botonAgendame"
                                onClick={() => setShowOptions(!showOptions)}
                            >
                                <FaUserPlus className="btnIcon" /> Agendame
                            </button>

                            {/* Opciones de guardado */}
                            {showOptions && (
                                <div className="opcionesGuardado">
                                    <button onClick={handleDownloadVCard} className="opcionBtn">
                                        <FaDownload className="opcionIcon" />
                                        <span>Descargar vCard</span>
                                    </button>
                                    <button onClick={handleGoogleContacts} className="opcionBtn google">
                                        <FaGoogle className="opcionIcon" />
                                        <span>Google Contacts</span>
                                    </button>
                                    <button onClick={handleAppleContacts} className="opcionBtn apple">
                                        <FaApple className="opcionIcon" />
                                        <span>Apple Contacts</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default TarjetaMartin;
