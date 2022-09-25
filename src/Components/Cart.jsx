import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./Context";

const Cart = () => {
    const navigate = useNavigate()
    const { cart, removeItem , cartTotal, clear, TotalProductos} = useContext(CartContext);
    const total=cartTotal();
    const TotalItemsCart=TotalProductos();
    const tmr= setTimeout(()=>{
        if(TotalItemsCart===0){
            alert('No hay productos en el Carrito.')
            navigate('/');
        }
        clearTimeout(tmr);
    },1000);
   

    return (
        <>
            <h2>Detalle Compra</h2>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Eliminar</th>
                        <th>Producto</th>
                        <th>Precio Unit.</th>
                        <th>Cantidad</th>
                        <th>Sub Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(i => {
                            return <tr key={i.id}>
                                <td><button className="btn btn-primary" onClick={()=>{ removeItem(i.id)}}>Eliminar</button> </td>
                                <td>{i.nombre}</td>
                                <td>{i.precio}</td>
                                <td>{i.cantidad}</td>
                                <td>S/. {i.subtotal}</td>
                            </tr>
                        })
                    }

                    <tr>
                   
                        <td colSpan={4} style={{fontWeight:'bold'}}>Total:</td>
                        <td style={{fontWeight:'bold'}}>S/. {total}</td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={clear}>Eliminar Todos</button>
        </>

    );
}

export default Cart;