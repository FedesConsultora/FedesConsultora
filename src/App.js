// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main'; // Main se usará como wrapper para los children
import Home from './pages/Home';
import './styles/main.scss';
import './i18n'; 

function App() {
  return (
    <Router>
      <Header /> 
      <Main> 
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Main>
      <Footer /> 
    </Router>
  );
}

export default App;

