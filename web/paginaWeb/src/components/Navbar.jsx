import React from 'react'; 
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbars() {
  const linkStyleColor = {
    color: "rgba(0, 158, 115, 1)"
  }
  const linkStyle = {
    color: "rgba(33, 150, 243, 1)"
  }
    return (
    <>
      <Navbar bg="white" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="https://www.argentina.gob.ar/justicia/derechofacil/leysimple/educacion-sexual" style={linkStyleColor}>ESI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={linkStyleColor}>Inicio</Nav.Link>
            <Nav.Link href="#features" style={linkStyleColor}>Articulos</Nav.Link>
            <Nav.Link href="#pricing" style={linkStyleColor}>Sobre Nosotros</Nav.Link>
            <Nav.Link href="#" style={linkStyleColor}>Jugar</Nav.Link>
          </Nav>

          <Nav>
            <Button href='#' variant='outline-success' style={linkStyle} className="ms-2">Inicar Sesion</Button>
            <Button variant="outline-success" href="#" style={linkStyle} className="ms-2">Registrarse</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}