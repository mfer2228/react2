import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import BarraNav from './components/navbar/BarraNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/itemlistcontainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className='App'>
   <BrowserRouter>
   <BarraNav/>
   <Routes>
     <Route className='m-5' epale="¡HOLAA!" path='/' element={<ItemListContainer/> } />
     <Route path='/category/:categoryId' element={<ItemListContainer/> }/>
     <Route path='/item/itemId' element={ <ItemDetailContainer/>} />
     <Route path='*' element={<h1>404 Nada de nada</h1>} />
   </Routes>
  
    Bienvenido a la prototienda

   </BrowserRouter>
   </div>
  );
}

export default App;
