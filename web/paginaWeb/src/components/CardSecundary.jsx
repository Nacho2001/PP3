import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function BasicCard({ img, titulocard, texto, seccion, path }) {
  const navigate = useNavigate();

  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <Card.Img variant="top" src={img} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <Card.Body style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <Card.Title style={{ textAlign: "center" }}>{titulocard}</Card.Title>
          <Card.Text style={{ width: "100%", height: "100px", overflowY: "auto" }}>
            {texto}
          </Card.Text>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="primary" onClick={() => navigate(path)}>
            {seccion}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
