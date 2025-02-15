import React from 'react';

import Navbars from './components/Navbar';
import IndividualCarousel from './components/Carousel';
import BasicCard from './components/CardSecundary';
import BasicFooter from './components/Footer';

function App() {
  return (
    
    <div>

      <Navbars />
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <IndividualCarousel />
      </div>

      <div className="container" style={{ marginTop: '20px' }}>

        <div className="row m-4">

        <div className="col-md-3">
            <BasicCard 
              titulocard="Enfermedades" 
              texto="Acá se encontrará toda la información sobre las enfermedades de transmisión sexual."
              seccion="Ir a las Enfermedades"
            ></BasicCard>
          </div>
          <div className="col-md-3">
            <BasicCard 
              titulocard="Salud" 
              texto="Acá se encontrará toda la información sobre la salud sexual que cada uno puede tener."
              seccion="Ir a la Salud"
            ></BasicCard>
          </div>

          <div className="col-md-3">
            <BasicCard 
              titulocard="Anticonceptivos" 
              texto="Acá se encontrará toda la información sobre los anticonceptivos."
              seccion="Ir a los Anticonceptivos"
            ></BasicCard>
          </div>

          <div className="col-md-3">
            <BasicCard 
              titulocard="Derechos y responsabilidades" 
              texto="Acá se encontrará toda la información sobre los derechos y las responsabilidades."
              seccion="Ir a los Derechos "
            ></BasicCard>
          </div>

        </div>
        
      </div>


      <BasicFooter />

    </div>

  );
}

export default App;