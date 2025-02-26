import Carousel from 'react-bootstrap/Carousel';
import Image2 from '../assets/Img_2.jpg';
import Image3 from '../assets/Img_3.jpg';
import image4 from '../assets/Img_4.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardPrimary from './CardPrimary';

function IndividualCarousel() {
  return (
    <div style={{display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '30px',
      flexWrap: 'wrap', 
      width: '100%',
      maxWidth: '1200px', 
      margin: 'auto', }}>
    <CardPrimary />
      <Carousel style={{ width: '80%' }}>
      <Carousel.Item interval={4000}>
        <img
          style={{ width: '100%', height: 'auto', objectFit: "cover" }}
          src={image4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          style={{ width: '100%', height: 'auto' }}
          src={Image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: '100%', height: 'auto' }}
          src={Image3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    </div>
    
  );
}

export default IndividualCarousel;