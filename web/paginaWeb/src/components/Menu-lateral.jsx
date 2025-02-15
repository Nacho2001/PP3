import React from 'react'

function Menulateral() {
    return (
        <div className="d-flex">
          {/* Menú Lateral */}
          <div
            className="sidebar bg-light p-3"
            style={{ width: "250px", height: "100vh", position: "fixed", left: 0, top: 0 }}
          >
            <h4>Menú</h4>
            <ul className="list-group">
              <li className="list-group-item"><a href="#">Inicio</a></li>
              <li className="list-group-item"><a href="#">Acerca</a></li>
              <li className="list-group-item"><a href="#">Servicios</a></li>
              <li className="list-group-item"><a href="#">Contacto</a></li>
            </ul>
          </div>
    
          {/* Contenido Principal */}
          <div className="container-fluid" style={{ marginLeft: "260px", padding: "20px" }}>
            <h1>Bienvenido</h1>
            <p>Este es un ejemplo de menú lateral fijo en React.</p>
          </div>
        </div>
      );
    };
    <div>Menu-lateral</div>

export default Menulateral;