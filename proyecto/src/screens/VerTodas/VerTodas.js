import React, {Component} from 'react';
import Form from '../../components/Form/Form';
import MovieCard from '../../components/MovieCard/MovieCard';
import './verTodas.css';



class VerTodas extends Component{
    constructor(props){
        super(props);
        this.state={

            peliculasPopulares: [],
            peliculasPopulares2: [],
            nextPage:''  
        }
    }

    componentDidMount(){
        let popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&page=1`
     console.log(this.state.tipoUrl)
    fetch(popularMovies)
            .then( res => res.json())
            .then( data => this.setState(
            {
                peliculasPopulares: data.results,
                peliculasPopulares2: data.results,
                nextPage: data.page,
                
            }))
            .catch()
        }
    cargarMas(){
            let url = `https://api.themoviedb.org/3/movie/popular?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&page=${this.state.nextPage + 1}`;
            fetch(url)
                .then(res => res.json())
                .then(data => this.setState(
                    {  peliculasPopulares2: this.state.peliculasPopulares.concat(data.results),
                        peliculasPopulares: this.state.peliculasPopulares.concat(data.results),
                        nextPage:data.page + 1,
                    }
                ))
                .catch( error => console.log(error))
                
        }

     filtrarPelis(Filtro){
            let pelisFiltradas = this.state.peliculasPopulares.filter( peli => peli.title.toLowerCase().includes(Filtro.toLowerCase()))
            this.setState({
                peliculasPopulares2: pelisFiltradas,
            })
        }

    render(){
        return(
            <React.Fragment>
                <div className='arriba-todas'>
                    <Form filtrarPelis={(Filtro)=>this.filtrarPelis(Filtro)}/>
                </div>
               <section className='cardContainer'>
                    { 
                    this.state.peliculasPopulares.length === 0 ?
                    <div className="gif"><img src="/img/cargando-loading.gif" className="tenor-gif-embed" alt="chica cargando"/><p>Cargando...</p><p>O quizas no tenemos lo que buscas :(</p></div> :
                        this.state.peliculasPopulares2.map( (unaPelicula, idx) => <MovieCard key={unaPelicula.name+idx} datosPeliculasPop={unaPelicula}/>)
                    }
                </section>
                <button className='cargar' type="button" onClick={ ()=>this.cargarMas()}>Cargar más películas</button>
            </React.Fragment>
        )
    }
}


export default VerTodas;