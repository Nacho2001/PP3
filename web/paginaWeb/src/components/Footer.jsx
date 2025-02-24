import React from 'react';
import './EstilosFooter.css';

function BasicFooter() {
  return (
    <footer className="footer">
      <ul className="social-icon">
        <li className="icon-elem">
          <a href="https://www.youtube.com/watch?v=9gQpHziwITA&list=PLZ6TIj4tHEIu14Vyk_ru4pPGzhYOo6ZUY&ab_channel=CanalEncuentro" className="icon">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a href="https://www.instagram.com/esconesi/?hl=es" className="icon">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
          <a href="https://www.facebook.com/p/ESI-Neuqu%C3%A9n-100063545679877/?locale=es_LA" className="icon">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="icon-elem">
        <a href="mailto:Brianduvall34@gmail.com?subject=Consulta&body=Hola, me gustaría saber más sobre..." className="icon">
            <ion-icon name="mail-outline"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu-elem">
          <a href="#" className="menu-icon"> Inicio </a>
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
      <p className="text">@2025 | Todos los derechos reservados</p>
    </footer>
  );
}

export default BasicFooter;