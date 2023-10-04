import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

const Item = ({id, nombre, precio, categoría, img, stock, descripcion}) => {
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
        <Button variant="primary">Ver detalle</Button>
        </Card.Footer>
      </Card>

    )
}