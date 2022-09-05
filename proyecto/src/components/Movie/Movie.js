import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import MovieCardTopRated from '../MovieCardTopRated/MovieCardTopRated';

import './Movie.css'

let urlpopularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&page=1"
let urlTopRatedMovies = "https://api.themoviedb.org/3/movie/top_rated?api_key=4bcb2ca1395628db6221ba6939b8c9d7";


class Movies extends Component {
    constructor() {
        super()
        this.state = {
            peliculasPopulares: [],
            peliculasTopRated: []
        }
    }

    componentDidMount(){
    //Buscamos los datos de las peliculas mas populares
    fetch(urlpopularMovies)
            .then( res => res.json())
            .then( data => this.setState({
                peliculasPopulares: data.results,
            }))
            .catch()
    //Buscamos los datos de las peliculas Top
    fetch(urlTopRatedMovies)
            .then( res => res.json())
            .then( data => this.setState({
                peliculasTopRated: data.results,
            }))
            .catch()
        }


    render(){
        return(
            <React.Fragment>
                <h1 className='encabezado'>Películas Populares</h1>
                <section className='cardContainer'>
                    {
                        this.state.peliculasPopulares.length === 0 ?
                            <div className="gif"><img src="/img/cargando-loading.gif" className="tenor-gif-embed" alt="chica cargando" />
                                <p>Cargando...</p>
                            </div> :
                            this.state.peliculasPopulares.map((unaPelicula, idx) => <MovieCard key={unaPelicula.name + idx} datosPeliculasPop={unaPelicula} />)
                    }
                </section>
                <h1 className='encabezado'>Películas Top Rated</h1>
                <section className='cardContainer'>
                    { 
                        this.state.peliculasTopRated.map( (unaPeli, idx) => <MovieCardTopRated key={unaPeli.name+idx} datosPeliculasTop={unaPeli}/>)
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default Movies;