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
