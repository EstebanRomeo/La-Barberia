import React from 'react'
import EstilosImgP from "./EstilosImgP.css"
import ftInicio1 from "../FotosPrinc/img/ftInicio1.jpg"
import ftInicio2 from "../FotosPrinc/img/ftInicio2.jpg"

const FotosInicio = () => {
  return (
    <div className='containerOf'>
      <div className='continerOf2'>
     <table>
      <tr>
        <td>
          <p className='tituloTabla'>La Barberia <br></br>Club de caballeros</p>
          <h1>OFRECEMOS</h1>
        </td>

      </tr>
      
      <tr>
        <td>
        <img className='imgOf1' src={ftInicio1}></img>
        <img className='imgOf2' src={ftInicio2}></img>
      </td>
      <td>
        <div className='infoTable'>
          <h4>Servicios Exclusivos:</h4>
          <p><b>Cortes de Vanguardia:</b> Nuestros barberos están al tanto de las últimas tendencias y técnicas de corte, asegurándote un estilo moderno y actualizado.</p>
             <p><b> Afeitados Clásicos:</b> Experimenta la indulgencia de un afeitado clásico con navaja, utilizando productos de alta calidad para un cuidado óptimo de la piel.</p>
            <p><b>Diseños de Barba:</b> Desde estilos refinados hasta diseños audaces, nuestros expertos barberos pueden esculpir la barba que mejor se adapte a tu personalidad y preferencias.<br></br>
             </p>
             <h4>Ambiente de Calidad:</h4>
             <p><b>Atención Personalizada:</b> Cada cliente recibe una atención personalizada, garantizando que sus necesidades y preferencias se tengan en cuenta durante cada visita.</p>
            <p><b>Bebidas Refrescantes:</b> Disfruta de una bebida fresca mientras te relajas durante tu servicio, creando una experiencia de barbería única y confortable.</p>
            <h4>Reservas Online y Programa de Fidelidad:</h4>
            <p><b>Conveniencia de Reservas:</b> Ofrecemos la opción de reservar tu cita en línea, brindándote comodidad y        flexibilidad en la programación de tu visita.<br></br></p>
            <p><b>Programa de Fidelidad:</b> Reconocemos y recompensamos la lealtad de nuestros clientes a través de un programa de fidelidad que ofrece descuentos y beneficios exclusivos.</p>
        </div>
      </td>

        
      </tr>
      
     </table>
     </div>
    </div>
  )
}

export default FotosInicio