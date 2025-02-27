import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import BackButton from "../components/BackButton";
import CarouselSalud from "../components/CarouselSalud"; 
import { AccessibilityContext } from "../context/AccessibilityContext";
import saludData from "../informacionUtil/saludData";
import "./pages.css";

function Salud() {
  const { theme, contrast, simplifiedNav } = useContext(AccessibilityContext);

  useEffect(() => {
    document.body.classList.toggle("high-contrast", contrast === "high");
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [contrast, theme]);

  return (
    <div className={`min-vh-100 ${theme} ${contrast}`}>
      <BackButton />

      <Container className="py-5">
        <h1 className="text-center mb-5 text-primary">
          Salud Sexual y Reproductiva
        </h1>

        {/* Carrusel centrado */}
        <Row className="justify-content-center mb-4 ">
          <Col md={8} className="d-flex justify-content-center ">
            <CarouselSalud />
          </Col>
        </Row>

        <Row>
          {/* Barra de navegación lateral */}
          <Col md={3} className="d-none d-md-block">
            <Nav
              className={`flex-column sticky-top p-3 rounded shadow-sm ${
                theme === "dark" ? "bg-dark" : "bg-white"
              } ${simplifiedNav ? "simplified-nav" : ""}`}
              style={{ top: "20px" }}
            >
              <Nav.Link
                href="#que-son"
                className={`nombre fw-bold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                Órganos Reproductores Masculinos
              </Nav.Link>
              <Nav.Link
                href="#derechos-sexuales"
                className={`nombre fw-bold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                Testículos
              </Nav.Link>
              <Nav.Link
                href="#derechos-reproductivos"
                className={`nombre fw-bold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                Conducto deferente
              </Nav.Link>
              <Nav.Link
                href="#derechos-reproductivos"
                className={`nombre fw-bold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                Vesículas Seminales
              </Nav.Link>
              <Nav.Link
                href="#cuales-son"
                className={`nombre fw-bold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                Próstata
              </Nav.Link>
              <Nav.Link
                href="#marco-legislativo"
                className={`nombre fw-bold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                Pene
              </Nav.Link>
              <Nav.Link
                href="#importancia-esi"
                className={`nombre fw-bold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                Aparato reproductor Femenino
              </Nav.Link>
              <Nav.Link
                href="#conclusion"
                className={`nombre fw-bold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                Trompas de Falopio
              </Nav.Link>
              <Nav.Link
                href="#conclusion"
                className={`nombre fw-bold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                Ovarios
              </Nav.Link>
              <Nav.Link
                href="#conclusion"
                className={`nombre fw-bold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                Útero y cuello uterino
              </Nav.Link>
              <Nav.Link
                href="#conclusion"
                className={`nombre fw-bold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                Endometrio
              </Nav.Link>
              <Nav.Link
                href="#conclusion"
                className={`nombre fw-bold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                Vagina
              </Nav.Link>
              <Nav.Link
                href="#conclusion"
                className={`nombre fw-bold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                Vulva
              </Nav.Link>
              <Nav.Link
                href="#conclusion"
                className={`nombre fw-bold ${
                  theme === "dark" ? "text-light" : "text-dark"
                }`}
              >
                El ciclo del aparato reproductor femenino
              </Nav.Link>
            </Nav>
          </Col>

          {/* Contenido principal */}
          <Col md={9}>
            {/* Sección: Órganos Reproductores Masculinos */}
            <div id="organos-reproductores-masculinos">
              <h2 className="text-primary">Órganos Reproductores Masculinos</h2>
            </div>

            {/* Sección: Epidídimo */}
            <div id="Testículos">
              <h2 className="text-primary">Testículos</h2>
              <p>{saludData[0].descripcion}</p>
            </div>

            {/* Sección: Conducto deferente */}
            <div id="conducto-deferente">
              <h2 className="text-primary">Conducto deferente</h2>
              <p>{saludData[1].descripcion}</p>
            </div>

            <div id="vesículas-seminales">
              <h2 className="text-primary">Vesículas Seminales</h2>
              <p>{saludData[2].descripcion}</p>
            </div>
            {/* Sección: Próstata */}
            <div id="prostata">
              <h2 className="text-primary">Próstata</h2>
              <p>{saludData[3].descripcion}</p>
            </div>

            {/* Sección: Pene */}
            <div id="pene">
              <h2 className="text-primary">Pene</h2>
              <p>{saludData[4].descripcion}</p>
            </div>

            {/* Sección: Aparato reproductor Femenino */}
            <div id="aparato-reproductor-femenino">
              <h2 className="text-primary">Aparato reproductor Femenino</h2>
              <p>{saludData[5].descripcion}</p>
            </div>

            {/* Sección: Trompas de Falopio */}
            <div id="trompas-de-falopio">
              <h2 className="text-primary">Trompas de Falopio</h2>
              <p>{saludData[6].descripcion}</p>
            </div>

            {/* Sección: Ovarios */}
            <div id="ovarios">
              <h2 className="text-primary">Ovarios</h2>
              <p>{saludData[7].descripcion}</p>
            </div>

            {/* Sección: Útero y cuello uterino */}
            <div id="utero-y-cuello-uterino">
              <h2 className="text-primary">Útero y cuello uterino</h2>
              <p>{saludData[8].descripcion}</p>
            </div>

            {/* Sección: Endometrio */}
            <div id="endometrio">
              <h2 className="text-primary">Endometrio</h2>
              <p>{saludData[9].descripcion}</p>
            </div>

            {/* Sección: Vagina */}
            <div id="vagina">
              <h2 className="text-primary">Vagina</h2>
              <p>{saludData[10].descripcion}</p>
            </div>

            {/* Sección: Vulva */}
            <div id="vulva">
              <h2 className="text-primary">Vulva</h2>
              <p>{saludData[11].descripcion}</p>
            </div>

            {/* Sección: Reproductor femenino */}
            <div id="ciclo-reproductor-femenino">
              <h2 className="text-primary">El ciclo del aparato reproductor femenino</h2>
              <p>{saludData[12].descripcion}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Salud;
