import React from 'react'
import SecPeluqEstilos from "./SecPeluqEstilos.css"
import facu from "../FotosPrinc/img/facu.jpg"
import facu1 from "../FotosPrinc/img/facu1.jpg"
import facu2 from "../FotosPrinc/img/facu2.jpg"
import facu3 from "../FotosPrinc/img/facu3.jpg"
import facu4 from "../FotosPrinc/img/facu4.webp"

const Peluquero2 = () => {
  return (
    <div className='containerBarberos'>
      <div className='containerPel1'>

        <div className='imgPel1'>
          <img src={facu}></img>
        </div>
        <div className='infoPel1'>
          <h3>Facundo Martina</h3>
          <h5>Estilos: Esstilo 1, estilo 2, Estilo 3, Estilo 4</h5>
          <p>Facundo Martina, figura clave en la esencia de nuestra barbería, personifica la dedicación y la creatividad en cada corte. Como maestro de estilo, Facundo ha cultivado un enfoque distintivo, fusionando la elegancia clásica con las tendencias contemporáneas.
          Con una trayectoria sólida en la industria, Facundo se destaca por su habilidad para transformar el cabello en una obra de arte personalizada. Su aguda atención a los detalles y su capacidad para interpretar las preferencias individuales han convertido sus servicios en experiencias únicas y memorables.
          Además de su destreza técnica, Facundo Martina es conocido por su actitud amigable y su habilidad para crear conexiones genuinas con sus clientes. Su pasión por resaltar la autenticidad de cada persona a través de su arte lo distingue como un líder en la comunidad de la barbería.
          Explora el talento inigualable de Facundo Martina en "La Barberia" y déjate guiar por un maestro que transforma cada visita en una oportunidad para resaltar tu estilo único.</p>
          <button class="comic-button7">Pedir Turno</button>


          </div>
        </div>

      <div className='cortePel1'>
        <div class="card5">
          <img src={facu1} alt="Card Image" class="card__image5"></img>
          <div class="card__content5">
          <p class="card__title5">Card Title</p>
          <p class="card__description5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>


        <div class="card5">
          <img src={facu2} alt="Card Image" class="card__image5"></img>
          <div class="card__content5">
          <p class="card__title5">Card Title</p>
          <p class="card__description5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>

        <div class="card5">
          <img src={facu3} alt="Card Image" class="card__image5"></img>
          <div class="card__content5">
          <p class="card__title5">Card Title</p>
          <p class="card__description5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>

        <div class="card5">
          <img src={facu4} alt="Card Image" class="card__image5"></img>
          <div class="card__content5">
          <p class="card__title5">Card Title</p>
          <p class="card__description5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>

        <div class="card5">
          <img src="https://www.somosmamas.com.ar/wp-content/uploads/2018/02/cortes-de-pelo-para-hombres-6.jpg" alt="Card Image" class="card__image5"></img>
          <div class="card__content5">
          <p class="card__title5">Card Title</p>
          <p class="card__description5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>


      



      </div>

    </div>
  )
}

export default Peluquero2