import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navbars() {
    return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="https://www.argentina.gob.ar/justicia/derechofacil/leysimple/educacion-sexual">ESI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Prueba</Nav.Link>
            <Nav.Link href="#features">Prueba</Nav.Link>
            <Nav.Link href="#pricing">Prueba</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}