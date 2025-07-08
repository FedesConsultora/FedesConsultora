// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import Home from './pages/Home';
import './styles/main.scss';
import './i18n'; 
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Galeria from './pages/Galeria';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';
import ManualMarca from './pages/BlogPages/ManualMarca';
import ServiciosFedes from './pages/ServiciosFedes';
import ViajeroEternidad from './pages/BlogPages/ViajeroEternidad';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import TerminosCondiciones from './pages/TerminosCondiciones';
import Kickoff2025 from './pages/BlogPages/Kickoff2025';
import ThankYou from './pages/ThankYou';
import CreadoresTresC from './pages/BlogPages/TresC';
import CreatividadInnovacion from './pages/BlogPages/CreatividadInnovacion';

const AppContent = () => {
  const location = useLocation();

  const getContainerClass = () => {
    switch (location.pathname) {
      case '/':
        return 'home';
      case '/nosotros':
        return 'nosotros';
      case '/servicios':
        return 'servicios';
      case '/galeria':
        return 'galeria';
      case '/contactanos':
        return 'contactanos';
      case '/blog':
        return 'blog';
      default:
        return '';
    }
  };

  return (
    <div className={`containerApp ${getContainerClass()}`}>
      <Header /> 
      <Main> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contactanos" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/manual-de-marca" element={<ManualMarca />} />
          <Route path="/servicios-fedes" element={<ServiciosFedes />} />
          <Route path="/viajero-eternidad" element={<ViajeroEternidad />} />
          <Route path="/kickoff-2025" element={<Kickoff2025 />} />
          <Route path="/creadores-tres-c" element={<CreadoresTresC />} />
          <Route path="/creatividad-e-innovacion" element={<CreatividadInnovacion />} />

          <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
          <Route path="/thank-you" element={<ThankYou />} />

        </Routes>
      </Main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;