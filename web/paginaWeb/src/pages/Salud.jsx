// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import BackButton from '../components/BackButton';

// function Salud() {
//   const navigate = useNavigate();

//   return (
//     <div className="container text-center mt-4">
//         {/* Botón para volver atrás */}
//         <BackButton />
//         <h1>Salud Sexual</h1>
//         <p>Acá se encontrará toda la información sobre la salud sexual.</p>
//     </div>
//   );
// }

// export default Salud;
import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import BackButton from '../components/BackButton';
import CarouselSalud from '../components/CarouselSalud'; // Asegúrate de tener este componente
import saludData from '../informacionUtil/saludData'; // Asegúrate de tener este archivo de datos
import { AccessibilityContext } from '../context/AccessibilityContext';

function Salud() {
  const { theme, contrast, simplifiedNav } = useContext(AccessibilityContext);

  useEffect(() => {
    document.body.classList.toggle('high-contrast', contrast === 'high');
    document.body.classList.toggle('dark-theme', theme === 'dark');
  }, [contrast, theme]);

  return (
    <div className={`min-vh-100 ${theme} ${contrast}`}>
      <BackButton />

      <Container className="py-5">
        <h1 className="text-center mb-5 text-primary">Salud Sexual y Reproductiva</h1>

        {/* Carrusel centrado */}
        <Row className="justify-content-center mb-4">
          <Col md={8} className="d-flex justify-content-center">
            <CarouselSalud />
          </Col>
        </Row>

        <Row>
          {/* Barra de navegación lateral */}
          <Col md={3} className="d-none d-md-block">
            <Nav className={`flex-column sticky-top p-3 rounded shadow-sm ${
              theme === 'dark' ? 'bg-dark' : 'bg-white'
            } ${simplifiedNav ? 'simplified-nav' : ''}`} 
            style={{ top: "20px" }}>
              {saludData.map((tema) => (
                <Nav.Link 
                  key={tema.id} 
                  href={`#${tema.id}`} 
                  className={`fw-bold ${
                    theme === 'dark' ? 'text-light' : 'text-dark'
                  }`}>
                  {tema.nombre}
                </Nav.Link>
              ))}
            </Nav>
          </Col>

          {/* Contenido principal */}
          <Col md={9}>
            {saludData.map((tema) => (
              <section key={tema.id} id={tema.id} className={`mb-5 p-4 rounded shadow-sm ${
                theme === 'dark' ? 'bg-dark text-light' : 'bg-white'}`}>
                <h2 className="text-primary">{tema.nombre}</h2>
                <p>{tema.descripcion}</p>
                <p><strong>Objetivos de la ESI:</strong></p>
                <ul>
                  {tema.objetivos.map((objetivo, index) => (
                    <li key={index}>{objetivo}</li>
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

export default Salud;