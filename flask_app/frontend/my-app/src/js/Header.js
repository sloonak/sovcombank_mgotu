import React from 'react';
import logo from '../source/logo.jpg';
import '../css/Header.css';

function Header() {
  return (
    <div className="header">
      <header>
        <nav className="nav">
          <a href="/">
            <img src={logo} alt="Совкомбанк" className="logo" />
          </a>
          <div className="buttons">
            <button>Преимущества</button>
            <button>Внедрения</button>
            <button>Как нанимать</button>
          </div>
        </nav>
          <div className="divider"></div>
      </header>
  </div>
  );
}

export default Header;
