import React from "react";
import "./Carrusel.css";

const Carrusel = ({imagen1, imagen2, imagen3, imagen4}) => {
  return (
    <div class="Slider">
      <ul>
        <li>
          <a
            target="_blank"
            href="https://www.msn.com/es-co/noticias/other/no-tengo-nada-jenny-l%C3%B3pez-novia-de-jhonny-rivera-confes%C3%B3-por-qu%C3%A9-no-muestra-su-casa/ar-AA1l363J?ocid=msedgntp&cvid=fd89694ff409421d9befe9b7f2ae8b17&ei=27"
          >
            <img src={imagen1} alt="" />
            <div class="texto">
              <h1>Texto 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, id a animi numquam ex ipsa culpa accusamus beatae
                unde est magni vitae neque, nihil dolores quae sed iste! Fugiat,
                ducimus?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.msn.com/es-co/noticias/other/no-tengo-nada-jenny-l%C3%B3pez-novia-de-jhonny-rivera-confes%C3%B3-por-qu%C3%A9-no-muestra-su-casa/ar-AA1l363J?ocid=msedgntp&cvid=fd89694ff409421d9befe9b7f2ae8b17&ei=27">
            <img src={imagen2} alt="" />
            <div class="texto">
              <h1>Texto 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, id a animi numquam ex ipsa culpa accusamus beatae
                unde est magni vitae neque, nihil dolores quae sed iste! Fugiat,
                ducimus?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <img src={imagen3} alt="" />
            <div class="texto">
              <h1>Texto 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, id a animi numquam ex ipsa culpa accusamus beatae
                unde est magni vitae neque, nihil dolores quae sed iste! Fugiat,
                ducimus?
              </p>
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=pFptt7Cargc&list=RD1Rv6KCBI3vg&index=14&ab_channel=tameimpalaVEVO">
            <img src={imagen4} alt="" />
            <div class="texto">
              <h1>Texto 1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, id a animi numquam ex ipsa culpa accusamus beatae
                unde est magni vitae neque, nihil dolores quae sed iste! Fugiat,
                ducimus?
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Carrusel;
