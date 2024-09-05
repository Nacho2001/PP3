import React from 'react';
import './EstilosFooter.css';

function BasicFooter() {
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li className="icon-elem">
          <a href="" className="icon">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a href="" className="icon">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a href="" className="icon">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a href="" className="icon">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu-elem">
          <a href="" className="menu-icon"> Inicio </a>
        </li>
        <li className="menu-elem">
          <a href="" className="menu-icon"> Equipo </a>
        </li>
        <li className="menu-elem">
          <a href="" className="menu-icon"> Contacto </a>
        </li>
        <li className="menu-elem">
          <a href="" className="menu-icon"> Video </a>
        </li>
        <li className="menu-elem">
          <a href="" className="menu-icon"> Sobre Nosotros </a>
        </li>
      </ul>
      <p className="text">@Año | Todos los derechos reservados</p>
    </footer>
  );
}

export default BasicFooter;