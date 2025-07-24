# 🦷 FedesPage – Página institucional de Fedes Consultora

FedesPage es una **landing institucional desarrollada en React**, pensada para mostrar información actualizada en tiempo real a partir de datos almacenados en **Google Sheets**. Es liviana, moderna y responsive, ideal para destacar servicios, testimonios, proyectos y contenido dinámico con gran facilidad.

---

## 🚀 Tecnologías principales

- ⚛️ [React](https://reactjs.org/) – Librería base para el desarrollo del frontend
- 🎨 [SASS](https://sass-lang.com/) – Para el estilado modular y escalable
- 📚 [React Router DOM](https://reactrouter.com/) – Manejo de rutas SPA
- 🌍 [react-i18next](https://react.i18next.com/) – Internacionalización multilenguaje
- 🎥 [Lottie](https://lottiefiles.com/) – Animaciones interactivas SVG
- 🔧 [Google Apps Script](https://developers.google.com/apps-script) – Backend sin servidor para traer datos desde Google Sheets

---

## 📦 Estructura del proyecto

```
fedespage/
│
├── public/
│   └── assets/           # Imágenes, íconos y archivos estáticos
│
├── src/
│   ├── api/              # Lógica de conexión con Google Apps Script (fetch)
│   ├── components/       # Componentes reutilizables
│   ├── pages/            # Vistas principales (Inicio, Servicios, Contacto...)
│   ├── styles/           # Estilos SASS centralizados
│   ├── hooks/            # Custom hooks como useToast, useUTM, etc.
│   ├── i18n/             # Configuración de idiomas (es/en)
│   ├── App.js            # Configuración de rutas y layout principal
│   └── index.js          # Punto de entrada de la app
│
├── .env                  # Variables de entorno
├── package.json
└── README.md
```

---

## 🌐 ¿Cómo se actualiza el contenido?

Los datos se cargan desde una **hoja de cálculo de Google Sheets** vinculada al sitio mediante un **script de Google Apps Script** desplegado como Web App. Se pueden administrar:

- 📝 Publicaciones y textos de secciones
- 🖼️ Imágenes para sliders y carruseles
- 🔗 Enlaces externos o call to actions
- 📅 Novedades, promociones, eventos

Esto permite que **usuarios no técnicos** puedan actualizar el contenido fácilmente sin tocar el código.

---

## 📸 Carruseles dinámicos

Las imágenes de carrusel se almacenan en Google Drive o se linkean desde la hoja, y son renderizadas automáticamente. Cada imagen puede contener:

- Texto superpuesto
- Enlace de acción (opcional)
- Tiempos de transición personalizados

---

## 🛠️ Scripts disponibles

| Comando             | Descripción                                |
|---------------------|--------------------------------------------|
| `npm start`         | Inicia el servidor de desarrollo           |
| `npm run build`     | Genera el build optimizado para producción |
| `npm run build-sass`| Compila y observa archivos `.scss`         |
| `npm test`          | Corre tests (si se agregan)                |

---

## 🔒 Seguridad y performance

- Código modular y optimizado
- No se almacenan datos sensibles en el navegador
- Compatible con buenas prácticas de SEO
- Rápido y responsive en todos los dispositivos

---

## ✍️ Personalización

Todo el contenido editable se gestiona desde Sheets. Además, se pueden modificar fácilmente:

- Estilos (colores, fuentes) desde `styles/main.scss`
- Secciones visibles o animaciones desde los componentes
- Añadir tracking de visitas o scripts externos desde `index.html`

---

## 📬 Contacto

Desarrollado por el equipo de **Fedes Consultora**.

> Para soporte técnico, integraciones personalizadas o desarrollo a medida:<br>
> 📩 [info@fedesconsultora.com](mailto:info@fedesconsultora.com)
