import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

 
    const {addItem} = useContext(CartContext);

    const onAdd=(quantityToAdd)=>{
        addItem(item, quantityToAdd);
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