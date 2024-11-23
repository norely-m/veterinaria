import React from 'react';
import { Card } from 'react-bootstrap';
//import '../Servicios/Servicios.css';
import './Galeria.css'
import collar from '../../../img/Collar_protector.jpg';
import dogChow from '../../../img/dogChow.webp';
import juguete1 from '../../../img/juguetes.jpg';
import juguete2 from '../../../img/juguete2.jpg';
import alimentoP from '../../../img/pedigree.avif';
import alimentoG from '../../../img/minino.webp';

function Servicios() {
  return (
    <>
        <br />
            <h1 className='articulo-titulo'><i>Articulos que puedes conseguir</i></h1>
        <br />

        <div className='row contenedor-cards'>
            <div className='art-card col col-md-4' >
                <Card>
                    <Card.Img className='img-est' variant="top" src={collar}/>
                        <Card.Body>
                            <center><Card.Title><b>Protector Band</b></Card.Title></center>
                            <Card.Text>
                            Collar antiparasitario de liberación prolongada que contiene deltametrina,
                            un piretroide sintético con propiedades acaricidas e insecticidas
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                </Card>
            </div>

                    <div className='art-card col col-md-4'>
                        <Card>
                            <Card.Img  className='img-est' variant="top" src={dogChow} />
                            <Card.Body>
                            <center><Card.Title><b>Dog Chow</b></Card.Title></center>
                                <Card.Text>
                                Es una excelente fuente de proteínas y aminoácidos esenciales que ayuda a 
                                fortalecer y mantener los músculos de su mascota. 
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                </div>
        </div>

                <br />

        <div className='row contenedor-cards'>
                    <div className='art-card col col-md-4' >
                        <Card>
                        <Card.Img className='img-est' variant="top" src={juguete1}/>
                        <Card.Body>
                            <center><Card.Title><b>Juguetes</b></Card.Title></center>
                            <Card.Text>
                            Proporcionan una ayuda para tu perro, sirven para satisfacer su 
                            instinto de caza, evitar que muerda objetos de la casa, para reforzar 
                            su mandíbula y para mantener sus dientes sanos.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        </Card>
                    </div>

                    <div className='art-card col col-md-4'>
                        <Card>
                            <Card.Img  className='img-est' variant="top" src={juguete2} />
                            <Card.Body>
                            <center><Card.Title><b>Juguetes</b></Card.Title></center>
                                <Card.Text>
                                Son una forma saludable de mantener a las mascotas entretenidas y satisfacer sus necesidades de masticación.
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <br />

                <div className='row contenedor-cards'>
                    <div className='art-card col col-md-4' >
                        <Card>
                        <Card.Img className='img-est' variant="top" src={alimentoP}/>
                        <Card.Body>
                            <center><Card.Title><b>Alimento para Perro</b></Card.Title></center>
                            <Card.Text>
                            Una gama completa de alimentos secos, húmedos y botanas para perros de 
                            todas las formas y tamaños.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        </Card>
                    </div>

                    <div className='art-card col col-md-4'>
                        <Card>
                            <Card.Img  className='img-est' variant="top" src={alimentoG} />
                            <Card.Body>
                            <center><Card.Title><b>Alimento para Gato</b></Card.Title></center>
                                <Card.Text>
                                Minino la formula tiene 30% de proteína altamente digestible y 
                                la combinación exacta de ingredientes que tu minino requiere en 
                                todas las etapas de su vida. Elaborada con pollo y pescado para 
                                darle un sabor irresistible.
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            <br />
    </>
  );
}

export default Servicios;