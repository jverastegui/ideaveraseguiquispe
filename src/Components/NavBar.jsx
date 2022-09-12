import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
      <div className="container-fluid">

        <Link className="navbar-brand" aria-current='page' to={'/'}>ElectroShop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" aria-current='page' to={'/'}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/Categoria/1'}>ElectroDomestico</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/Categoria/2'}>Hombre</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/Categoria/3'}>Mujer</Link>
            </li>
          </ul>
          <form className="d-flex" >
            <CartWidget></CartWidget>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
