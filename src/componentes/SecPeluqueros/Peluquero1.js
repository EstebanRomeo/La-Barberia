import React from 'react'
import SecPeluqEstilos from "./SecPeluqEstilos.css"
import machilo from "../FotosPrinc/img/machilo.jpg"
import machilo1 from "../FotosPrinc/img/machilo1.jpg"
import machilo2 from "../FotosPrinc/img/machilo2.jpg"
import machilo3 from "../FotosPrinc/img/machilo3.jpg"
import machilo4 from "../FotosPrinc/img/machilo4.jpg"

const Peluquero1 = () => {
  return (
    <div className='containerBarberos'>

      <div className='containerPel1'>

        <div className='imgPel1'>
          <img src={machilo}></img>
        </div>
        <div className='infoPel1'>
          <h3>Maximiliano Siravegna</h3>
          <h5>Estilos: Esstilo 1, estilo 2, Estilo 3, Estilo 4</h5>
          <p>Maximiliano Siravegna, co-fundador de nuestra distinguida barbería, personifica la fusión perfecta entre la tradición y la innovación en el mundo de la belleza masculina. Con una visión vanguardista y un compromiso inquebrantable con la excelencia, Maximiliano ha sido un pionero en la evolución de la barbería contemporánea.
          Su habilidad innata para comprender las últimas tendencias y su pasión por mantener las prácticas tradicionales han dejado una huella indeleble en nuestro establecimiento. Maximiliano es reconocido por su enfoque meticuloso en cada corte y su capacidad para adaptarse a las preferencias individuales de cada cliente.
          Además de su destreza técnica, Maximiliano Siravegna es conocido por su carisma y compromiso con la satisfacción del cliente. Su visión estratégica ha contribuido significativamente al crecimiento y prestigio de nuestra barbería.
          Descubre la visión visionaria de Maximiliano Siravegna en "La Barberia" y experimenta la maestría de un líder que ha elevado los estándares de la barbería a nuevas alturas.</p>
          <button class="comic-button7">Pedir Turno</button>


          </div>
        </div>

      <div className='cortePel1'>
        <div class="card5">
          <img src={machilo1} alt="Card Image" class="card__image5"></img>
          <div class="card__content5">
          <p class="card__title5">Card Title</p>
          <p class="card__description5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>


        <div class="card5">
          <img src={machilo2} alt="Card Image" class="card__image5"></img>
          <div class="card__content5">
          <p class="card__title5">Card Title</p>
          <p class="card__description5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>

        <div class="card5">
          <img src={machilo3} alt="Card Image" class="card__image5"></img>
          <div class="card__content5">
          <p class="card__title5">Card Title</p>
          <p class="card__description5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>

        <div class="card5">
          <img src={machilo4} alt="Card Image" class="card__image5"></img>
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

export default Peluquero1