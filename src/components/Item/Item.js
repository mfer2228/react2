import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img, stock }) => {
    return (

    <Card border="info" >
        <Card.Header> {nombre} </Card.Header>
        <Card.Body>
        <Card.Img variant="top" src={img} alt={nombre} />
          <Card.Title> ${precio} </Card.Title>
          <Card.Text>
            stock disponible: {stock}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="primary">
          <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
          </Button>
        </Card.Footer>
      </Card>

    )
}

export default Item;