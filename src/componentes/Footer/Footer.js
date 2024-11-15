import React from 'react'
import EstilosFooter from "./EstilosFooter.css"
import logo from "../FotosPrinc/img/logo23.jpeg"

const Footer = () => {
  return (
    <div className='footerContainer'>
        <hr></hr>
        <img src={logo} className='logoFooter'></img>
        <div className='infoFooter'>
          <div className='institucion'>
            <h3>INSTITUCIONAL</h3>
            <p>Quienes somos</p>
            <p>Trabajá con Nosotros</p>
            <p>Envios</p>
            <p>Venta Mayorista</p>
          </div>
          <div className='legal'>
            <h3>LEGAL</h3>
            <p>Términos y Condiciones</p>
            <p>Pregunas Frecuentes</p>
            <p>Promociones Vigentes</p>
          </div>
          <div className='servicios'>
            <h3>SERVICIOS</h3>
            <p>0810-345-2334</p>
            <p>Contáctanos</p>
            <p>Descuentos</p>
            <p>Seguimientos de envío</p>
          </div>
        </div>

      


    </div>
  )
}

export default Footer