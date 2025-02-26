import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import BackButton from '../components/BackButton';
import CarouselAnticonceptivos from '../components/CarouselAnticonceptivos';
import anticonceptivosData from '../informacionUtil/anticonceptivosData';
import { AccessibilityContext } from '../context/AccessibilityContext';
import "./pages.css"

function Anticonceptivos() {
 
  const { theme, contrast, fontSize, simplifiedNav } = useContext(AccessibilityContext);

  useEffect(() => {
    if(contrast === 'high') {
      document.body.classList.add('high-contrast');
    } else { 
      document.body.classList.remove('high-contrast'); 
    }
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
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
              className={`nombre fw-bold ${
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


    </div>
  );
}

export default Anticonceptivos;
