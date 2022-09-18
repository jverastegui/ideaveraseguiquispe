import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

    const [items, setItemCart] = useState([]);

    const onAdd=(quantityToAdd)=>{
        items.push({...item,quantity: quantityToAdd});
        setItemCart(items);
        console.log(items);
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <img src={item.image} alt={item.nombre} className="img-fluid" />
            </div>

            <div className="col-md-6">
                <h2>{item.nombre}</h2>
                <p>
                    <em>{item.Descripcion}</em>
                </p>
                <h4 className="pb-4 pt-2"><mark>S/. {item.precio}</mark></h4>

                <ItemCount stock={item.stock} initial={1} onAdd={onAdd}></ItemCount>
                <br/>
                <br/>
                <br/>

                <Link to={'/cart'} className="btn btn-primary col-5">Comprar Ahora</Link>

            </div>
        </div>
    );
};

export default ItemDetail;