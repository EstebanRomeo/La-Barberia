import React from 'react';
import EstilosPublicacion from "./EstilosPublicacion.css"

const Publicacion = () => {
  return (
<div className='publContainer'>
  <div className="card">
    <div className="container-image">
      {/* Contenido del primer SVG reemplazado por una imagen */}
      <img
        className="image-circle"
        src="https://i.pinimg.com/736x/96/49/87/964987896354604e9aa1b5a776ce685d.jpg"
        alt="Hairstyle"
      />
    </div>
    <div className="content">
      <div className="detail">
        <span>Corte</span>
        <p>$4000</p>
        <button>Info</button>
      </div>
      <div className="product-image">
        <div className="box-image">
          {/* Contenido del segundo SVG reemplazado por una imagen */}
          <img
            className="img-product"
            src="https://img2.freepng.es/20190608/pas/kisspng-portable-network-graphics-clip-art-world-beard-and-beard-png-transparent-pictures-trzcacak-rs-5cfb8ea7deec53.7669889915599899279131.jpg"
            alt="Hair Logo"
          />
        </div>
      </div>
    </div>
  </div>
 {/* Segundo item */}
  <div className="card">
    <div className="container-image">
      {/* Contenido del primer SVG reemplazado por una imagen */}
      <img
        className="image-circle"
        src="https://st5.depositphotos.com/51261150/64630/i/450/depositphotos_646304436-stock-photo-skull-horn-hipster-mustache-beard.jpg"
      />
    </div>
    <div className="content">
      <div className="detail">
        <span>Barba</span>
        <p>$2000</p>
        <button>Info</button>
      </div>
      <div className="product-image">
        <div className="box-image">
          {/* Contenido del segundo SVG reemplazado por una imagen */}
          <img
            className="img-product"
            src="https://pbs.twimg.com/profile_images/671359933447716864/2rvHM9hP_400x400.jpg"
            alt="Hair Logo"
          />
        </div>
      </div>
    </div>
  </div>

 {/* Tercer item */}
 <div className="card">
    <div className="container-image">
      {/* Contenido del primer SVG reemplazado por una imagen */}
      <img
        className="image-circle"
        src="https://img.freepik.com/vector-premium/logotipo-barberia-craneo-peluquero-barbudo-vintage-peinado-elegante-ilustracion-vectorial_195742-1301.jpg"
        alt="Hairstyle"
      />
    </div>
    <div className="content">
      <div className="detail">
        <span>Corte + Barba</span>
        <p>$6000</p>
        <button>Info</button>
      </div>
      <div className="product-image">
        <div className="box-image">
          {/* Contenido del segundo SVG reemplazado por una imagen */}
          <img
            className="img-product"
            src="https://img2.freepng.es/20180405/rse/kisspng-beard-oil-man-beard-and-moustache-5ac6a4dac714e5.4670498115229677708155.jpg"
            alt="Hair Logo"
          />
        </div>
      </div>
    </div>
  </div>
      
    </div>
  );
};

export default Publicacion;
