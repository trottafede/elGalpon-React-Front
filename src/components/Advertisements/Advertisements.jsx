import "./Advertisements.css";
import React from "react";

export default function Advertisements() {
  return (
    <>
      <div id="Advertisements" className="container">
        <div className="row">
          <div className="col-2">
            <div className="Container">
              <div className="circleRed">
                <i class="fas fa-apple-alt"></i>
              </div>
            </div>
            <p>Frutas</p>
          </div>
          <div className="col-2">
            <div className="Container">
              <div className="circleRed">
                <i class="fas fa-bread-slice"></i>
              </div>
            </div>
            <p>Panaderia</p>
          </div>
          <div className="col-2">
            <div className="Container">
              <div className="circleRed">
                <i class="fas fa-pizza-slice"></i>
              </div>
            </div>
            <p>Pizzas</p>
          </div>
          <div className="col-2">
            <div className="Container">
              <div className="circleRed">
                <i class="fas fa-wine-bottle"></i>
              </div>
            </div>
            <p>Bebidas</p>
          </div>
          <div className="col-2">
            <div className="Container">
              <div className="circleRed">
                <i class="fas fa-broom"></i>
              </div>
            </div>
            <p>Limpieza</p>
          </div>
          <div className="col-2">
            <div className="Container">
              <div className="circleRed">
                <i class="fas fa-bacon"></i>
              </div>
            </div>
            <p>Fiambrería</p>
          </div>
        </div>

        <div className="container">
          <div className="row ">
            <div className="col-6">
              <div className="Container">
                <img
                  src="https://geant.vteximg.com.br/arquivos/ids/267031/d-bonobon-disco-devoto.jpg?v=637794042566100000"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6">
              <div className="Container">
                <img
                  src="https://geant.vteximg.com.br/arquivos/ids/294050/d-san-valentin-disco-2022.png?v=637791932643600000"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
