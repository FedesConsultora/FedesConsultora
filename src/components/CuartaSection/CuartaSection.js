import React from 'react';
import ContenedorMarcas from './ContenedorMarcas';
import Carousel from './Carousel';
import ContenedorOpiniones from './ContenedorOpiniones';
import ContenedorAccion from './ContenedorAccion';

const CuartaSection = () => {
  return (
    <section className="cuartaSection">
      <ContenedorMarcas />
      <Carousel />
      <ContenedorOpiniones />
      <ContenedorAccion />
    </section>
  );
};

export default CuartaSection;
