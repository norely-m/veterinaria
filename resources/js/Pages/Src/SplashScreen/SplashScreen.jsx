import React from 'react';
import './SplashScreen.css'; 
import logo from '../../../img/logoV.jpeg';

function SplashScreen() {
  return (
    <div className="splash-screen">
      <img className='splash-logo' src={logo} alt='logotipo'/>
      <h1 className="splash-Titulo"><b><i>Veterinaria "El gran Danés"</i></b></h1>
    </div>
  );
}

export default SplashScreen;