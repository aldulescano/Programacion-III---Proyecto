import React, {Component} from 'react';
import MovieCard from '../MovieCard/MovieCard';
import MovieCardTopRated from '../MovieCardTopRated/MovieCardTopRated';

import './Movie.css'

let urlpopularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&page=1"
let urlTopRatedMovies ="https://api.themoviedb.org/3/movie/top_rated?api_key=4bcb2ca1395628db6221ba6939b8c9d7";


class Movies extends Component{
    constructor(){
        super()
        this.state={
            peliculasPopulares:[],
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
                <section className='cardContainer'>
                    { 
                        this.state.peliculasPopulares.map( (unaPelicula, idx) => <MovieCard key={unaPelicula.name+idx} datosPeliculasPop={unaPelicula}/>)
                    }
                </section>
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