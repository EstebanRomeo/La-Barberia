import React, { useState } from 'react';
import FormularioTurnos from './FormularioTurnos';
import ListaTurnos from './ListaTurnos';
import EstilosTurnos from "./EstilosTurnos.css"

const Turnos = () => {
  const [turnos, setTurnos] = useState([]);
  
  const agregarTurno = (nuevoTurno) => {
    // Asignar un ID único al nuevo turno (puedes usar una biblioteca como 'uuid')
    nuevoTurno.id = Date.now();
    setTurnos([...turnos, nuevoTurno]);
  };

  return (
    <div className="container mt-5 p-5">
      <h2 className="text-center my-5 titulo">Administrador de Turnos</h2>
      <h6 className='aviso'>(Esta es una version de prueba, proximamente se lanzara la definitiva)</h6>
      <div className="row">
        <FormularioTurnos agregarTurno={agregarTurno} />
        <ListaTurnos turnos={turnos} />
      </div>
    </div>
  );
};

export default Turnos;
