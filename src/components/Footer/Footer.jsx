import "./Footer.css";

import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4 center-footer MB-20">
            <div>
              <h5>Autoservice El Galpón</h5>
              <p>Contáctanos en las redes</p>
              <div className="center-footer">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-whatsapp"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4 footer-group1">
            <div>
              <div className="mb-2">
                <h5>Productos</h5>
              </div>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Frutas</a>
                </li>
                <li>
                  <a href="/">Verduras</a>
                </li>
                <li>
                  <a href="/">bebidas y lacteos</a>
                </li>
                <li>
                  <a href="/">raciones para animales y mascotas</a>
                </li>
                <li>
                  <a href="/">carnicería y fiambrería</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 footer-group1">
            <div>
              <div className="mb-2">
                <h5>Productos</h5>
              </div>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Frutas</a>
                </li>
                <li>
                  <a href="/">Verduras</a>
                </li>
                <li>
                  <a href="/">bebidas y lacteos</a>
                </li>
                <li>
                  <a href="/">raciones para animales y mascotas</a>
                </li>
                <li>
                  <a href="/">carnicería y fiambrería</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <hr />
          </div>
        </div>

        <div className="row center-footer">
          <div className="col-sm-12 MT-20">
            <div>
              <p>Copyright your website 2021</p>
            </div>
          </div>

          <div className="col-sm-12">
            <div>
              <p>Privacy Policy · Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
