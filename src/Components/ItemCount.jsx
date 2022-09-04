import React from "react";

const ItemCount = (props) => {
    const [counts, setCount] = React.useState(props.initial);
    function Counter(type) {
        if (type && counts < props.stock) {
            setCount(counts + 1);
        } else if (!type && counts > props.initial) {
            setCount(counts - 1);
        }
    }
    return (
        <div className="row">
            <div className="col-md-5">
                <div className="input-group">
                    <button className="btn btn-outline-secondary" onClick={() => { Counter(true) }} type="button" id="btnIncrementar">+</button>
                    <input type="number" style={{textAlign:'center'}} max={props.stock} readOnly={true} min={props.initial} className="form-control" value={counts} />
                    <button className="btn btn-outline-secondary" onClick={() => { Counter(false) }} type="button" id="btnDecrementar">-</button>
                </div>
                <div className="d-grid gap-2 pt-1">
                    <button className="btn btn-outline-secondary" disabled={props.stock<=0} onClick={() => { props.onAdd(counts); }} type="button" id="btnAgregar">Agregar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;