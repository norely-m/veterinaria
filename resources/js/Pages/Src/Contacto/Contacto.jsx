import React from 'react';
import banner from '../../../img/banner.jpeg';
import './Contacto.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Contacto = () => {
    return(
        <>
            <br />
            <h1 className='contacto-titulo'><i>Contactanos</i></h1>
            <center><img className='banner' src={banner} alt=""/></center>
            <br /><br />
        </>
    )
}
export default Contacto;