import React, {Component} from 'react';
import Form from '../../components/Form/Form';
import MovieCard from '../../components/MovieCard/MovieCard';

let popularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&page=1"

class VerTodas extends Component{
    constructor(props){
        super(props);
        this.state={
            peliculasPopulares:[],
            

        }
    }

    componentDidMount(){
     
    fetch(popularMovies)
            .then( res => res.json())
            .then( data => this.setState({
                peliculasPopulares: data.results,
               
            }))
            .catch()
        }

     filtrarPelis(textoAFiltrar){
            let pelisFiltradas = this.state.peliculasPopulares.filter( peli => peli.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))
            this.setState({
                peliculasPopulares: pelisFiltradas,
            })
        }

    render(){
        return(
            <React.Fragment>
               <Form filtrarPelis={(textoABuscar)=>this.filtrarPelis(textoABuscar)}/>
               <section className='cardContainer'>
                    { 
                        this.state.peliculasPopulares.map( (unaPelicula, idx) => <MovieCard key={unaPelicula.name+idx} datosPeliculasPop={unaPelicula}/>)
                    }
                </section>
            </React.Fragment>
        )
    }

}


export default VerTodas;