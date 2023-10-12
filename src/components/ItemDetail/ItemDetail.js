import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card'

const ItemDetail = ({ nombre, precio, categoria, img, stock, descripcion}) => {
    return (
        <Card border="info" >
        <Card.Header> {nombre} </Card.Header>
        <Card.Body>
        <Card.Img variant="top" src={img} alt={nombre} />
          <Card.Title> ${precio} </Card.Title>
          <Card.Text>
            stock disponible: {stock}
          </Card.Text>
          <Card.Text>
            categoría: {categoria}
          </Card.Text>
          <Card.Text>
            {descripcion}
          </Card.Text>
        </Card.Body>
        
        <Card.Footer>
            <ItemCount initial={1} stock={stock} onAdd={(cantidad) => console.log('cantidad agregada')} />
        </Card.Footer>
      </Card>
    )
}

export default ItemDetail;