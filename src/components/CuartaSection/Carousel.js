// src/components/Carousel.js
import React, { useState, useEffect } from 'react';
import CarouselItem from './CarouselItem';
import { useSwipeable } from 'react-swipeable';
import { useTranslation } from 'react-i18next';

const Carousel = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleItems, setVisibleItems] = useState(1); 

  const items = [
    {
      imgSrc: "https://fedesagency.com/fedes-consultora/landing/placaKronenVet.jpg",
      altText: t('brand_1'),
      overlayClass: "kronen",
      logoSrc: "https://fedesagency.com/fedes-consultora/landing/logoKronen.png",
      logoAlt: "Logo de Kronen",
      pdfUrl: "https://fedesagency.com/fedes-consultora/landing/pdfKronen.pdf#toolbar=0"
    },
    {
      imgSrc: "https://fedesagency.com/fedes-consultora/landing/placaTuCan.jpg",
      altText: t('brand_2'),
      overlayClass: "tuCan",
      logoSrc: "https://fedesagency.com/fedes-consultora/landing/logoTucan2.png",
      logoAlt: "Logo de Tucan",
      pdfUrl: "https://fedesagency.com/fedes-consultora/landing/pdfTucan.pdf#toolbar=0"
    },
    {
      imgSrc: "https://fedesagency.com/fedes-consultora/landing/placaPeterPuhl.jpg",
      altText: t('brand_3'),
      overlayClass: "peters",
      logoSrc: "https://fedesagency.com/fedes-consultora/landing/logoPeters3.png",
      logoAlt: "Logo de Peters Puhl",
      pdfUrl: "https://fedesagency.com/fedes-consultora/landing/PromosTucan.pdf#toolbar=0"
    },
    {
      imgSrc: "https://fedesagency.com/fedes-consultora/landing/placaAbes.jpg",
      altText: t('brand_4'),
      overlayClass: "abes",
      logoSrc: "https://fedesagency.com/fedes-consultora/landing/logoAbes.png",
      logoAlt: "Logo de Abes",
      pdfUrl: "https://fedesagency.com/fedes-consultora/landing/pdfAbes.pdf#toolbar=0"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setVisibleItems(window.innerWidth < 800 ? 1 : 2);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / visibleItems);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleItems) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - visibleItems;
      return newIndex < 0 ? totalItems - visibleItems : newIndex;
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <article className="contenedorCarrusel">
      <div className="carousel" {...handlers}>
        <div
          className="grande"
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${currentIndex * (50 / visibleItems)}%)`, 
          }}
        >
          {items.map((item, index) => (
            <CarouselItem key={index} {...item} />
          ))}
        </div>

        <ul className="puntos">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li
              key={index}
              className={`punto ${Math.floor(currentIndex / visibleItems) === index ? 'activo' : ''}`}
              onClick={() => setCurrentIndex(index * visibleItems)} 
            />
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Carousel;
