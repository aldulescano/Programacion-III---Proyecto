import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './header.css';


function Header(){
    const location = useLocation();
    const path = location.pathname;

    return (
        <nav>
            <ul className="main-nav">
                <img src='/img/logo.png' alt='logo'/>
                {/* <Link to="/"><div className={path === '/' ? 'show' : 'normal'}>Home</div></Link>
                <Link to="/peliculas"> <div  className={path === '/peliculas' ? 'show' : 'normal'}>Ver Todas</div></Link>
                <Link to="/peliculas/favoritos"><div  className={path === '/peliculas/favoritos' ? 'show' : 'normal'}>Favoritos</div></Link> */}
                <Link to="/" id='homeNav'>Home</Link>
                <Link to="/peliculas">Ver Todas</Link>
                <Link to="/peliculas/favoritos">Favoritos</Link>
            </ul>
        </nav>
    )
}

export default Header;