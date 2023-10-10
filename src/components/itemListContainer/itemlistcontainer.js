import {useState, useEfect} from 'react'
import {GetProducts} from '../../asyncMock'
import {ItemList} from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ( {epale} ) => {
   const {productos, ponproducto} = useState([])
   
   const {categoryId} = useParams()

   useEfect ( () => {
   const asyncFunc = categoryId ? getProductsByCategory : ponproducto
   
   asyncFunc(categoryId)
    GetProducts()
      .then(response => {
        ponproducto(response)
      })
      .catch(error => {
        console.error(error)
      })
      }, [categoryId])
   
    return (
    <div>
        <h3> {epale} </h3>
        <ItemList productos={productos}/>

    </div>
    )
}

export default ItemListContainer 