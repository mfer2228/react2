import "./ItemCount.css";
import { useState } from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ({stock, inicial, alAgregar}) => {

    const {cantidad, ponCantidad} = useState (inicial)

    const Dame = () => {
        if (cantidad < stock){
            ponCantidad(cantidad+1)
        }

    }

    const Toma = () => {
        if (cantidad > 1) {
            ponCantidad(cantidad-1)
        }
    }

    return (
    <div>
        <div>
            <Button variant="outline-primary" onClick={Dame}>+</Button>
            <h5>{cantidad}</h5>
            <Button variant="outline-primary" onClick={Toma}>-</Button>
        </div>
        <div>
            <Button variant="secondary" onClick={() => alAgregar(cantidad)} disabled={!stock}>
                Agregar al carrito
            </Button>
        </div>

    </div>
    )
} 

export default ItemCount