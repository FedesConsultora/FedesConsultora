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
import ServiciosFedes from './pages/BlogPages/ServiciosFedes';
import ViajeroEternidad from './pages/BlogPages/ViajeroEternidad';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import TerminosCondiciones from './pages/TerminosCondiciones';
import Kickoff2025 from './pages/BlogPages/Kickoff2025';
import ThankYou from './pages/ThankYou';
import CreadoresTresC from './pages/BlogPages/TresC';
import CreatividadInnovacion from './pages/BlogPages/CreatividadInnovacion';
import CRMIntegradoEcommerce from './pages/BlogPages/CRMIntegradoEcommerce';
import SEOEcommerce from './pages/BlogPages/SEOEcommerce';
import GrowthMarketing from './pages/BlogPages/GrowthMarketing';
import PosicionamientoEstrategico from './pages/BlogPages/PosicionamientoEstrategico';

// 🚀 Nueva página de onboarding
import OnboardingEmpresas from './pages/OnboardingEmpresas';

// 📱 Tarjetas Digitales (NFT/QR)
import TarjetaMartin from './pages/TarjetasDigitales/TarjetaMartin';
import TarjetaFedericoJuan from './pages/TarjetasDigitales/TarjetaFedericoJuan';
import TarjetaFedericoChironi from './pages/TarjetasDigitales/TarjetaFedericoChironi';

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
      // nueva clase para jugar con estilos si querés
      case '/onboarding-empresas':
        return 'onboarding';
      default:
        return '';
    }
  };

  const isCardPage = location.pathname.includes('/feders/cards/');

  return (
    <div className={`containerApp ${getContainerClass()}`}>
      {!isCardPage && <Header />}
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
          <Route path="/posicionamiento-estrategico" element={<PosicionamientoEstrategico />} />
          <Route path="/crm-y-ecommerce" element={<CRMIntegradoEcommerce />} />
          <Route path="/seo-para-ecommerce" element={<SEOEcommerce />} />
          <Route path="/growth-marketing" element={<GrowthMarketing />} />

          {/* 🔒 Ventana oculta de onboarding (link directo) */}
          <Route path="/onboarding-empresas" element={<OnboardingEmpresas />} />

          {/* 📱 Tarjetas Digitales NFT/QR (acceso solo por link directo) */}
          <Route path="/feders/cards/martinspinelli" element={<TarjetaMartin />} />
          <Route path="/feders/cards/fedejuan" element={<TarjetaFedericoJuan />} />
          <Route path="/feders/cards/federicochironi" element={<TarjetaFedericoChironi />} />

          <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </Main>
      {!isCardPage && <Footer />}
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
