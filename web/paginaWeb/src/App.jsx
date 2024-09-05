import React from 'react';

import Navbars from './components/Navbar';
import IndividualCarousel from './components/Carousel';
import BasicCard from './components/Card';
import BasicFooter from './components/Footer';

function App() {
  return (
    
    <div>

      <Navbars></Navbars>

      <IndividualCarousel></IndividualCarousel>

      <div className="container">

        <div className="row m-4">

          <div className="col-md-3">
            <BasicCard 
              titulocard="Salud" 
              texto="Some quick example text to build on the card title and make up the bulk of the card's content."
              seccion="Ir a la Salud"
            ></BasicCard>
          </div>

          <div className="col-md-3">
            <BasicCard 
              titulocard="Anticonceptivos" 
              texto="Some quick example text to build on the card title and make up the bulk of the card's content."
              seccion="Ir a la Anticonceptivos"
            ></BasicCard>
          </div>

          <div className="col-md-3">
            <BasicCard 
              titulocard="ESI" 
              texto="Some quick example text to build on the card title and make up the bulk of the card's content."
              seccion="Ir a la ESI"
            ></BasicCard>
          </div>

          <div className="col-md-3">
            <BasicCard 
              titulocard="Trivia" 
              texto="Some quick example text to build on the card title and make up the bulk of the card's content."
              seccion="Ir a la Trivia"
            ></BasicCard>
          </div>
          

        </div>
        
      </div>


      <BasicFooter></BasicFooter>

    </div>

  );
}

export default App;