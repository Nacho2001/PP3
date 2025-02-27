import React, { useContext, useEffect } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import BackButton from '../components/BackButton';
import CarouselDerechos from '../components/CarouselDerechos'; // Asegúrate de tener este componente
import { AccessibilityContext } from '../context/AccessibilityContext';
import derechosData from '../informacionUtil/derechosData';
import "./pages.css";

function Derechos() {
  const { theme, contrast, simplifiedNav } = useContext(AccessibilityContext);

  useEffect(() => {
    document.body.classList.toggle('high-contrast', contrast === 'high');
    document.body.classList.toggle('dark-theme', theme === 'dark');
  }, [contrast, theme]);

  return (
    <div className={`min-vh-100 ${theme} ${contrast}`}>
      <BackButton />

      <Container className="py-5">
        <h1 className="text-center mb-5 text-primary">Derechos Sexuales y Reproductivos</h1>

        {/* Carrusel centrado */}
        <Row className="justify-content-center mb-4 ">
          <Col md={8} className="d-flex justify-content-center ">
            <CarouselDerechos />
          </Col>
        </Row>

        <Row>
          {/* Barra de navegación lateral */}
          <Col md={3} className="d-none d-md-block">
            <Nav className={`flex-column sticky-top p-3 rounded shadow-sm ${
              theme === 'dark' ? 'bg-dark' : 'bg-white'
            } ${simplifiedNav ? 'simplified-nav' : ''}`} 
            style={{ top: "20px" }}>
              <Nav.Link href="#que-son" className={`nombre fw-bold ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                ¿Qué son?
              </Nav.Link>
              <Nav.Link href="#derechos-sexuales" className={`nombre fw-bold ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                Derechos Sexuales
              </Nav.Link>
              <Nav.Link href="#derechos-reproductivos" className={`nombre fw-bold ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                Derechos Reproductivos
              </Nav.Link>
              <Nav.Link href="#cuales-son" className={`nombre fw-bold ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                ¿Cuáles son los derechos?
              </Nav.Link>
              <Nav.Link href="#marco-legislativo" className={`nombre fw-bold ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                Marco legislativo en Argentina
              </Nav.Link>
              <Nav.Link href="#importancia-esi" className={`nombre fw-bold ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                Importancia de la ESI
              </Nav.Link>
              <Nav.Link href="#conclusion" className={`nombre fw-bold ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                Conclusión
              </Nav.Link>
            </Nav>
          </Col>

          {/* Contenido principal */}
          <Col md={9}>
            <div id="que-son">
              <h2 className="text-primary">¿Qué son?</h2>
              <p>{derechosData[0].descripcion}</p>
            </div>

            <div id="derechos-sexuales">
              <h2 className="text-primary">Derechos Sexuales</h2>
              <p>{derechosData[1].descripcion}</p>
            </div>

            <div id="derechos-reproductivos">
              <h2 className="text-primary">Derechos Reproductivos</h2>
              <p>{derechosData[2].descripcion}</p>
            </div>

            <div id="cuales-son">
              <h2 className="text-primary">¿Cuáles son los derechos?</h2>
              <p>Según la Federación Internacional de Planificación Familiar (IPPF), se incluyen:</p>
              <ul>
                {derechosData[3].objetivos.map((derecho, index) => (
                  <li key={index}>{derecho}</li>
                ))}
              </ul>
            </div>

            <div id="marco-legislativo">
              <h2 className="text-primary">Marco legislativo en Argentina</h2>
              <p>{derechosData[4].descripcion}</p>
              <p>Leyes nacionales relevantes incluyen:</p>
              <ul>
                <li>Ley Nº 26.150: Educación Sexual Integral (ESI), que garantiza la enseñanza de contenidos sobre salud sexual y reproductiva en todos los niveles educativos.</li>
                <li>Ley Nº 26.618: Matrimonio civil igualitario, que permite el casamiento entre personas del mismo sexo.</li>
                <li>Ley Nº 26.862: Fertilización Asistida, que garantiza el acceso a tratamientos de reproducción asistida.</li>
                <li>Ley Nº 25.929: Derechos de padres e hijos durante el proceso de nacimiento, protegiendo a las personas gestantes y promoviendo partos respetados.</li>
                <li>Ley Nº 27.610: Acceso a la interrupción voluntaria del embarazo (IVE), que garantiza la posibilidad de abortar de manera legal y segura hasta la semana 14 de gestación.</li>
                <li>Ley Nº 27.611: Cuidado Integral de la Salud durante el Embarazo y la Primera Infancia, que busca mejorar la salud de personas gestantes y niños/as desde el nacimiento.</li>
              </ul>
            </div>

            <div id="importancia-esi">
              <h2 className="text-primary">Importancia de la Educación Sexual Integral (ESI)</h2>
              <p>{derechosData[5].descripcion}</p>
              <ul>
                {derechosData[5].objetivos.map((objetivo, index) => (
                  <li key={index}>{objetivo}</li>
                ))}
              </ul>
            </div>

            <div id="conclusion">
              <h2 className="text-primary">Conclusión</h2>
              <p>
                Los Derechos Sexuales y Reproductivos son esenciales para garantizar la autonomía de las personas y el acceso a una vida plena y saludable. Es fundamental que el Estado y las instituciones educativas cumplan con su responsabilidad de asegurar estos derechos a todas las personas sin discriminación, promoviendo la educación, el acceso a la salud y la equidad de género.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Derechos;