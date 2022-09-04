import React from "react";

const Item = (obj) => {
    return (
        <div className="card" style={{ width: '18rem', marginRight: '20px' }}>
            <div className="card-header">
                <p className="card-title" style={{fontWeight:'bold'}}>{obj.Item.nombre}</p>
            </div>
            <img src={obj.Item.image} className="card-img-top" alt="Imagen" />
            <div className="card-body">
                <p className="card-text">{obj.Item.Descripcion}</p>
                <p className="card-title" style={{fontWeight:'bold'}}>Precio: S/. {obj.Item.precio}</p>
            </div>
            <div className="card-footer text-muted">
                <p className="card-title" style={{fontWeight:'bold'}}> Stock Disponible: {obj.Item.stock} </p>
            </div>
        </div>
    )
}

export default Item;