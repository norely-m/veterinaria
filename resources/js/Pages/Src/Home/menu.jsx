import React, { useState } from 'react';
import './Menu.css';

function ResponsiveMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="menu-container">
      <nav className="navbar">
        <h1 className="logo">Mi PWA</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="./components/Contacto/Contacto.jsx">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default ResponsiveMenu;