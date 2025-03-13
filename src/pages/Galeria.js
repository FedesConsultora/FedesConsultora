// src/pages/Galeria.js
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const imagesData = [
  'https://fedesagency.com/fedes-consultora/landing/galeria/fedes_galeria_1.jpg',
  'https://fedesagency.com/fedes-consultora/landing/galeria/fedes_galeria_2.1.jpg',
  'https://fedesagency.com/fedes-consultora/landing/galeria/fedes_galeria_3.jpg',
  'https://fedesagency.com/fedes-consultora/landing/galeria/fedes_galeria_4.jpg',
  'https://fedesagency.com/fedes-consultora/landing/galeria/fedes_galeria_5.jpg',
  'https://fedesagency.com/fedes-consultora/landing/galeria/fedes_galeria_6.jpg',
  'https://fedesagency.com/fedes-consultora/landing/galeria/fedes_galeria_7.jpg',
  'https://fedesagency.com/fedes-consultora/landing/galeria/fedes_galeria_8.jpg',
];

const Galeria = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Manejo flechas en la imagen principal
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

  // Al hacer click en miniatura => se actualiza imagen principal
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  // Modal (fullscreen)
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const isFirstImage = currentIndex === 0;
  const isLastImage = currentIndex === imagesData.length - 1;

  // Swipe principal (imagen)
  const mainHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <main className="galeria-section">
      <section>
        {/* Sección de título */}
        <article className="contenedorTitulos">
          <img
            className="linea"
            src="https://www.fedesagency.com/fedes-consultora/landing/lineaChicaNegra.svg"
            alt="linea divisoria"
            loading="lazy"
          />
          <p className="tituloSoluciones" id="servicios_scroll">GALERÍA</p>
        </article>

        <h2 className="galeriaTitulo">
          Nuestra <strong>esencia,</strong> capturada en <strong>imágenes que inspiran</strong>
        </h2>

        <div className="galeria-container">
          {/* Contenedor flechas + imagen */}
          <div className="main-image-container" {...mainHandlers}>
            <div
              className={`arrow-btn prev ${isFirstImage ? 'deshabilitado' : ''}`}
              onClick={handlePrev}
            >
              <img
                src="https://fedesagency.com/fedes-consultora/landing/galeria_flecha_izq.png"
                alt="Flecha Izquierda"
              />
            </div>

            <img
              className="main-image"
              src={imagesData[currentIndex]}
              alt="Imagen Principal"
              onClick={openModal}
            />

            <div
              className={`arrow-btn next ${isLastImage ? 'deshabilitado' : ''}`}
              onClick={handleNext}
            >
              <img
                src="https://fedesagency.com/fedes-consultora/landing/galeria_flecha_der.png"
                alt="Flecha Derecha"
              />
            </div>
          </div>

          {/* Thumbnails (siempre visibles) */}
          <div className="thumbnails-container">
            {imagesData.map((imgUrl, index) => (
              <div
                key={index}
                className={`thumbnail ${index === currentIndex ? 'selected' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={imgUrl}
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
              // Cerrar modal si click afuera de la imagen
              if (ev.target.classList.contains('modal-fullscreen')) {
                closeModal();
              }
            }}
          >
            <span className="close-modal" onClick={closeModal}>X</span>
            <img
              id="modalImage"
              src={imagesData[currentIndex]}
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
