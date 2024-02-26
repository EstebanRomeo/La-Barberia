// Nosotros.js
import React from 'react';
import EstilosNosotros from './EstilosNosotros.css';
import todos from "../FotosPrinc/img/todos.jpg"

const Nosotros = () => {
  return (
    <div className='containerNosotros'>
      <div className='containerTextoS'>
        <h1 className='text-princ'>LA BARBERIA</h1>
        <h4 className='text-princ'>Club de caballeros</h4>
        <p className='infoN'>
          En las callejuelas de un pequeño pueblo, un diestro barbero decidió
          abrir las puertas de su humilde establecimiento, creando así la
          primera barbería del lugar. Su destreza con las tijeras y la navaja
          pronto atrajo a los habitantes locales, convirtiendo el salón en un
          punto de encuentro donde las historias fluyeron tan libremente como
          el corte de cabello. Con el tiempo, la barbería se convirtió en un
          refugio social, un lugar donde las generaciones se entrelazaban y las
          amistades florecían. Más que un simple servicio de cortes de cabello,
          la barbería se convirtió en un testigo silencioso de las alegrías y
          tristezas de la comunidad, manteniendo viva la tradición y la
          camaradería a lo largo de los años.
        </p>
      </div>
    </div>
  );
};

export default Nosotros;
