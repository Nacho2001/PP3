import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export default function Navbars() {
  const linkStyleColor = {
    color: "rgba(0, 158, 115, 1)",
  };
  const linkStyle = {
    color: "rgba(33, 150, 243, 1)",
  };

  return (
    <>
      <Navbar expand="sm" className="mb-3 custom-navbar">
        <Container>
          <Navbar.Brand
            href="https://www.argentina.gob.ar/justicia/derechofacil/leysimple/educacion-sexual"
            style={linkStyleColor}
          >
            ESI
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" style={linkStyleColor}>
                  Inicio
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/anticonceptivos"
                  style={linkStyleColor}
                >
                  Articulos
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/anticonceptivos"
                  style={linkStyleColor}
                >
                  Sobre Nosotros
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/anticonceptivos"
                  href="#"
                  style={linkStyleColor}
                >
                  Jugar
                </Nav.Link>
              </Nav>
              <Nav className="justify-content-end">
                <Button
                  href="#"
                  variant="outline-success"
                  style={linkStyle}
                  className="ms-2"
                >
                  Iniciar Sesión
                </Button>
                <Button
                  variant="outline-success"
                  href="#"
                  style={linkStyle}
                  className="ms-2"
                >
                  Registrarse
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
