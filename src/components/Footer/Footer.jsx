import "./Footer.css";

import React from "react";

export default function Footer() {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-4 center-footer MB-20">
            <div>
              <h5>Autoservice El Galpón</h5>
              <p>Contáctanos en las redes</p>
              <div class="center-footer">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-whatsapp"></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-4 footer-group1">
            <div>
              <div class="mb-2">
                <h5>Productos</h5>
              </div>
              <ul class="list-unstyled">
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

          <div class="col-sm-12 col-md-4 footer-group1">
            <div>
              <div class="mb-2">
                <h5>Productos</h5>
              </div>
              <ul class="list-unstyled">
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

        <div class="row">
          <div class="col-sm-12">
            <hr />
          </div>
        </div>

        <div class="row center-footer">
          <div class="col-sm-12 MT-20">
            <div>
              <p>Copyright your website 2021</p>
            </div>
          </div>

          <div class="col-sm-12">
            <div>
              <p>Privacy Policy · Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
