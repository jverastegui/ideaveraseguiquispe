import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context";


function CartWidget() {
  const { TotalProductos} = useContext(CartContext);
  const TotalItems=TotalProductos();

  return (
    <Link to={'/cart'} className="btn btn-outline-success" style={{display: (TotalItems===0 ? 'none' : 'block')}} >
      <i className="fa fa-cart-shopping"></i>
      <span className="position-absolute top-0 badge rounded-pill bg-danger">{TotalItems}</span>
    </Link>

  );
}

export default CartWidget;



