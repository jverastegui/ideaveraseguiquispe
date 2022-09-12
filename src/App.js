import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container-fluid py-2' style={{ marginTop: '60px' }}>
     <BrowserRouter>
     <NavBar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>} />
        <Route exact path='/Categoria/:id' element={<ItemListContainer/>} />
        <Route exact path='/Producto/:id' element={<ItemDetailContainer/>} />
      </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
