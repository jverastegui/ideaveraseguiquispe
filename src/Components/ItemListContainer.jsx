import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../mock/products";
import ItemList from "./ItemList";


function ItemListContainer() {


  const ListaProducto = products;
  const {id} = useParams();

  const [items, setItems] = useState([]);
  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ListaProducto);
      }, 2000);
    }); 
 
    promesa.then((result) => {
      let arr_filter=result;
      if(id!=='' && id!==null && parseInt(id)>0){
        arr_filter=result.filter(x=> x.categoria.id===parseInt(id));
      }
      setItems(arr_filter);
    })


  }, [ListaProducto, id]);


  return (
    <div className="container">
      
        <ItemList lst={items}></ItemList>
     
    </div>

  );
}

export default ItemListContainer;