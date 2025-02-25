import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Navbars from '../components/Navbar';
import BackButton from '../components/BackButton';
import CarouselAnticonceptivos from '../components/CarouselAnticonceptivos';
import anticonceptivosData from '../informacionUtil/anticonceptivosData';
import { AccessibilityContext } from '../context/AccessibilityContext';

function Anticonceptivos() {
  const { theme, contrast, fontSize, simplifiedNav } = useContext(AccessibilityContext);

  useEffect(() => {
    document.body.classList.toggle('high-contrast', contrast === 'high');
    document.body.classList.toggle('dark-theme', theme === 'dark');
    document.documentElement.style.fontSize = fontSize === 'large' ? '120%' : fontSize === 'larger' ? '140%' : '100%';
  }, [contrast, fontSize, theme]);

  return (
    <div className={`min-vh-100  ${theme} ${contrast}`}>
      <BackButton />

      <Container className="py-5">
        <h1 className="text-center mb-5 text-primary">Métodos Anticonceptivos</h1>

        {/* Carrusel centrado */}
        <Row className="justify-content-center mb-4">
          <Col md={8} className="d-flex justify-content-center">
            <CarouselAnticonceptivos />
          </Col>
        </Row>

        <Row>
          {/* Barra de navegación lateral */}
          <Col md={3} className="d-none d-md-block">
        <Nav className={`flex-column sticky-top p-3 rounded shadow-sm ${
          theme === 'dark' ? 'bg-dark' : 'bg-white'
        } ${simplifiedNav ? 'simplified-nav' : ''}`} 
          style={{ top: "20px" }}>
          {anticonceptivosData.map((metodo) => (
            <Nav.Link 
              key={metodo.id} 
              href={`#${metodo.id}`} 
              className={`fw-bold ${
                theme === 'dark' ? 'text-light' : 'text-dark'
              }`}>
              {metodo.nombre}
            </Nav.Link>
          ))}
        </Nav>
      </Col>

          {/* Contenido principal */}
          <Col md={9}>
            {anticonceptivosData.map((metodo) => (
              <section key={metodo.id} id={metodo.id}  className={`mb-5 p-4 rounded shadow-sm ${
                theme === 'dark' ? 'bg-dark text-light' : 'bg-white'}`}>
                <h2 className="text-primary">{metodo.nombre}</h2>
                <p><strong>Descripción:</strong> {metodo.descripcion}</p>
                <p><strong>Uso:</strong> {metodo.uso}</p>
                <p><strong>Efectividad:</strong> {metodo.efectividad}</p>
                <p><strong>Previene ITS:</strong> {metodo.previeneIts}</p>
                <p><strong>Frecuencia de uso:</strong> {metodo.FrecuenciaDeUso}</p>
                
                <h3 className="mt-3 text-success">Ventajas</h3>
                <ul>
                  {metodo.ventajas.map((ventaja, index) => (
                    <li key={index}>{ventaja}</li>
                  ))}
                </ul>
                
                <h3 className="mt-3 text-danger">Desventajas</h3>
                <ul>
                  {metodo.desventajas.map((desventaja, index) => (
                    <li key={index}>{desventaja}</li>
                  ))}
                </ul>
              </section>
            ))}
          </Col>
        </Row>
      </Container>

      <style>
      {`
.anticonceptivos-page {
  background-color: var(--background-color, #f8f9fa);
  color: var(--text-color, #212529);
  transition: all 0.3s ease;
}

/* Tema oscuro */
.dark-theme {
  background-color: #121212 !important;
  color: #e0e0e0 !important;
}

.dark-theme .bg-white {
  background-color: #1e1e1e !important;
}

/* Alto contraste */
.high-contrast {
  background-color: black !important;
  color: yellow !important;
}

.high-contrast * {
  border-color: yellow !important;
}

.high-contrast .bg-white,
.high-contrast .bg-dark {
  background-color: black !important;
  color: yellow !important;
}

.high-contrast .text-primary {
  color: yellow !important;
}

/* Navegación simplificada */
.simplified-nav {
  font-size: 1.2rem !important;
}

.simplified-nav .nav-link {
  padding: 1rem !important;
}
`}
      </style>
    </div>
  );
}

export default Anticonceptivos;
