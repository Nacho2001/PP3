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
import "../estilos-componentes/AccessibilityButton.css";

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
    setShow,
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
  };

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
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
    backgroundColor: theme === "dark" ? "#00a884" : "transparent",
    borderRadius: "30px",
    transition: "transform 0.3s ease",
    transform: theme === "dark" ? "translateX(0)" : "translateX(100%)",
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
              onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
            >
              <div className="slider" style={activeSliderStyle}></div>
              <div
                style={{
                  ...toggleButtonStyle,
                  color: theme === "dark" ? "#fff" : "#000",
                }}
              >
                Oscuro
              </div>
              <div
                style={{
                  ...toggleButtonStyle,
                  color: theme === "light" ? "#000" : "#9e9e9e",
                }}
              >
                Claro
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
                On
              </div>
              <div
                style={{
                  ...toggleButtonStyle,
                  color: simplifiedNav ? "#fff" : "#9e9e9e",
                }}
              >
                Off
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default AccessibilityButton;