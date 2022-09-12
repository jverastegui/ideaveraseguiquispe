import React from "react";
import { Link } from "react-router-dom";

const Item = (obj) => {
    return (
        <div className="col-md-3" style={{ marginTop: '20px' }}>
            <div className="card" >
                <div className="card-header">
                    <p className="card-title" style={{ fontWeight: 'bold' }}>{obj.Item.nombre}</p>
                </div>
                <Link to={'Producto/' + obj.Item.id}> <img src={obj.Item.image} className="card-img-top" alt="Imagen" /></Link>
                <div className="card-body">
                    <p className="card-text">{obj.Item.Descripcion}</p>
                    <p className="card-title" style={{ fontWeight: 'bold' }}>Precio: S/. {obj.Item.precio}</p>
                    <Link to={"/Producto/" + obj.Item.id} className="btn btn-primary">Ver Más</Link>
                </div>
                <div className="card-footer text-muted">
                    <p className="card-title" style={{ fontWeight: 'bold' }}> Stock Disponible: {obj.Item.stock} </p>
                </div>
            </div>
        </div>

    )
}

export default Item;