import "./Header.css";
import React from "react";
export default function Navbar() {
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <a className="navbar-brand" href="/">
            <i className="fas fa-car-side"></i> Autoservice El Galpón
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-cat"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Sobre nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="fas fa-user-circle"></i> Ingresar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <img src={require("../../Images/Header.jpg")} alt="header" />
    </header>
  );
}
