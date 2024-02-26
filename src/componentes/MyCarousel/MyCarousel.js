import Carousel from 'react-bootstrap/Carousel';
import EstilosMyCarousel from "./EstilosMyCarousel.css"

function MyCarousel() {
  return (
    <div className='MyCarousel'>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="ImgMyCarousel"
            src="https://www.nosotras13.cl/sites/default/files/styles/manualcrop_740x415/public/mujer13/field-image/cortes-pelo-temporada.jpg?h=260132c0&itok=IC4NEioa"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="ImgMyCarousel"
            src="https://www.nosotras13.cl/sites/default/files/styles/manualcrop_740x415/public/mujer13/field-image/cortes-pelo-temporada.jpg?h=260132c0&itok=IC4NEioa"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="ImgMyCarousel"
            src="https://www.nosotras13.cl/sites/default/files/styles/manualcrop_740x415/public/mujer13/field-image/cortes-pelo-temporada.jpg?h=260132c0&itok=IC4NEioa"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
