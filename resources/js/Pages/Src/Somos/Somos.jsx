import React from "react";
import './Somos.css';

const Somos = () =>{
    return(
        <div>
            <br></br>
            <h1 className='somos-titulo'><i>¿Quiénes somo?</i></h1>
            
            <h3><b>Misión</b></h3>
            <h6 className='somos-parrafo'>Nuestra misión: Es brindar servicios veterinarios integrales y de alta calidad,
                 priorizando el bienestar y la salud de las mascotas.</h6>
            
            <br/>

            <h3><b>Visión</b></h3>
            <h6 className='somos-parrafo'>Ser reconocidos como la veterinaria líder  destacándonos por nuestra excelencia 
                en atención médica veterinaria, innovación en servicios y un profundo compromiso
                con el bienestar animal.</h6>
            <br/>

            <h3><b>Valores</b></h3>
            <center>
                <div className='somos-card'>
                    <ul>
                        <li className='valores-item'>Compromiso</li>
                        <li className='valores-item'>Ética Profesional</li>
                        <li className='valores-item'>Innovación</li>
                        <li className='valores-item'>Cuidado y Respeto</li>
                        <li className='valores-item'>Trabajo en equipo</li>
                    </ul>
                </div>
            </center>
            <br />
        </div>
    )
}
export default Somos;