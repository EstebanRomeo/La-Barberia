import React from 'react'
import EstilosContacto from "./EstilosContacto.css"

const Contacto = () => {
  return (
    <div className='containerCont'>
      
        <div className='formulario'>

            <div>
                <img className='logoC' src='https://scontent.fros8-1.fna.fbcdn.net/v/t1.6435-9/44723289_186183628975420_4652490574266368000_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=be3454&_nc_ohc=wW5aPTQEA5MAX-NPurx&_nc_ht=scontent.fros8-1.fna&oh=00_AfBNw7TpYri0dFkXCuTdhCQDa8i5Ye61DJm9w7F0HDTq4g&oe=65DE9931'></img>
            </div>
              <div className='tituloCont'>
                <h1>CONTACTO</h1>
            </div>
        <div class="form-container">
            <div class="form">
                <span class="heading">Datos</span>
                <input placeholder="Nombre" type="text" class="input"></input>
                <input placeholder="Email" id="mail" type="email" class="input"></input>
                <textarea placeholder="Mensaje" rows="10" cols="30" id="message" name="message" class="textarea"></textarea>
                <div class="button-container">
                <div class="send-button">Enviar</div>
                <div class="reset-button-container">
                    <div id="reset-btn" class="reset-button">Borrar</div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Contacto