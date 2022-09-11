import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
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

                <ItemCount stock={item.stock} initial={1} onAdd={(count) => { console.log(count); }}></ItemCount>
            </div>
        </div>
    );
};

export default ItemDetail;