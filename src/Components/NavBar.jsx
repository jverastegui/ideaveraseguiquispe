import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
    <div className="container-fluid">
      <a className="navbar-brand">ElectroShop</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" >Tv</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" >Smart Phone</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Lavadora
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" >LG</a></li>
              <li><a className="dropdown-item" >Sansumg</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" >Todos</a></li>
            </ul>
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
