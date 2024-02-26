import React, { useState } from 'react';
import EstilosTurnos from "./EstilosTurnos.css"



const FormularioTurnos = ({ agregarTurno }) => {
  const [turno, setTurno] = useState({
    cliente: '',
    peluquero: '',
    telefono: '',
    fecha: '',
    hora: '',
    indicacion: '',
  });

  const handleChange = (e) => {
    setTurno({
      ...turno,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTurno(turno);
    // Restablece el estado del formulario después de agregar un turno
    setTurno({
      cliente: '',
      peluquero: '',
      telefono: '',
      fecha: '',
      hora: '',
      indicacion: '',
    });
  };

  return (
    <div className="col-md-6 agregar-turno">
      <form onSubmit={handleSubmit}>
        <legend className="mb-4">Datos del cliente</legend>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 col-form-label">Cliente:</label>
          <div className="col-sm-8 col-lg-8">
            <input type="text" name="cliente" className="form-control" placeholder="Nombre del Cliente" onChange={handleChange} value={turno.cliente} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 col-form-label">Peluquero:</label>
          <div className="col-sm-8 col-lg-8">
            <input type="text" name="peluquero" className="form-control" placeholder="Nombre del Peluquero" onChange={handleChange} value={turno.peluquero} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 col-form-label">telefono:</label>
          <div className="col-sm-8 col-lg-8">
            <input type="text" name="telefono" className="form-control" placeholder="Numero de telefono" onChange={handleChange} value={turno.telefono} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 col-form-label">Fecha:</label>
          <div className="col-sm-8 col-lg-8">
            <input type="date" name="fecha" className="form-control" placeholder="Fecha" onChange={handleChange} value={turno.fecha} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 col-form-label">Hora:</label>
          <div className="col-sm-8 col-lg-8">
            <input type="time" name="hora" className="form-control" placeholder="Hora" onChange={handleChange} value={turno.hora} />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 col-form-label">Indicación:</label>
          <div className="col-sm-8 col-lg-8">
            <textarea type="time" name="indicacion" className="form-control" placeholder="Indicación" onChange={handleChange} value={turno.indicacion} />
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success w-100 d-block">Crear Turno</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioTurnos;

