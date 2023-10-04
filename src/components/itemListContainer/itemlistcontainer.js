import {useState, useEfect} from 'react'
import {GetProducts} from '../../asyncMock'
import {ItemList} from '../ItemList/ItemList'

const ItemListContainer = ( {epale} ) => {
   const {producto, ponproducto} = useState([])

   useEfect ( () => {
    GetProducts()
      .then(response => {
        ponproducto 
      })
   }, [])
   
    return (
    <div>
        <h3> {epale} </h3>
        <ItemList productos={producto}/>

    </div>
    )
}

export default ItemListContainer 