import React from "react";
import ItemCount from './ItemCount';

const callback=(count)=>{
  console.log(count);
}

function ItemListContainer(props) {
 
  return (
    <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">Descripcion</th>
        <th scope="col">Precio</th>
        <th scope="col">Stock</th>
        <th scope="col">Cantidad</th>
      </tr>
    </thead>
    <tbody>
      {
        props.obj.map(item=>{
          return <tr key={item.id}>
            <td>{item.Descripcion}</td>
            <td>S/. {item.precio}</td>
            <td>{item.stock}</td>
            <td>  <ItemCount stock={item.stock} initial={0} onAdd={callback}  ></ItemCount></td>
          </tr>
        })
      }
    </tbody>
   </table>
  );
}

export default ItemListContainer;