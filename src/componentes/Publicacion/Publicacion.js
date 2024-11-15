import React from 'react';
import EstilosPublicacion from "./EstilosPublicacion.css"
import facu2 from "../FotosPrinc/img/facu2.jpg"


const Publicacion = () => {
  return (
<div className='publContainer'>
<section className="services">
      <h1>SERVICIOS</h1>
      <div className="services-container">
        <div className="service-card">
          <div className="service-icon"><img src='https://vantaamerica.com/wp-content/uploads/2019/09/2.jpg'></img></div>
          <h3>CORTE CLÁSICO</h3>
          <h4>$8000</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
          <button class="comic-button">RESERVAR</button>
        </div>
        <div className="service-card">
          <div className="service-icon"><img className='barba' src='https://png.pngtree.com/png-clipart/20230801/original/pngtree-illustration-of-barber-razor-isolated-on-white-background-picture-image_7731312.png'></img></div>
          <h3>BARBA</h3>
          <h4>$6000</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
          <button class="comic-button">RESERVAR</button>
        </div>
        <div className="service-card">
          <div className="service-icon"><img className='tradicional' src='https://static.vecteezy.com/system/resources/thumbnails/026/493/371/small/shaving-brush-and-mug-ink-sketch-isolated-on-white-background-hand-drawn-illustration-vintage-style-stroke-drawing-vector.jpg'></img></div>
          <h3>AFEITADO TRADICIONAL</h3>
          <h4>$6500</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
          <button class="comic-button">RESERVAR</button>
        </div>
        <div className="service-card">
          <div className="service-icon"><img className='afeitado' src='https://png.pngtree.com/png-vector/20240322/ourlarge/pngtree-master-barber-tshirt-design-png-image_12192058.png'></img></div>
          <h3>CORTE + BARBA</h3>
          <h4>$11000</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
          <button class="comic-button">RESERVAR</button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Publicacion;
