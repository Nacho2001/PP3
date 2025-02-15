import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/Img_1.jpg';
import Image2 from '../assets/Img_2.jpg';
import Image3 from '../assets/Img_3.jpg';
import image4 from '../assets/Img_4.jpg';
import Menulateral from './Menu-lateral';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardPrimary from './CardPrimary';

function IndividualCarousel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height:'100vh', justifyContent: 'center', gap: '30px' }}>
    <CardPrimary />
      <Carousel style={{ width: '50%' }}>
      <Carousel.Item interval={1000}>
        <img
          style={{ width: '100%', height: 'auto' }} // Establecer tamaño fijo
          src={image4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          style={{ width: '100%', height: 'auto' }} // Establecer tamaño fijo
          src={Image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: '100%', height: 'auto' }} // Establecer tamaño fijo
          src={Image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    </div>
    
  );
}

export default IndividualCarousel;