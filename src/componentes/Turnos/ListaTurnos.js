import React from 'react';
import EstilosTurnos from "./EstilosTurnos.css"

const ListaTurnos = ({ turnos }) => {
  return (
    <div className="col-md-6">
      <h2 id="administra" className="tituloCitas">TURNOS</h2>
      <ul className="list-group">
        {turnos.map(turno => (
          <li key={turno.id} className="lista-citas">
            {/* Mostrar los datos del turno */}
            <p><strong>Cliente:</strong> {turno.cliente}</p>
            <p><strong>Peluquero:</strong> {turno.peluquero}</p>
            <p><strong>Teléfono:</strong> {turno.telefono}</p>
            <p><strong>Fecha:</strong> {turno.fecha}</p>
            <p><strong>Hora:</strong> {turno.hora}</p>
            <p><strong>Indicación:</strong> {turno.indicacion}</p>
            {/* Agregar botones de eliminar y editar si es necesario */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTurnos;
