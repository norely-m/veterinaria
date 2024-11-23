import '../bootstrap';
import '../../css/app.css';
import React, { useState, useEffect  } from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';




/////////////////
import Home from './Src/Home/Home';
import Somos from './Src/Somos/Somos';
import Servicios from './Src/Servicios/Servicios';
import Galeria from './Src/Galeria/Galeria';
import Contacto from './Src/Contacto/Contacto';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Menu from './Src/Home/menu';
import logo from '../img/logoV.jpeg'; 
import SplashScreen from './Src/SplashScreen/SplashScreen';
// import ' ./bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,


    resolve: (name) => resolvePageComponent(`./${name}.jsx`, import.meta.glob('./**/*.jsx')),
    setup({ el, App, props }) {
       const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
       color: '#4B5563',
    },

    // resolve: name => import(`./pages/src/${name}.jsx`), // Cambia require() por import dinámico
    // setup({ el, App, props }) {
    //     createRoot(el).render(<App {...props} />);
    // },
});

/////////////////
function App() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Simula la carga de recursos (puedes ajustar el tiempo o cargar recursos reales)
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000); // 3 segundos
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <>
        <div className="App">
          {loading ? <SplashScreen /> :''}
        </div>
  
        <div className='encabezado'>
          <center><img className='logo' src={logo} alt='logotipo'/></center>
          <h1>Veterinaria</h1>
          <h1>"El gran Danés"</h1>
          <hr />
        </div>
  
        
        <br/>
  
        <div className="App">
          <Router> 
            <nav className='menu'>
              <button className="menu-toggle" onClick={toggleMenu}>
              ☰
              </button>
              <ul className={`menu-items ${isOpen ? 'open' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/somos">¿Quienes Somos?</Link></li>
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/galeria">Articulos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                
              </ul>
            </nav>
  
            <Routes>
              <Route path="/" element = {<Home/>}> </Route> 
              
              <Route path="/somos" element = {<Somos/>}> </Route>
              <Route path="/servicios" element = {<Servicios/>}> </Route>
              <Route path="/galeria" element = {<Galeria/>}> </Route>
              <Route path="/contacto" element = {<Contacto/>}> </Route>
              <Route path="/menu" element = {<Menu/>}> </Route>
            </Routes>
          </Router>
        </div>
  
        
        
        <div className='pie'>
          <h6>Nos ubicamos en la calle Melchor Ocampo, No. 217, Salvatierra, Guanajuato</h6>
          <p>19 de octubre del 2025</p>
          <p>Todos los derechos reservados</p>
        </div>
      </>
    )
  }
  export default App;

