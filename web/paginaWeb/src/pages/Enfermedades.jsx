import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import BackButton from "../components/BackButton";
import { AccessibilityContext } from "../context/AccessibilityContext";
import enfermedadaesData from "../informacionUtil/enfermedadaesData";
import "./pages.css"

function Enfermedades() {
  const { theme, contrast, fontSize, simplifiedNav } = useContext(AccessibilityContext);

  useEffect(() => {
    if (contrast === "high") {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    document.documentElement.style.fontSize =
      fontSize === "large" ? "120%" : fontSize === "larger" ? "140%" : "100%";
  }, [contrast, fontSize, theme]);

  return (
    <div className={`min-vh-100  ${theme} ${contrast}`}>
      <BackButton />

      <Container className="py-5">
        <h1 className="text-center mb-5 text-primary">
          Enfermedades de Transmisión Sexual
        </h1>
        <Row>
          {/* Barra de navegación lateral */}
          <Col md={3} className="d-none d-md-block">
            <Nav
              className={`flex-column sticky-top p-3 rounded shadow-sm ${
                theme === "dark" ? "bg-dark" : "bg-white"
              } ${simplifiedNav ? "simplified-nav" : ""}`}
              style={{ top: "20px" }}
            >
              {enfermedadaesData.map((metodo) => (
                <Nav.Link
                  key={metodo.id}
                  href={`#${metodo.id}`}
                  className={`nombre fw-bold ${
                    theme === "dark" ? "text-light" : "text-dark"
                  }`}
                >
                  {metodo.nombre}
                </Nav.Link>
              ))}
            </Nav>
          </Col>

          {/* Contenido principal */}
          <Col md={9}>
            {enfermedadaesData.map((metodo) => (
              <section
                key={metodo.id}
                id={metodo.id}
                className={`mb-5 p-4 rounded shadow-sm ${
                  theme === "dark" ? "bg-dark text-light" : "bg-white"
                }`}
              >
                <h2 className="text-primary">{metodo.nombre}</h2>
                <p>
                  <strong></strong> {metodo.descripcion}
                </p>
                <div className="">
                  {metodo.id === "VIH" ? (
                    <>
                      <h3 className="mt-3 text-success">¿Como se transmiten? </h3>
                <ul>
                  {metodo.Transmiten.map((transmision, index) => (
                    <li key={index}>{transmision}</li>
                  ))}
                </ul>
                      </>
                      ) : (
                        <p><strong>¿Cómo se transmiten?</strong> {metodo.Transmiten}</p>
                      )}
                </div>
                <p><strong> ¿Cómo se previenen? </strong>{metodo.Previene}</p>
                <p>
                  <strong>¿Cómo se detecta?</strong> {metodo.Detecta}
                </p>
                <h3 className="mt-3 text-success">¿Cuáles son los síntomas? </h3>
                <ul>
                  {metodo.Sintomas.map((sintoma, index) => (
                    <li key={index}>{sintoma}</li>
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

export default Enfermedades;
