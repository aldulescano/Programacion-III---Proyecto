import React, {Component} from 'react';
import './movieCardTopRated.css'
import {Link} from 'react-router-dom';


class MovieCardTop extends Component{
    constructor(props){
        super(props)
        this.state = {
        };
    };

    render(){
        return(
            <article className='movie-box'>
                    <figure className='figuraImagen'>
                    <Link to={`/peliculas/detalle/id/${this.props.datosPeliculasTop.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosPeliculasTop.poster_path}`} alt="Cartel de película" />
                    </Link>
                    </figure>
                    <h2 className='titulox'>{this.props.datosPeliculasTop.title}</h2> 
                <div className='efectoOculto'>
                <div>
                <p className='overviewCard'>{this.props.datosPeliculasTop.overview}</p>                   
                <Link to={`/peliculas/detalle/id/${this.props.datosPeliculasTop.id}`}>
                </Link>
                </div>-*
                <div className='buttonsCard'>
                        <button>Ver más</button>
               <Link to={`/peliculas/detalle/id/${this.props.datosPeliculasTop.id}`}>
               <button>Ir a detalle</button>
                </Link>
                <button>Agregar a Favoritos</button> 
                </div>
                </div>
                </article>
    )
            

    }

}

export default MovieCardTop;