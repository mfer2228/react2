import './App.css';
import BarraNav from './components/navbar/BarraNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemListContainer/itemlistcontainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <>
   <BarraNav/>

   <ItemListContainer className='m-5' epale="¡HOLAA!"/>
    Bienvenido a la prototienda
   
   <ItemDetailContainer />
   
   </>
  );
}

export default App;
