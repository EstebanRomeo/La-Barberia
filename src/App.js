import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/NavBar/Navbar';
import { Carousel } from 'bootstrap';
import Publicacion from './componentes/Publicacion/Publicacion';
import FotosInicio from './componentes/FotosPrinc/FotosInicio';
import Banner from "./componentes/Banner/Banner"
import Footer from "./componentes/Footer/Footer"
import Info from "./componentes/InfoPrinc/Info"
import Nosotros from './componentes/Nosotros/Nosotros';
import Peluqueros from './componentes/Peluqueros/Peluqueros';
import Contacto from './componentes/Contacto/Contacto';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cortes from "./componentes/Cortes/Cortes"
import Inicio from './componentes/Inicio';
import Peluquero1 from "./componentes/SecPeluqueros/Peluquero1"
import Peluquero2 from './componentes/SecPeluqueros/Peluquero2';
import Peluquero3 from './componentes/SecPeluqueros/Peluquero3';
import Turnos from './componentes/Turnos/Turnos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={ <Inicio />} />
      <Route path='/cortes' element={<Cortes/>}/>
      <Route path='/peluquero1' element={<Peluquero1/>} />
      <Route path='/peluquero2' element={<Peluquero2/>} />
      <Route path='/peluquero3' element={<Peluquero3/>} />
      <Route path='/turnos' element={<Turnos/>} />
      </Routes>
      </BrowserRouter>
     
    <Footer />
    </div>
  );
}

export default App;
