import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../assets/Img_1.jpg';
import Image2 from '../assets/Img_2.jpg';
import Image3 from '../assets/Img_3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function IndividualCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          style={{ width: '100%', height: 'auto' }} // Establecer tamaño fijo
          src={Image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          style={{ width: '100%', height: 'auto' }} // Establecer tamaño fijo
          src={Image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: '100%', height: 'auto' }} // Establecer tamaño fijo
          src={Image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualCarousel;