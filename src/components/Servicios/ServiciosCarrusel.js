// src/components/Servicios/ServiciosCarrusel.js
import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useTranslation } from 'react-i18next';

const ServiciosCarrusel = () => {
  const { t } = useTranslation();

  // Datos de ejemplo con 3 slides
  const servicesData = [
    {
      id: 'posicionamiento',
      titulo: 'Posicionamiento',
      texto: `El complemento perfecto para elevar tu facturación. Potenciamos el liderazgo de tu compañía con marketing disruptivo, branding creativo y comunicación de impacto para tu marca.`,
      class: 'infoUno',
      icono: 'https://fedesagency.com/fedes-consultora/landing/iconoPosicionamiento.svg',
      linea: 'https://fedesagency.com/fedes-consultora/landing/lineaSenialadoraChica.svg',
      imagenCamino: 'https://fedesagency.com/fedes-consultora/landing/imagenCamino1.webp',
    },
    {
      id: 'performance',
      titulo: 'Performance',
      texto: `Potenciamos la estructura, tecnología y organización de tu empresa para transformarla en una compañía sólida y escalable.`,
      class: 'infoDos',
      icono: 'https://fedesagency.com/fedes-consultora/landing/iconoPerformance.svg',
      linea: 'https://fedesagency.com/fedes-consultora/landing/lineaSenialadoraMediana.svg',
      imagenCamino: 'https://fedesagency.com/fedes-consultora/landing/imagenCamino2.webp',
    },
    {
      id: 'consultoria',
      titulo: 'Consultoría empresarial',
      texto: `Potenciamos la estructura, tecnología y organización de tu empresa para que sea sólida y escalable.`,
      class: 'infoTres',
      icono: 'https://fedesagency.com/fedes-consultora/landing/iconoConsultoria.svg',
      linea: 'https://fedesagency.com/fedes-consultora/landing/lineaSenialadoraLarga.svg',
      imagenCamino: 'https://fedesagency.com/fedes-consultora/landing/imagenCamino3.webp',
    }
  ];

  // Page actual (para el carrusel)
  const [currentPage, setCurrentPage] = useState(0);

  // Medir ancho de contenedor
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(1);

  // Determinar si estamos en mobile (1 ítem) o desktop (3 ítems)
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      // si <1200 => 1 item (mobile), sino => 3 (desktop)
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

  // total pages
  const totalItems = servicesData.length; // 3
  const totalPages = Math.ceil(totalItems / visibleItems);

  // Botones next / prev
  const handleNext = () => {
    const next = currentPage + 1;
    setCurrentPage(next >= totalPages ? 0 : next);
  };
  const handlePrev = () => {
    const prev = currentPage - 1;
    setCurrentPage(prev < 0 ? totalPages - 1 : prev);
  };

  // swipe
  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // *** Toggling del efecto radial en mobile ***
  // Guardamos cuál slide está “tap” en mobile
  const [activeSlide, setActiveSlide] = useState(null);

  // Si es desktop (visibleItems===3), no hacemos toggle en click
  // pero en mobile (visibleItems===1), un click togglea la clase:
  const handleTap = (slideId) => {
    if (visibleItems === 3) return; // en desktop no hacer nada
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
            // Determinar si en mobile este slide está “activo” (tap)
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
                // en mobile, togglear la clase active
                onClick={() => handleTap(item.id)}
              >
                {/* Imagen de fondo que se mueve con el slide */}
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

                {/* Contenido */}
                <div className={item.class}>
                  <img
                    src={item.linea}
                    alt="linea"
                    className="lineaImg"
                  />
                  <img
                    className="iconoImg"
                    src={item.icono}
                    alt="icon"
                  />
                  <article>
                    <h3>{item.titulo}</h3>
                    <p>{item.texto}</p>
                  </article>
                </div>

                {/* Botones next/prev dentro de cada slide (si deseas) */}
                {totalPages > 1 && (
                  <>
                    <button onClick={handlePrev} className="prevButton">
                      <img src="https://fedesagency.com/fedes-consultora/landing/galeria_flecha_izq.png" alt="flecha izq" />
                    </button>
                    <button onClick={handleNext} className="nextButton">
                      <img src="https://fedesagency.com/fedes-consultora/landing/galeria_flecha_der.png" alt="flecha der" />
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* (Opcional) Indicadores/puntos fuera de .grandeServicios */}
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
