// src/pages/TarjetasDigitales/TarjetaFedericoJuan.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaPhone, FaEnvelope, FaLinkedin, FaUserPlus } from 'react-icons/fa';
import { generateVCard, downloadVCard } from '../../utils/vCardGenerator';

const contactData = {
    firstName: 'Federico',
    lastName: 'Juan',
    cargo: 'CGO',
    phone: '+54 9 2213 51-0143',
    phoneClean: '+5492213510143',
    email: 'fedejuan@fedesconsultora.com',
    company: 'Fedes Consultora',
    website: 'https://fedesconsultora.com',
    address: 'La Plata, Buenos Aires, Argentina',
    linkedin: 'https://www.linkedin.com/in/fede-juan/',
    // Foto: colocar en public/assets/team/ o similar
    photo: '/assets/team/federico-juan.jpg',
};

const TarjetaFedericoJuan = () => {
    const [imageError, setImageError] = useState(false);

    const handleDownloadVCard = () => {
        const vCardContent = generateVCard(contactData);
        downloadVCard(vCardContent, `${contactData.firstName}_${contactData.lastName}.vcf`);
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
                            <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="redSocialBtn">
                                <FaLinkedin className="redSocialIcon" />
                                <span>Conectar en LinkedIn</span>
                            </a>
                        </div>

                        {/* Botón Agendame */}
                        <div className="agendameContainer">
                            <button
                                className="botonAgendame"
                                onClick={handleDownloadVCard}
                            >
                                <FaUserPlus className="btnIcon" /> Agendame
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default TarjetaFedericoJuan;
