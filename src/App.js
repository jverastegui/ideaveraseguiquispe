

import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';


const ListaProducto = [
  { id: 1, Descripcion: 'Tv LG 50 pulgadas', precio: '2000' },
  { id: 2, Descripcion: 'Refrigeradora Sansumg', precio: '1500' },
  { id: 3, Descripcion: 'Lavadora LG', precio: '1700' },
  { id: 4, Descripcion: 'Licuadora LG', precio: '300' },
  { id: 5, Descripcion: 'Play Station 5', precio: '2500' }
];


function App() {
  return (
    <div>
      <NavBar />
      <div className='container' style={{ marginTop: '60px' }}>
        
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Productos</h5>
            <ItemListContainer obj={ListaProducto} />
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
