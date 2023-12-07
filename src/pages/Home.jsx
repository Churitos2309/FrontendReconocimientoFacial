import React from "react";
// import Carrusel from "../Components/Carrusel/Carrusel";
// import Contenedor from "../Components/Pequeño_contenedor/contenedor";



import "../pages/Style/Home.css"
import NavHome from "../Components/Header/NavHome";
import Footer from "../Components/footer/Footer";
import Carrusel from "../Components/Carrusel/Carrusel";
import Contenedorsmall from "../Components/Pequeño_contenedor/Contenedorsmall";
import imagen1 from "./Img/2.jpg"
import imagen3 from "./Img/s2.jpg"
import imagen4 from "./Img/s3.jpg"
import imagen2 from "./Img/s4.jpg"




const Home = () => {
  return (
    <body>
      <div className="nav">
        <NavHome/> 
      </div>
      <div className="main">
        <div className="izquierda">
          <Carrusel
          imagen1={imagen1}
          imagen2={imagen2}
          imagen3={imagen3}
          imagen4={imagen4}
          />
        </div>
        <div className="derecha">
          <Contenedorsmall/>
        </div>
      </div>
      <div className="footer">
       <Footer/>  
      </div>


    </body>

    // <body>
    // <main>
    //     <div class="container">
    //       <div class="almacenador">
    //         <div class="Slider">
    //           <ul>
    //             <li>
    //               <a target="_blank" href="https://www.msn.com/es-co/noticias/other/no-tengo-nada-jenny-l%C3%B3pez-novia-de-jhonny-rivera-confes%C3%B3-por-qu%C3%A9-no-muestra-su-casa/ar-AA1l363J?ocid=msedgntp&cvid=fd89694ff409421d9befe9b7f2ae8b17&ei=27">
    //                 <img src={imagen2} alt="" />
    //                 <div class="texto">
    //                   <h1>Texto 1</h1>
    //                   <p>
    //                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //                     Veritatis, id a animi numquam ex ipsa culpa accusamus beatae
    //                     unde est magni vitae neque, nihil dolores quae sed iste! Fugiat,
    //                     ducimus?
    //                   </p>
    //                 </div>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="https://www.msn.com/es-co/noticias/other/no-tengo-nada-jenny-l%C3%B3pez-novia-de-jhonny-rivera-confes%C3%B3-por-qu%C3%A9-no-muestra-su-casa/ar-AA1l363J?ocid=msedgntp&cvid=fd89694ff409421d9befe9b7f2ae8b17&ei=27">
    //                 <img src="img/s2.jpg" alt="" />
    //                 <div class="texto">
    //                   <h1>Texto 1</h1>
    //                   <p>
    //                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //                     Veritatis, id a animi numquam ex ipsa culpa accusamus beatae
    //                     unde est magni vitae neque, nihil dolores quae sed iste! Fugiat,
    //                     ducimus?
    //                   </p>
    //                 </div>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="">
    //                 <img src="img/s3.jpg" alt="" />
    //                 <div class="texto">
    //                   <h1>Texto 1</h1>
    //                   <p>
    //                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //                     Veritatis, id a animi numquam ex ipsa culpa accusamus beatae
    //                     unde est magni vitae neque, nihil dolores quae sed iste! Fugiat,
    //                     ducimus?
    //                   </p>
    //                 </div>
    //               </a>
    //             </li>
    //             <li>
    //               <a href="https://www.youtube.com/watch?v=pFptt7Cargc&list=RD1Rv6KCBI3vg&index=14&ab_channel=tameimpalaVEVO">
    //                 <img src="img/s4.jpg" alt="" />
    //                 <div class="texto">
    //                   <h1>Texto 1</h1>
    //                   <p>
    //                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //                     Veritatis, id a animi numquam ex ipsa culpa accusamus beatae
    //                     unde est magni vitae neque, nihil dolores quae sed iste! Fugiat,
    //                     ducimus?
    //                   </p>
    //                 </div>
    //               </a>
    //             </li>
    //           </ul>
    //         </div>

    //         <div class="contenedor">
    //           <div class="contenido">
    //             <h1>
    //               Contenido
    //             </h1>
    //             <p class="llll">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni alias ducimus perspiciatis, impedit a id et facilis voluptatem minus facere dolore porro dolores soluta animi nisi similique ratione mollitia? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio corporis deleniti placeat eos nobis, error sint, ratione iure odio pariatur quidem dolore dolorum nihil magni! Rerum maiores dicta nam repellat! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis pariatur minus non cumque, animi autem sunt praesentium enim obcaecati dolore! Incidunt, aspernatur minima! Possimus temporibus aspernatur voluptatem commodi animi officiis.</p>
    //           </div>
    //       </div>
    //       </div>

    //     </div>
    // </main>
    
    // <footer>
    //     <div class="arriba">
    //         <div class="primer">
    //             <div class="logos">
    //                 <img class="Logo" src="img/Logo Reconocimiento Facial - Blanco.png" alt=""/>
    //                 <img class="Logo" src="img/logoVerdeSENA.png" alt=""/>
    //             </div>
    //             <p>Todos los derechos reservados para "MARCA" </p>
    //         </div>

    //         <div class="second">
    //         <h3 class="tituls"><b>Contactenos</b></h3>
    //         <div class="abajito">
    //         <a href=""><p class="options">Escribanos</p></a>
    //         <a href=""><p class="options">reconocimientofacial@hotmail.com</p></a>  
    //         </div>
            
    //         </div>

    //         <div class="three">
    //             <h3 class="tituls"><b>Siganos</b></h3>
    //             <div class="abajito">
    //             <a href=""><p class="options">Facebook</p></a>
    //             <a href=""><p class="options">Instagram</p></a> 
    //             </div>

    //         </div>
    //     </div>

    //     <div class="abajo">
    //         <ul class="ff">
    //             <li><a class="optionse" href="">Politica y privacidad</a></li>
    //             <li><a class="optionse" href="">Términos de servicio</a></li>
    //             <li><a class="optionse" href="">Mapa del sitio</a></li>
    //             <li><a class="optionse" href="">Politica de cookies</a></li>
    //             <li><a class="optionse" href="">Preferencias de cookies</a></li>
    //             <li><a class="optionse" href="">Politica de divulgacion de vulnerabilidades</a></li>
    //         </ul>
    //     </div>
    // </footer>
    // </body>
  );
};

export default Home;
