import React from 'react';
import './EstilosInfo.css';
import fondo4 from "../FotosPrinc/img/fondo4.jpg"

const Info = () => {
  return (
    <div className='containerInfo'>
      <div className='imgPrinc'>
        <div className='degradado'></div>
        <img src={fondo4} alt='Descripción de la imagen' />
      </div>
      <div className='texto-superpuesto'>
        <h1>UN SANTUARIO DE ESTILO CLÁSICO PARA EL HOMBRE <span className='moderno'>  MODERNO</span></h1>
        <p>DESCUBRE UN ESPACIO DONDE LA TRADICIÓN SE ENCUENTRA CON LA VANGUARDIA...</p>
      </div>
    </div>
  );
}

export default Info;
