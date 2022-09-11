import React, { useEffect, useState } from "react";
import { products } from "../mock/products";
import ItemList from "./ItemList";


function ItemListContainer() {


  const ListaProducto = products;

  const [items, setItems] = useState([]);
  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ListaProducto);
      }, 2000);
    }); 
 
    promesa.then((result) => {
      setItems(result);
      console.log(result);
    })


  }, [ListaProducto]);


  return (
    <div className="row">
      <div className="col-md-12">
        <ItemList lst={items}></ItemList>
      </div>
    </div>

  );
}

export default ItemListContainer;