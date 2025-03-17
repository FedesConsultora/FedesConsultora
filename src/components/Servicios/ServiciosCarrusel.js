// src/components/Servicios/ServiciosCarrusel.js
import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useTranslation } from 'react-i18next';

const ServiciosCarrusel = () => {
  const { t } = useTranslation();

  // Definición de los servicios usando claves de traducción para título y texto.
  const servicesData = [
    {
      id: 'posicionamiento',
      tituloKey: 'service.posicionamiento.titulo',
      textoKey: 'service.posicionamiento.texto',
      class: 'infoUno',
      icono: 'https://fedesagency.com/fedes-consultora/landing/iconoPosicionamiento.svg',
      linea: 'https://fedesagency.com/fedes-consultora/landing/lineaSenialadoraChica.svg',
      imagenCamino: 'https://fedesagency.com/fedes-consultora/landing/imagenCamino1.webp',
    },
    {
      id: 'performance',
      tituloKey: 'service.performance.titulo',
      textoKey: 'service.performance.texto',
      class: 'infoDos',
      icono: 'https://fedesagency.com/fedes-consultora/landing/iconoPerformance.svg',
      linea: 'https://fedesagency.com/fedes-consultora/landing/lineaSenialadoraMediana.svg',
      imagenCamino: 'https://fedesagency.com/fedes-consultora/landing/imagenCamino2.webp',
    },
    {
      id: 'consultoria',
      tituloKey: 'service.consultoria.titulo',
      textoKey: 'service.consultoria.texto',
      class: 'infoTres',
      icono: 'https://fedesagency.com/fedes-consultora/landing/iconoConsultoria.svg',
      linea: 'https://fedesagency.com/fedes-consultora/landing/lineaSenialadoraLarga.svg',
      imagenCamino: 'https://fedesagency.com/fedes-consultora/landing/imagenCamino3.webp',
    }
  ];

  // Estado para la página actual del carrusel y cantidad de ítems visibles
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(1);

  // Ajuste de visibleItems según el ancho del contenedor
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      if (width < 1200) {
        setVisibleItems(1);
      } else {
        setVisibleItems(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = servicesData.length;
  const totalPages = Math.ceil(totalItems / visibleItems);

  // Botones next y prev
  const handleNext = () => {
    const next = currentPage + 1;
    setCurrentPage(next >= totalPages ? 0 : next);
  };
  const handlePrev = () => {
    const prev = currentPage - 1;
    setCurrentPage(prev < 0 ? totalPages - 1 : prev);
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Efecto de toggle en mobile para marcar el slide activo
  const [activeSlide, setActiveSlide] = useState(null);
  const handleTap = (slideId) => {
    if (visibleItems === 3) return;
    setActiveSlide((prev) => (prev === slideId ? null : slideId));
  };

  return (
    <div className="contenedorServiciosCarrusel" ref={containerRef}>
      <div className="carouselServicios" {...handlers}>
        <div
          className="grandeServicios"
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${currentPage * 100}%)`,
            width: `${totalPages * 100}%`,
          }}
        >
          {servicesData.map((item) => {
            const isActive = activeSlide === item.id;
            return (
              <div
                key={item.id}
                data-slide={item.id}
                className={`serviceSlide ${isActive ? 'active' : ''}`}
                style={{
                  flex: `0 0 calc(100% / ${visibleItems})`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                }}
                onClick={() => handleTap(item.id)}
              >
                <img
                  src={item.imagenCamino}
                  alt="Camino"
                  className="caminoImg"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    pointerEvents: 'none',
                    zIndex: 1,
                  }}
                />
                <div className={item.class}>
                  <img
                    src={item.linea}
                    alt="línea"
                    className="lineaImg"
                  />
                  <img
                    className="iconoImg"
                    src={item.icono}
                    alt="icono"
                  />
                  <article>
                    <h3>{t(item.tituloKey)}</h3>
                    <p>{t(item.textoKey)}</p>
                  </article>
                </div>
                {totalPages > 1 && (
                  <>
                    <button onClick={handlePrev} className="prevButton">
                      <img src="https://fedesagency.com/fedes-consultora/landing/galeria_flecha_izq.png" alt={t('arrow_left')} />
                    </button>
                    <button onClick={handleNext} className="nextButton">
                      <img src="https://fedesagency.com/fedes-consultora/landing/galeria_flecha_der.png" alt={t('arrow_right')} />
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {totalPages > 1 && (
        <ul className="puntosServicios">
          {Array.from({ length: totalPages }).map((_, i) => (
            <li
              key={i}
              className={`punto ${currentPage === i ? 'activo' : ''}`}
              onClick={() => setCurrentPage(i)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiciosCarrusel;
