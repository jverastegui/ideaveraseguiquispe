import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';


const ListaProducto = [
  { id: 1, Descripcion: 'Tv LG 50 pulgadas', precio: '2000',stock: 10},
  { id: 2, Descripcion: 'Refrigeradora Sansumg', precio: '1500' ,stock: 3},
  { id: 3, Descripcion: 'Lavadora LG', precio: '1700',stock:0 },
  { id: 4, Descripcion: 'Licuadora LG', precio: '300',stock:5 },
  { id: 5, Descripcion: 'Play Station 5', precio: '2500',stock:20 }
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
