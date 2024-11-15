import React from 'react'
import SecPeluqEstilos from "./SecPeluqEstilos.css"
import nico from "../FotosPrinc/img/nico.jpg"
import nico1 from "../FotosPrinc/img/nico1.jpg"
import nico2 from "../FotosPrinc/img/nico2.jpg"
import nico3 from "../FotosPrinc/img/nico3.jpg"
import nico4 from "../FotosPrinc/img/nico4.jpg"
import nico5 from "../FotosPrinc/img/nico5.jpg"
import { Link } from 'react-router-dom'

const Peluquero3 = () => {
  return (
    <div className='containerBarberos'>

      <div className='containerPel1'>

        <div className='imgPel1'>
          <img src={nico}></img>
        </div>
        <div className='infoPel1'>
          <h3>Nicolas Castro</h3>
          <h5>Estilos: Esstilo 1, estilo 2, Estilo 3, Estilo 4</h5>
          <p>Nicolás Castro, el talentoso Jefe en Diseños de nuestra barbería, personifica la creatividad y la originalidad en el mundo del estilismo masculino. Como Director Creativo, Nicolás lidera con una visión innovadora, llevando la expresión artística a nuevos niveles.
          Con una pasión evidente por los diseños audaces, Nicolás se especializa en esculpir creaciones únicas que destacan la individualidad de cada cliente. Su destreza en el diseño de barbas y patillas refleja su habilidad para fusionar la técnica con la expresión artística.
          Además de su enfoque vanguardista, Nicolás Castro es reconocido por su compromiso con la perfección y su capacidad para transformar conceptos en realidad. Su liderazgo en el equipo de diseño ha consolidado nuestra reputación como un referente en innovación dentro del mundo de la barbería.
          Descubre la genialidad de Nicolás Castro en "La Barberia" y sumérgete en una experiencia donde la creatividad y la maestría se unen para crear diseños que trascienden las expectativas convencionales.</p>
          <Link to="/turnos">
          <button class="comic-button7">Pedir Turno</button>
          </Link>

          </div>
        </div>

      <div className='cortePel1'>
        <div class="card5">
          <img src={nico1} alt="Card Image" class="card__image5"></img>
          <div class="card__content5">
          <p class="card__title5">Card Title</p>
          <p class="card__description5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>


        <div class="card5">
          <img src={nico2} alt="Card Image" class="card__image5"></img>
          <div class="card__content5">
          <p class="card__title5">Card Title</p>
          <p class="card__description5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>

        <div class="card5">
          <img src={nico3} alt="Card Image" class="card__image5"></img>
          <div class="card__content5">
          <p class="card__title5">Card Title</p>
          <p class="card__description5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>

        <div class="card5">
          <img src={nico4} alt="Card Image" class="card__image5"></img>
          <div class="card__content5">
          <p class="card__title5">Card Title</p>
          <p class="card__description5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>

        <div class="card5">
          <img src={nico5} alt="Card Image" class="card__image5"></img>
          <div class="card__content5">
          <p class="card__title5">Card Title</p>
          <p class="card__description5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>


      



      </div>

    </div>
  )
}

export default Peluquero3