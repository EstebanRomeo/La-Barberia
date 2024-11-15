// Nosotros.js
import React from 'react';
import EstilosNosotros from './EstilosNosotros.css';
import facu2 from "../FotosPrinc/img/facu2.jpg";
import nico1 from "../FotosPrinc/img/nico1.jpg";
import ftInicio2 from "../FotosPrinc/img/ftInicio2.jpg";
import ftInicio1 from "../FotosPrinc/img/ftInicio1.jpg";

const Nosotros = () => {
  return (
    <div className='containerNosotros'>
      <div className='containerTextoS'>
        <div className='infoNosotros'>
          <div className='containerInfo'>
            <h1>
              MÁS DE 5 AÑOS HACIENDO <span className="highlight">FELICES</span> A NUESTROS <span className="highlight">CLIENTES</span>
            </h1>
            <p>
              Nuestra barbería nació con la misión de revivir el auténtico arte de la barbería tradicional. Inspirados en las antiguas barberías de barrio, donde cada visita era un ritual y cada corte una obra de precisión, hemos creado un espacio donde la nostalgia y el estilo se encuentran.
            </p>
            <button class="comic-button">Reserva tu cita</button>
          </div>
          <div className="imagenesSecundarias">
            <img src={facu2} className="imagenHover" alt="Cliente con corte clásico" />
            <img src={ftInicio2} className="imagenHover" alt="Estilista trabajando en cliente" />
            <img src={nico1} className="imagenHover" alt="Estilista trabajando en cliente" />
            <img src={ftInicio1} className="imagenHover" alt="Estilista trabajando en cliente" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;

