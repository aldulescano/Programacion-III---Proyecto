import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './header.css';


function Header(){
    const location = useLocation();
    const path = location.pathname;

    return (
        <nav>
            <ul className="main-nav">
                <Link to="/"><div className={path === '/' ? 'show' : 'normal'}>Home</div></Link>
                <Link to="/peliculas"> <div  className={path === '/peliculas' ? 'show' : 'normal'}>Ver Todas</div></Link>
                <Link to="/peliculas/favoritos"><div  className={path === '/peliculas/favoritos' ? 'show' : 'normal'}>Favoritos</div></Link>
            </ul>
        </nav>
    )
}

export default Header;