// src/pages/Home.js
import React from 'react';
import SegundaSection from '../components/segundaSection/SegundaSection';
import TerceraSection from '../components/terceraSection/TerceraSection';
import CuartaSection from '../components/CuartaSection/CuartaSection';
import QuintaSection from '../components/quintaSection/quintaSection';

const Home = () => {
  return (
    <div>
      <SegundaSection />
      <TerceraSection />
      <CuartaSection />
      <QuintaSection />
    </div>
  );
};

export default Home;