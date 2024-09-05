import React from 'react';

import Navbars from '../components/Navbar';
import BasicFooter from '../components/Footer';
import Template from '../components/Template';
import BasicDemo from '../components/SimplesCard';
import PreviewDemo from '../components/Image';

function Anticonceptivos() {
  return (
    
    <div className="container">

      <Navbars></Navbars>

      <BasicDemo titulo="El Preservativo: Tu Aliado en la Prevención de Embarazos y Enfermedades de Transmisión Sexual"
      parrafo="El preservativo, también conocido como condón, es uno de los métodos anticonceptivos más populares y efectivos disponibles en la actualidad. Además de prevenir embarazos no deseados, el preservativo es una barrera fundamental contra las enfermedades de transmisión sexual (ETS), haciendo que su uso sea crucial para la salud sexual y reproductiva."
      />

      <PreviewDemo></PreviewDemo>

      <Template titulo="¿Cómo Funciona?" parrafo="El principio detrás del preservativo es simple pero efectivo. Es una delgada funda de látex, poliuretano o poliisopreno que se coloca sobre el pene erecto o en el interior de la vagina para recoger el semen durante la eyaculación. De esta manera, el semen no tiene contacto directo con el óvulo, lo que evita la fertilización y, por ende, el embarazo." />

      <Template titulo="1. Efectividad Anticonceptiva:" parrafo="Los preservativos son altamente efectivos cuando se usan correctamente. Aunque ningún método anticonceptivo es infalible, el preservativo tiene una tasa de eficacia significativamente alta cuando se usa de manera consistente y correcta." />

      <Template titulo="2. Prevención de ETS:" parrafo="Además de prevenir embarazos, el preservativo es una barrera eficaz contra una amplia gama de enfermedades de transmisión sexual, como el VIH, la gonorrea, la clamidia y la sífilis. Esto lo convierte en una herramienta crucial para proteger la salud sexual." />

      <Template titulo="3. Disponibilidad:" parrafo="Los preservativos están ampliamente disponibles en farmacias, supermercados y clínicas de salud, e incluso se distribuyen gratuitamente en muchos lugares. Esto los hace accesibles para personas de todas las edades y niveles socioeconómicos." />

      <Template titulo="4. Fácil de Usar:" parrafo="No se necesita una visita al médico ni una receta para adquirir preservativos, y su uso es relativamente sencillo. Con un poco de práctica, cualquiera puede aprender a colocarlo correctamente." />
      
      <Template titulo="5. Sin Efectos Secundarios Hormonales:" parrafo="A diferencia de algunos otros métodos anticonceptivos, como las píldoras anticonceptivas o los dispositivos intrauterinos (DIU), los preservativos no alteran los niveles hormonales del cuerpo. Esto los hace ideales para personas que desean evitar efectos secundarios hormonales." />  

      <BasicFooter></BasicFooter>

    </div>

  );
}

export default Anticonceptivos;