import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Components/Cart';

function App() {
  return (
    <div className='container-fluid py-2' style={{ marginTop: '60px' }}>
     <BrowserRouter>
     <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>} />
        <Route exact path='/category/:id' element={<ItemListContainer/>} />
        <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
        <Route exact path='/cart' element={<Cart/>} />
      </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
