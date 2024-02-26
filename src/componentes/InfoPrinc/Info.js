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
        <h1>PARA CABALLEROS DE TODAS LAS EDADES</h1>
        <p>Descubre un espacio donde la tradición se encuentra con la vanguardia...</p>
      </div>
    </div>
  );
}

export default Info;
