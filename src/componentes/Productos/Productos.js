// ProductCard.js
import React from 'react';
import './ProductCard.css';
import logo from "../FotosPrinc/img/logo.jpg"; // Logo de la barbería
import producto from "../FotosPrinc/img/rojo2.png"; // Imagen del producto
import producto2 from "../FotosPrinc/img/azul.jpg"; // Imagen del producto
import producto3 from "../FotosPrinc/img/verde.jpg"; // Imagen del producto
import producto4 from "../FotosPrinc/img/verde2.jpg"; // Imagen del producto
import producto5 from "../FotosPrinc/img/negro.jpg"; // Imagen del producto

const ProductCard = () => {
  return (
    <div className='productContainer'>
        <div className="product-card">
        <img src={logo} alt="Logo" className="logo" />
        <div className="content">
            <div className="text-content">
            <p className="product-price">$12499</p>
            <h2 className="product-name">Cera Matte Fiber Pomade</h2>
            <p className="product-description">
            Arcilla texturizante de máxima fijación y acabado ultra mate.
            </p>
            </div>
            <img src={producto} alt="Indian Brown Stone" className="product-image" />
        </div>
        <button className="buy-button">CONSULTAR</button>
        <div className="background-text">Indian Brown Stone</div>
        </div>

        <div className="product-card">
        <img src={logo} alt="Logo" className="logo" />
        <div className="content">
            <div className="text-content">
            <p className="product-price">$12499</p>
            <h2 className="product-name">Cera Sheen Crystal Wax</h2>
            <p className="product-description">
            Diseñada para aquellos que buscan una fijación media sin sacrificar la naturalidad.
            </p>
            </div>
            <img src={producto2} alt="Indian Brown Stone" className="product-image" />
        </div>
        <button className="buy-button">CONSULTAR</button>
        <div className="background-text">Indian Brown Stone</div>
        </div>


        <div className="product-card">
        <img src={logo} alt="Logo" className="logo" />
        <div className="content">
            <div className="text-content">
            <p className="product-price">$12499</p>
            <h2 className="product-name">Cera The Hunter Organic Menthol Argil</h2>
            <p className="product-description">
                Upper Hold Soft Shine Texturizer para alta fijación y brillo suave.
            </p>
            </div>
            <img src={producto3} alt="Indian Brown Stone" className="product-image" />
        </div>
        <button className="buy-button">CONSULTAR</button>
        <div className="background-text">Indian Brown Stone</div>
        </div>


        <div className="product-card">
        <img src={logo} alt="Logo" className="logo" />
        <div className="content">
            <div className="text-content">
            <p className="product-price">$17000</p>
            <h2 className="product-name">Beard Serum</h2>
            <p className="product-description">
                Upper Hold Soft Shine Texturizer para alta fijación y brillo suave.
            </p>
            </div>
            <img src={producto4} alt="Indian Brown Stone" className="product-image" />
        </div>
        <button className="buy-button">CONSULTAR</button>
        <div className="background-text">Indian Brown Stone</div>
        </div>


        <div className="product-card">
        <img src={logo} alt="Logo" className="logo" />
        <div className="content">
            <div className="text-content">
            <p className="product-price">$15000</p>
            <h2 className="product-name">Polvo Texturizante Matificante</h2>
            <p className="product-description">
                Upper Hold Soft Shine Texturizer para alta fijación y brillo suave.
            </p>
            </div>
            <img src={producto5} alt="Indian Brown Stone" className="product-image" />
        </div>
        <button className="buy-button">CONSULTAR</button>
        <div className="background-text">Indian Brown Stone</div>
        </div>
    </div>
  );
};

export default ProductCard;
