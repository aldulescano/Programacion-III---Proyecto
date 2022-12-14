import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';


function Header(){
    // const location = useLocation();
    // const path = location.pathname;

    return (
        <nav>
            <ul className="main-nav">
                <Link to="/">
                    <img src='/img/logo.png' alt='logo'/>
                </Link>
                <Link to="/" id='homeNav'>Home</Link>
                <Link to="/peliculas/populares">Películas Populares</Link>
                <Link to="/peliculas/top_rated">Películas Top Rated</Link>
                <Link to="/peliculas/favoritos">Favoritos</Link>
            </ul>
        </nav>
    )
}

export default Header;