window.onload = function() {
    // Duración de la barra de carga en milisegundos
    const redirectDelay = 3000; // 2 segundos


    // Capturar los parámetros UTM y la URL de redirección
    const urlParams = new URLSearchParams(window.location.search);
    const utm_source = urlParams.get('utm_source') || 'N/A';
    const utm_medium = urlParams.get('utm_medium') || 'N/A';
    const utm_campaign = urlParams.get('utm_campaign') || 'N/A';
    const utm_content = urlParams.get('utm_content') || 'N/A';
    const utm_term = urlParams.get('utm_term') || 'N/A';
    const redirect_to = urlParams.get('redirect_to') || 'N/A';
    
    // Verificar si existe el parámetro redirect_to
    if (!redirect_to) {
        // Si no hay redirect_to, cerrar la pestaña
        window.close();
        return; // Detener la ejecución del script
    }

    // Iniciar la animación de la barra de carga
    const loadingBar = document.querySelector('.loading-bar');
    loadingBar.style.transition = `width ${redirectDelay}ms linear`;
    loadingBar.style.width = '100%';

    // URL del Web App de Google Apps Script
    const sheetUrl = 'https://script.google.com/macros/s/AKfycbxTv-LCDl08v_XGDG7HJy3ItJZnBcPJ7NQOTbtOGP4_CXnKo6DrIjIa9qq2_v4XZx6U/exec';
    
    fetch(sheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {  
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            utm_source: utm_source,
            utm_medium: utm_medium,
            utm_campaign: utm_campaign,
            utm_content: utm_content,
            utm_term: utm_term
        })
    })
    .catch((error) => {
        console.error('Error:', error);
    })
    .finally(() => {
        // Redirigir al destino final después de 2 segundos
        setTimeout(() => {
            if (redirect_to !== 'N/A') {
                window.location.href = redirect_to;
            } else {
                window.close();
            }
        }, redirectDelay);
    });
};
