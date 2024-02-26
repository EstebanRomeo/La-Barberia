import React from 'react'
import Info from './InfoPrinc/Info'
import Nosotros from './Nosotros/Nosotros'
import Peluqueros from './Peluqueros/Peluqueros'
import Publicacion from './Publicacion/Publicacion'
import FotosInicio from './FotosPrinc/FotosInicio'
import Banner from './Banner/Banner'
import Contacto from './Contacto/Contacto'
import Footer from './Footer/Footer'




const Inicio = () => {
  return (
    <div>
      <Info />
      <Nosotros />
      <Peluqueros />
      <Publicacion />
      <FotosInicio />
      <Banner />
      <Contacto />
    </div>
  )
}

export default Inicio