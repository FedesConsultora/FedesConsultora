// src/pages/Galeria.js
import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Player } from '@lottiefiles/react-lottie-player';
import { useTranslation, Trans } from 'react-i18next';
import { getGaleriaFotos } from '../services/googleApi';

const Galeria = () => {
  const { t } = useTranslation();
  const [imagesData, setImagesData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  // Llamada a la API para obtener las imágenes desde el Excel
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getGaleriaFotos();
        // data es un array de objetos con { id, link }
        setImagesData(data);
      } catch (error) {
        console.error("Error fetching galería fotos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  // Funciones de navegación
  const handleNext = () => {
    if (currentIndex < imagesData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Definir swipe handlers (el hook se llama siempre)
  const mainHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Renderizado condicional según el estado
  if (loading) {
    return (
      <div className="galeria-loading" style={{ textAlign: 'center', padding: '2rem' }}>
        <Player
          autoplay
          loop
          src="/assets/videos/Loading.json"
          style={{ height: '300px', width: '300px' }}
        />
      </div>
    );
  }

  if (!loading && imagesData.length === 0) {
    return (
      <div className="galeria-empty" style={{ textAlign: 'center', padding: '2rem' }}>
        <Player
          autoplay
          loop
          src="/assets/videos/EmptyImage.json"
          style={{ height: '300px', width: '300px' }}
        />
        <p>{t('gallery_empty')}</p>
      </div>
    );
  }

  return (
    <main className="galeria-section">
      <section>
        {/* Sección de título */}
        <article className="contenedorTitulos">
          <img
            className="linea"
            src="https://www.fedesagency.com/fedes-consultora/landing/lineaChicaNegra.svg"
            alt="línea divisoria"
            loading="lazy"
          />
          <p className="tituloSoluciones" id="servicios_scroll">{t('gallery_title')}</p>
        </article>

        <h2 className="galeriaTitulo">
          <Trans i18nKey="gallery_subtitle">
            Nuestra <strong>esencia,</strong> capturada en <strong>imágenes que inspiran</strong>
          </Trans>
        </h2>

        <div className="galeria-container">
          {/* Imagen principal con flechas */}
          <div className="main-image-container" {...mainHandlers}>
            <div
              className={`arrow-btn prev ${currentIndex === 0 ? 'deshabilitado' : ''}`}
              onClick={handlePrev}
            >
              <img
                src="https://fedesagency.com/fedes-consultora/landing/galeria_flecha_izq.png"
                alt="Flecha Izquierda"
              />
            </div>

            <img
              className="main-image"
              src={imagesData[currentIndex].link}
              alt="Imagen Principal"
              onClick={() => setShowModal(true)}
            />

            <div
              className={`arrow-btn next ${currentIndex === imagesData.length - 1 ? 'deshabilitado' : ''}`}
              onClick={handleNext}
            >
              <img
                src="https://fedesagency.com/fedes-consultora/landing/galeria_flecha_der.png"
                alt="Flecha Derecha"
              />
            </div>
          </div>

          {/* Miniaturas */}
          <div className="thumbnails-container">
            {imagesData.map((item, index) => (
              <div
                key={item.id}
                className={`thumbnail ${index === currentIndex ? 'selected' : ''}`}
                onClick={() => setCurrentIndex(index)}
              >
                <img
                  src={item.link}
                  alt={`Miniatura ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Modal fullscreen */}
        {showModal && (
          <div
            className="modal-fullscreen"
            onClick={(ev) => {
              if (ev.target.classList.contains('modal-fullscreen')) {
                setShowModal(false);
              }
            }}
          >
            <span className="close-modal" onClick={() => setShowModal(false)}>X</span>
            <img
              id="modalImage"
              src={imagesData[currentIndex].link}
              alt="Imagen Fullscreen"
              loading="lazy"
            />
          </div>
        )}
      </section>
    </main>
  );
};

export default Galeria;
