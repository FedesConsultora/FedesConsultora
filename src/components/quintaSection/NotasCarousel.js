import React, { useState, useEffect } from 'react';
import NotaItem from './NotaItem';
import { useSwipeable } from 'react-swipeable';
import { useTranslation } from 'react-i18next';

const NotasCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleItems, setVisibleItems] = useState(1);
  const { t } = useTranslation();

  const notas = [
    {
      imgSrc: 'https://fedesagency.com/fedes-consultora/landing/fotoNota1.png',
      altText: t('note_1_title'),
      titulo: t('note_1_title'),
      texto: t('note_1_description'),
      url: 'https://noticias.perfil.com/noticias/espacio-no-editorial/fedes-consultora.phtml',
    },
    {
      imgSrc: 'https://fedesagency.com/fedes-consultora/landing/fotoNota2.png',
      altText: t('note_2_title'),
      titulo: t('note_2_title'),
      texto: t('note_2_description'),
      url: 'https://www.motivar.com.ar/2023/05/liderazgo-digital-en-la-industria-veterinaria',
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setVisibleItems(window.innerWidth < 1030 ? 1 : 2);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleItems) % notas.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - visibleItems;
      return newIndex < 0 ? notas.length + newIndex : newIndex;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <article className="contenedorNotas" id="prensaScroll">
      <div className="carouselNotas" {...handlers}>
        <div className="grandeNotas" style={{ transform: `translateX(-${currentIndex * (50 / visibleItems)}%)` }}>
          {notas.map((nota, index) => (
            <NotaItem
              key={index}
              imgSrc={nota.imgSrc}
              altText={nota.altText}
              titulo={nota.titulo}
              texto={nota.texto}
              url={nota.url}
            />
          ))}
        </div>
        <ul className="puntosNotas">
          {Array.from({ length: Math.ceil(notas.length / visibleItems) }).map((_, index) => (
            <li
              key={index}
              className={`puntoNotas ${Math.floor(currentIndex / visibleItems) === index ? 'activo' : ''}`}
              onClick={() => setCurrentIndex(index * visibleItems)}
            />
          ))}
        </ul>
      </div>
    </article>
  );
};

export default NotasCarousel;
