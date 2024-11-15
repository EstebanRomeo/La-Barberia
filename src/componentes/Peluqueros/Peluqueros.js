import React from 'react'
import EstilosPeluq from "./EstilosPeluq.css"
import facu from "../FotosPrinc/img/facu.jpg"
import machilo from "../FotosPrinc/img/machilo.jpg"
import nico from "../FotosPrinc/img/nico.jpg"
import pel1 from "../FotosPrinc/img/pel1.jpg"
import { Link } from 'react-router-dom';
import Peluquero1 from "../SecPeluqueros/Peluquero1"



const Peluqueros = () => {
  return (
    <div className='containerPeluqueros'>
        <h1>NUESTROS PELUQUEROS</h1>
        <div className='containerPelos'>
        <div class="cardP">
        <img src={pel1} class="card__image" alt="pel1" />
        <div class="card__contentP">
            <p class="card__titleP">PELUQUERO 1</p>
            <p class="card__descriptionP">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <button class="card__buttonP">Pedir Turno</button>
            <button class="card__buttonP secondaryP">Info</button>
        </div>
        </div>

        <div class="cardP">
        <img src={machilo} alt="Haircut" class="card__image"></img>
        <div class="card__contentP">
            <p class="card__titleP">PELUQUERO 2</p>
            <p class="card__descriptionP">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <Link to="/turnos">
            <button class="card__buttonP">Pedir Turno</button>
            </Link>
            <Link to="/peluquero1">
            <button class="card__buttonP secondaryP">Info</button>
            </Link>
        </div>
        </div>

        <div class="cardP">
        <img src={facu} alt="Haircut" class="card__image"></img>
        <div class="card__contentP">
            <p class="card__titleP">PELUQUERO 3</p>
            <p class="card__descriptionP">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <Link to="/turnos">
            <button class="card__buttonP">Pedir Turno</button>
            </Link>
            <Link to="/peluquero2">
            <button class="card__buttonP secondaryP">Info</button>
            </Link>
        </div>
        </div>


        <div class="cardP">
        <img src={nico} alt="Haircut" class="card__image"></img>
        <div class="card__contentP">
            <p class="card__titleP">PELUQUERO 4</p>
            <p class="card__descriptionP">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <Link to="/turnos">
            <button class="card__buttonP">Pedir Turno</button>
            </Link>
            <Link to="/peluquero3">
            <button class="card__buttonP secondaryP">Info</button>
            </Link>
        </div>
        </div>
        </div>
        

    </div>
  )
}

export default Peluqueros