import React, {Component} from 'react';
import './movieCard.css'
import {Link} from 'react-router-dom';


class MovieCard extends Component{
    constructor(props){
        super(props)
        this.state = {
        };
    };

    render(){
        return(
            <article className='movie-box'>
                    <figure className='figuraImagen'>
                    <Link to={`/peliculas/detalle/id/${this.props.datosPeliculasPop.id}`}><img src={`https://image.tmdb.org/t/p/w342/${this.props.datosPeliculasPop.poster_path}`} alt="Cartel de película" />
                    </Link>
                    </figure>
                <div>
                <h2 className='titulox'>{this.props.datosPeliculasPop.title}</h2> 
                <p className='overViewCard'>{this.props.datosPeliculasPop.overview}</p>                   
                <p className='toDetail'>Ir a detalle</p>
                </div>
                <div className='buttonsCard'>
                        <button>Ver más</button>
                        <button>Agregar a Favoritos</button> 
                </div>
                </article>
    )
            


    }

}

export default MovieCard;