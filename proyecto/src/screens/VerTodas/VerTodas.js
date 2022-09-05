import React, {Component} from 'react';
import Form from '../../components/Form/Form';
import MovieCard from '../../components/MovieCard/MovieCard';
import './verTodas.css';

let popularMovies = "https://api.themoviedb.org/3/movie/popular?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&page=1"

class VerTodas extends Component{
    constructor(props){
        super(props);
        this.state={
            peliculasPopulares:[],
            nextPage:''  
        }
    }

    componentDidMount(){
     
    fetch(popularMovies)
            .then( res => res.json())
            .then( data => this.setState(
            {
                peliculasPopulares: data.results,
                nextPage: data.page,
                
            }))
            .catch()
        }
    cargarMas(){
            let url = `https://api.themoviedb.org/3/movie/popular?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&page=${this.state.nextPage + 1}`;
            fetch(url)
                .then(res => res.json())
                .then(data => this.setState(
                    {  peliculasPopulares: data.results.concat(this.state.peliculasPopulares),
                        nextPage:data.page + 1,
                    }
                ))
                .catch( error => console.log(error))
                
        }

     filtrarPelis(Filtro){
            let pelisFiltradas = this.state.peliculasPopulares.filter( peli => peli.title.toLowerCase().includes(Filtro.toLowerCase()))
            this.setState({
                peliculasPopulares: pelisFiltradas,
            })
        }

    render(){
        return(
            <React.Fragment>
               <Form filtrarPelis={(Filtro)=>this.filtrarPelis(Filtro)}/>
               <section className='cardContainer'>
                    { 
                    this.state.peliculasPopulares.length === 0 ?
                    <div class="gif"><img src="/img/cargando-loading.gif" class="tenor-gif-embed" alt="chica cargando"/><p>Cargando...</p><p>O quizas no tenemos lo que buscas :(</p></div> :
                        this.state.peliculasPopulares.map( (unaPelicula, idx) => <MovieCard key={unaPelicula.name+idx} datosPeliculasPop={unaPelicula}/>)
                    }
                </section>
                <button className='cargar' type="button" onClick={ ()=>this.cargarMas()}>Cargar más películas</button>
            </React.Fragment>
        )
    }
}


export default VerTodas;