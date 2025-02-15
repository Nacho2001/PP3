import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Image1 from '../assets/img/Img2.jpg';

function BasicCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image1}/>
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{props.titulocard}</Card.Title>
        <Card.Text>
          {props.texto}
        </Card.Text>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="primary">{props.seccion}</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;