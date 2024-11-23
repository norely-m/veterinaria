import React from 'react';
import './Servicios.css';



import esterilizacion from '../../../img/esterilizacion.avif';
import vacunas from '../../../img/vacunas.jpg';
import consulta from '../../../img/carrucel1.jpeg';
import hospi from '../../../img/hospital.jpg';
import ultra from '../../../img/ultrasonido.jpg';
import rayosX from '../../../img/carrucel4.jpg';

//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Servicios = () => {
    return(
        <>
            <br />
            <h1 className='servicios-titulo'><i>Nuestros Servicios</i></h1>
            <br />

            <center>
            <div className='row contenedor-cards'>
                    <div className='art-card col col-md-4' >
                        <Card>
                        <Card.Img className='img-est' variant="top" src={esterilizacion}/>
                        <Card.Body>
                            <center><Card.Title><b>Esterilizaciones</b></Card.Title></center>
                            <Card.Text>
                                Esterilizacion Canina y Felina.
                                Procedimiento quirúrgico que busca prevenir la reproducción en mascotas,
                                generalmente mediante la extracción de órganos reproductivos 
                                (ovarios y útero en hembras, testículos en machos). 
                                "ESTERILIZA Y EVITA EL ABANDONO".
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        </Card>
                    </div>

                    
                    <div className='art-card col col-md-4'>
                        <Card>
                            <Card.Img  className='img-est' variant="top" src={vacunas} />
                            <Card.Body>
                            <center><Card.Title><b>Control de Vacunas</b></Card.Title></center>
                                <Card.Text>
                                    Un control adecuado de vacunas es fundamental para prevenir 
                                    enfermedades graves, evitar contagios y garantizar el bienestar 
                                    general de la mascota.
                                </Card.Text>
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <br />
                
                <div className='row contenedor-cards'>
                    <div className='art-card col col-md-4'>
                        <Card>
                        <Card.Img  className='img-est' variant="top" src={consulta} />
                        <Card.Body>
                            <center><Card.Title><b>Consulta General</b></Card.Title></center>
                            <Card.Text>
                                Se realiza un examen físico completo que incluye la revisión de ojos,
                                oídos, piel, pelaje, peso y sistema respiratorio y cardiovascular.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        </Card>
                    </div>
                
                <div className='art-card col col-md-4'>
                    <Card>
                    <Card.Img  className='img-est' variant="top" src={hospi} />
                    <Card.Body>
                        <center><Card.Title><b>Hospitalizacion</b></Card.Title></center>
                        <Card.Text>
                            Durante la hospitalización, los animales son vigilados 
                            por veterinarios y técnicos, quienes administran medicamentos, 
                            fluidos intravenosos y otros cuidados necesarios. 
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
                </div>
            </div>
            </center>
                <br />

            <div className='row contenedor-cards'>
                <div className='art-card col col-md-4'>
                    <Card>
                    <Card.Img  className='img-est' variant="top" src={ultra} />
                    <Card.Body>
                        <center><Card.Title><b>Ultrasonidos</b></Card.Title></center>
                        <Card.Text>
                            Es una técnica de diagnóstico por imagen no invasiva que permite
                            observar en detalle los órganos internos de una mascota, como el hígado,
                            riñones, vejiga, corazón y otros tejidos blandos.
                        </Card.Text>
                        {/*<Button variant="primary">Go somewhere</Button>*/}
                    </Card.Body>
                    </Card>
                </div>

                <br />
                <div className='art-card col col-md-4'>
                    <Card>
                    <Card.Img  className='img-est' variant="top" src={rayosX} />
                    <Card.Body>
                        <center><Card.Title><b>Rayos X</b></Card.Title></center>
                        <Card.Text>
                            Este procedimiento es útil para diagnosticar fracturas, 
                            dislocaciones, anomalías óseas, enfermedades respiratorias y 
                            algunos tipos de tumores.

                            Los rayos X son rápidos y seguros, proporcionando información 
                            clave para planificar tratamientos y evaluar la salud interna 
                            sin necesidad de cirugía.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                    </Card>
                </div>
            </div>
            
            <br />
        </>
    )
};

export default Servicios;