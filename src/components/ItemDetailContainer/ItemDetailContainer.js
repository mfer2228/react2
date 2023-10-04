import { useState, useEffect } from "react";
import { GetProductsById } from "../../asyncMock";
import {ItemDetail} from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const {producto, setProduct} = useState(null) 

    useEffect(() => {
        GetProductsById('1')
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    , [] })

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer