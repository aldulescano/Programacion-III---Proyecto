import React from 'react';
import './home.css'
import Movie from '../../components/Movie/Movie'

function Home (){
    return(
        //faltaria el formulario de busqueda interno, que va por encima de la section de movie//
        <React.Fragment>
            <h1  className="titularHome">Películas en cartelera</h1>
                <Movie/>
        </React.Fragment>
    )
}



export default Home;