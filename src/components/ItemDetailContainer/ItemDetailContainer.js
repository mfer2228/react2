import { useState, useEffect } from "react";
import { GetProductsById } from "../../asyncMock";
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const {producto, setProduct} = useState(null) 
    const {itemId} = useParams()

    useEffect(() => {
        GetProductsById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    , [itemId] })

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer