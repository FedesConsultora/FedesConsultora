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
import ManualMarca from './pages/ManualMarca';

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