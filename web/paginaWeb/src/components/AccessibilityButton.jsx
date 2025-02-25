import React, { useContext } from "react";
// Importar solo iconos que existen en la librería
import {
  Type,
  MoonFill,
  SunFill,
  HandIndex,
  PersonArmsUp,
} from "react-bootstrap-icons";
import { Button, Offcanvas, Form } from "react-bootstrap";
import { AccessibilityContext } from "../context/AccessibilityContext";

const AccessibilityButton = () => {
  const {
    theme,
    setTheme,
    contrast,
    setContrast,
    fontSize,
    setFontSize,
    simplifiedNav,
    setSimplifiedNav,
    show,
    setShow
  } = useContext(AccessibilityContext);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const changeFontSize = (size) => {
    setFontSize(size);
    document.documentElement.style.fontSize =
      size === "large" ? "120%" : size === "larger" ? "140%" : "100%";
  };

  const changeContrast = (mode) => {
    setContrast(mode);
    if (mode === "high") {
      document.body.classList.remove("high-contrast");
    } else {
      document.body.classList.add("high-contrast");
    }
  };

  const changeTheme = (theme) => {
    setTheme(theme);
    if (theme === "light") {
      document.body.style.backgroundColor = "rgb(255, 255, 255)";
      document.body.style.color = "#212529";
      document.body.classList.remove("dark-theme");
    } else if (theme === "dark") {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#e0e0e0";
      document.body.classList.add("dark-theme");
    }
  };

  const buttonStyle = {
    position: "fixed",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1000,
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  };

  const toggleContainerStyle = {
    display: "flex",
    backgroundColor: "#e9e9e9",
    borderRadius: "30px",
    padding: "4px",
    width: "200px",
    position: "relative",
    cursor: "pointer",
    marginTop: "10px",
  };

  const toggleButtonStyle = {
    width: "50%",
    padding: "8px 0",
    textAlign: "center",
    borderRadius: "30px",
    fontWeight: "bold",
    position: "relative",
    zIndex: 1,
  };

  const activeSliderStyle = {
    position: "absolute",
    width: "50%",
    height: "85%",
    backgroundColor: theme === "light" ? "#00a884" : "transparent",
    borderRadius: "30px",
    transition: "transform 0.3s ease",
    transform: theme === "light" ? "translateX(0)" : "translateX(100%)",
    top: "7.5%",
    left: 0,
  };

  const contrastActiveSliderStyle = {
    position: "absolute",
    width: "50%",
    height: "85%",
    backgroundColor: contrast === "high" ? "#f8312f" : "transparent",
    borderRadius: "30px",
    transition: "transform 0.3s ease",
    transform: contrast === "high" ? "translateX(0)" : "translateX(100%)",
    top: "7.5%",
    left: 0,
  };

  const navSliderStyle = {
    position: "absolute",
    width: "50%",
    height: "85%",
    backgroundColor: simplifiedNav ? "#00a884" : "transparent",
    borderRadius: "30px",
    transition: "transform 0.3s ease",
    transform: simplifiedNav ? "translateX(0)" : "translateX(100%)",
    top: "7.5%",
    left: 0,
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={buttonStyle}
        aria-label="Opciones de accesibilidad"
      >
        <PersonArmsUp size={24} />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Accesibilidad</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="mb-4">
            <h5 className="d-flex align-items-center">
              {theme === "light" ? (
                <SunFill className="me-2" />
              ) : (
                <MoonFill className="me-2" />
              )}{" "}
              Tema
            </h5>
            <div
              style={toggleContainerStyle}
              onClick={() => changeTheme(theme === "light" ? "dark" : "light")}
            >
              <div className="slider" style={activeSliderStyle}></div>
              <div
                style={{
                  ...toggleButtonStyle,
                  color: theme === "light" ? "#fff" : "#000",
                }}
              >
                Claro
              </div>
              <div
                style={{
                  ...toggleButtonStyle,
                  color: theme === "dark" ? "#000" : "#9e9e9e",
                }}
              >
                Oscuro
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h5 className="d-flex align-items-center">
              <Type className="me-2" /> Tamaño de texto
            </h5>
            <Form.Group>
              <Form.Check
                type="radio"
                id="fontSize-normal"
                name="fontSize"
                label="Normal"
                checked={fontSize === "normal"}
                onChange={() => changeFontSize("normal")}
              />
              <Form.Check
                type="radio"
                id="fontSize-large"
                name="fontSize"
                label="Grande"
                checked={fontSize === "large"}
                onChange={() => changeFontSize("large")}
              />
              <Form.Check
                type="radio"
                id="fontSize-larger"
                name="fontSize"
                label="Muy grande"
                checked={fontSize === "larger"}
                onChange={() => changeFontSize("larger")}
              />
            </Form.Group>
          </div>

          {/* Toggle para Contraste */}
          <div className="mb-4">
            <h5 className="d-flex align-items-center">Contraste</h5>
            <div
              style={toggleContainerStyle}
              onClick={() =>
                changeContrast(contrast === "normal" ? "high" : "normal")
              }
            >
              <div className="slider" style={contrastActiveSliderStyle}></div>
              <div
                style={{
                  ...toggleButtonStyle,
                  color: contrast === "normal" ? "#fff" : "#000",
                }}
              >
                Alto
              </div>
              <div
                style={{
                  ...toggleButtonStyle,
                  color: contrast === "high" ? "#fff" : "#9e9e9e",
                }}
              >
                Normal
              </div>
            </div>
          </div>

          {/* Toggle para Navegación Simplificada */}
          <div className="mb-4">
            <h5 className="d-flex align-items-center">
              <HandIndex className="me-2" /> Navegación simplificada
            </h5>
            <div
              style={toggleContainerStyle}
              onClick={() => {
                const newValue = !simplifiedNav;
                setSimplifiedNav(newValue);
                // Agrega o quita la clase en el body para modificar la interfaz
                if (newValue) {
                  document.body.classList.add("simplified-nav");
                } else {
                  document.body.classList.remove("simplified-nav");
                }
              }}
            >
              <div className="slider" style={navSliderStyle}></div>
              <div
                style={{
                  ...toggleButtonStyle,
                  color: !simplifiedNav ? "#fff" : "#000",
                }}
              >
                Off
              </div>
              <div
                style={{
                  ...toggleButtonStyle,
                  color: simplifiedNav ? "#fff" : "#9e9e9e",
                }}
              >
                On
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Estilos CSS para el modo de alto contraste */}
      <style>
        {`
        .high-contrast {
          background-color: black !important;
          color: white !important;
        }
        
        .high-contrast a, .high-contrast button, .high-contrast .nav-link {
          background-color: black !important;
          color: yellow !important;
          border: 1px solid yellow !important;
        }
        
        .high-contrast img {
          filter: grayscale(100%) contrast(120%);
        }


        /* Estilos adicionales para tema oscuro */
        .dark-theme .card {
          background-color: #1e1e1e;
          color: #e0e0e0;
        }

        .dark-theme .navbar {
          background-color: #1e1e1e !important;
        }

        .dark-theme .nav-link {
          color: #e0e0e0 !important;
        }

        .dark-theme .btn-primary {
          background-color: #0d6efd;
          border-color: #0d6efd;
        }
          .simplified-nav nav {
  /* Ejemplo: reduce opciones o cambia el estilo del menú */
  background-color: #f0f0f0;
  font-size: 1.2rem;
}
        `}
      </style>
    </>
  );
};

export default AccessibilityButton;
