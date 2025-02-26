import React, { useContext } from "react";
import Img1 from "../assets/img/Img1.jpg";
import Img5 from "../assets/img/Img5.png";
import Img6 from "../assets/img/Img6.jpeg";
import Img9 from "../assets/img/Img9.jpg";
import BasicCard from "../components/CardSecundary";
import IndividualCarousel from "../components/Carousel";
import InfoESI from "../components/InfoEsi";
import { AccessibilityContext } from "../context/AccessibilityContext";
import "./Home.css"

function Home() {
  const { highContrast, contrast } = useContext(AccessibilityContext);
  return (
    <div className={`row m-4 ${highContrast ? "high-contrast" : ""}`}>
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <IndividualCarousel />
      </div>

      <div className="row m-4">
        <InfoESI />
      </div>

      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row m-4">
          <div className="col-md-3">
            <BasicCard
              img={Img9}
              titulocard="Enfermedades"
              texto="Acá se encontrará toda la información sobre las enfermedades de transmisión sexual."
              seccion="Ir a las Enfermedades"
              path="/enfermedades"
              />
          </div>
          <div className="col-md-3">
            <BasicCard
              img={Img6}
              titulocard="Salud"
              texto="Acá se encontrará toda la información sobre la salud sexual que cada uno puede tener."
              seccion="Ir a la Salud"
              path="/salud"
              />
          </div>

          <div className="col-md-3">
            <BasicCard
              img={Img1}
              titulocard="Anticonceptivos"
              texto="Acá se encontrará toda la información sobre los anticonceptivos."
              seccion="Ir a los Anticonceptivos"
              path="/anticonceptivos"
              />
          </div>

          <div className="col-md-3">
            <BasicCard
              img={Img5}
              titulocard="Derechos y responsabilidades"
              texto="Acá se encontrará toda la información sobre los derechos y las responsabilidades."
              seccion="Ir a los Derechos"
              path="/derechos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
