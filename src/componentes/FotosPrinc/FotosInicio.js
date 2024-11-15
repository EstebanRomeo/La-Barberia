import React from 'react';
import './EstilosImgP.css';
import carImage from '../FotosPrinc/img/66842120_117741549546057_2555039375771661545_n.jpg'; // Añade la ruta de tu imagen de auto
import maradona from "../FotosPrinc/img/maradona.jpg"
import fondo2 from "../FotosPrinc/img/fondo2.jpg"




const FotosInicio = () => {
  return (
    <div>
    <div className="containerOf">
      <div className="textContent">
        <h2 className="title">EXPERIENCIA ÚNICA, DONDE CADA DETALLE CUENTA.</h2>
        <p className="subtitle">
        Nuestros servicios combinan técnicas tradicionales con un ambiente clásico. Disfruta de:
        </p>
        <ul>
          <li>CORTE CLÁSICO Y PERSONALIZADO : adaptado a tu estilo y personalidad.</li>
          <li>AFEITADO CON NAVAJA TRADICIONAL : precisión y suavidad en cada afeitada.</li>
          <li>AMBIENTE ACOJERDOR Y AUTENTICO : inspirado en las barberías antiguas.</li>
          <li>PRODUCTOS DE ALTA CALIDAD : para el cuidado y mantenimiento del cabello y barba.</li>
          <li>ATENCIÓN DETALLADA : cada cliente es único y nuestro servicio también.</li>
        </ul>
      </div>

      <div>
      <div className="imageContainer">
        <img className="carImage" src={carImage} alt="Car" />
      </div>

      
      </div>

      
    </div>
    <div className="statsContainer">
        <div className="statItem">
          <h3>8K+</h3>
          <p>Projects</p>
        </div>
        <div className="statItem">
          <h3>5+</h3>
          <p>Años de Expericiencia</p>
        </div>
        <div className="statItem">
          <h3>2500+</h3>
          <p>Clientes Felices</p>
        </div>
        <div className="statItem">
          <h3>99%</h3>
          <p>Satisfacción del cliente</p>
        </div>
      </div>
    </div>
  );
};

export default FotosInicio;