// src/utils/vCardGenerator.js

/**
 * Genera el contenido de un archivo vCard (.vcf)
 * @param {Object} contact - Datos del contacto
 * @returns {string} - Contenido del vCard en formato string
 */
export const generateVCard = (contact) => {
    const {
        firstName,
        lastName,
        cargo,
        phone,
        phoneClean,
        email,
        company,
        website,
        address,
        linkedin,
        instagram,
        youtube,
    } = contact;

    // Formato vCard 3.0
    const vCard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `N:${lastName};${firstName};;;`,
        `FN:${firstName} ${lastName}`,
        `ORG:${company}`,
        `TITLE:${cargo}`,
        `TEL;TYPE=CELL:${phoneClean || phone}`,
        `EMAIL;TYPE=INTERNET:${email}`,
        website ? `URL:${website}` : '',
        address ? `ADR;TYPE=WORK:;;${address};;;;` : '',
        linkedin ? `X-SOCIALPROFILE;TYPE=linkedin:${linkedin}` : '',
        instagram ? `X-SOCIALPROFILE;TYPE=instagram:${instagram}` : '',
        youtube ? `X-SOCIALPROFILE;TYPE=youtube:${youtube}` : '',
        `NOTE:Contacto de ${company} - ${cargo}`,
        `REV:${new Date().toISOString()}`,
        'END:VCARD',
    ]
        .filter(Boolean)
        .join('\r\n');

    return vCard;
};

/**
 * Descarga un archivo vCard
 * @param {string} vCardContent - Contenido del vCard
 * @param {string} fileName - Nombre del archivo (ej: "Martin_Spinelli.vcf")
 */
export const downloadVCard = (vCardContent, fileName) => {
    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();

    // Cleanup
    setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    }, 100);
};

/**
 * Genera URL para agregar contacto a Google Contacts
 * Nota: Google no tiene un deeplink directo, pero abre contacts
 * @param {Object} contact - Datos del contacto
 * @returns {string} URL de Google Contacts
 */
export const getGoogleContactsUrl = (contact) => {
    // Google Contacts no tiene un API de deeplink directo para agregar contactos
    // La mejor opción es descargar el vCard y el usuario lo importa
    return 'https://contacts.google.com/';
};

/**
 * Genera URL para Apple Contacts
 * En dispositivos Apple, el vCard se abre automáticamente en Contactos
 */
export const openAppleContacts = (vCardContent, fileName) => {
    // En iOS/macOS, descargar el vCard automáticamente abre la app Contactos
    downloadVCard(vCardContent, fileName);
};
