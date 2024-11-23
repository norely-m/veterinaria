import React from "react";
import './Home.css';
import carrucel0 from '../../../img/carrucel0.png';
import carrucel1 from '../../../img/carrucel1.jpeg';
import carrucel2 from '../../../img/carrucel2.jpg';
import carrucel3 from '../../../img/carrucel3.jpg';
import carrucel4 from '../../../img/carrucel4.jpg';



import { Carousel } from 'react-bootstrap';


const Carrusel = () => {
  return (
    <>
        <div>
            <br></br>
            <h1 className="titulo-home">Bienvenidos</h1>
         </div>


        <center>
            <div>
                <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                    className="carrucel"
                    src={carrucel2} 
                    alt="local"
                    />
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item interval={3000}>
                    <img
                    className="carrucel"
                    src={carrucel1} 
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img
                    className="carrucel"
                    src={carrucel0} 
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item interval={3000}>
                    <img
                    className="carrucel"
                    src={carrucel3} 
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                    <img
                    className="carrucel"
                    src={carrucel4} 
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>


                </Carousel>

                <br></br>
            </div>
        </center>

        {/* <video width="25%" controls >
            <source src={`${process.env.PUBLIC_URL}/veterinaria.mp4`} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
        </video> */}

        
    </>
  );
};
export default Carrusel;