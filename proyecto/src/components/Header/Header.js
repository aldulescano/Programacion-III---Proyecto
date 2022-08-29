import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';


function Header(){

    return (
        <nav>
            <ul className="main-nav">
                <Link to="/">Home</Link>
                <Link to="/peliculas">Ver Todas</Link>
                <Link to="/peliculas/favoritos">Favoritos</Link>
            </ul>
        </nav>
    )
}

export default Header;