// src/services/googleApi.js

// Usamos la variable de entorno
const API_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;
console.log("API_URL:", API_URL);
/**
 * Obtiene las publicaciones del blog desde la API de Google Apps Script.
 */
export const getBlogPosts = async () => {
    try {
      const response = await fetch(`${API_URL}?action=blog`, {
        mode: "cors",
      });
      const data = await response.json();
      // Mapeamos los datos de la hoja para que coincidan con el formato que usa el blog
      const mappedData = data.map((item) => ({
        id: item["ID"],
        date: item["Fecha de Publicación"],
        title: item["Título"],
        description: item["Descripción"],
        author: item["Autor"],
        image: item["Imagen URL"],
        authorImg: item["Author Image"] || "",
        link: item["Enlace Interno/Externo"],
      }));
      return mappedData;
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      return [];
    }
  };

export const getGaleriaFotos = async () => {
    try {
      const response = await fetch(`${API_URL}?action=galeria`, {
        mode: "cors",
      });
      const data = await response.json();
      // Mapear para obtener solo el ID y la URL de la imagen
      const mappedData = data.map((item) => ({
        id: item["ID"],
        link: item["Imagen URL"],
      }));
      return mappedData;
    } catch (error) {
      console.error("Error fetching galería fotos:", error);
      return [];
    }
  };


  /**
 * Envía datos del formulario de contacto a Google Sheets.
  */
  export const enviarConsultaContacto = async (formData) => {
    try {
      await fetch(`${API_URL}?action=contact`, {
        method: "POST",
        mode: "no-cors",  // mantené no-cors
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      // Asumí éxito siempre (no podés comprobarlo con no-cors)
      return { success: true };
    } catch (error) {
      console.error("Error enviando consulta:", error);
      return { success: false };
    }
  };

  /**
 * Envía los datos del STEP 0 del onboarding a Google Sheets.
 */
export const enviarOnboardingStep0 = async (formData) => {
  try {
    const payload = {
      ...formData,
      origen: "onboarding_step0_web",
    };

    await fetch(`${API_URL}?action=onboardingStep0`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return { success: true };
  } catch (error) {
    console.error("Error enviando Onboarding STEP 0:", error);
    return { success: false };
  }
};

/**
 * Envía los datos del STEP 1 del onboarding a Google Sheets.
 */
export const enviarOnboardingStep1 = async (formData) => {
  try {
    const payload = {
      ...formData,
      origen: "onboarding_step1_web",
    };

    await fetch(`${API_URL}?action=onboardingStep1`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return { success: true };
  } catch (error) {
    console.error("Error enviando Onboarding STEP 1:", error);
    return { success: false };
  }
};
