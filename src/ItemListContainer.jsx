import React from "react";


function ItemListContainer(props) {
 
  return (
    <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">Descripcion</th>
        <th scope="col">Precio</th>
      </tr>
    </thead>
    <tbody>
      {
        props.obj.map(item=>{
          return <tr>
            <td>{item.Descripcion}</td>
            <td>S/. {item.precio}</td>
          </tr>
        })
      }
    </tbody>
   </table>
  );
}

export default ItemListContainer;