import React, {Component} from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';

class Favoritos extends Component{
    constructor(){
        super();
        this.state = {
            pelis:[] 
        }
    }

    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage)
            let pelis = [];

            favoritos.forEach(unId => {
                fetch(`https://api.themoviedb.org/3/movie/${unId}?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US`)
                    .then(res => res.json())
                    .then(data => {
                        pelis.push(data)
                        this.setState({
                            pelis : pelis
                        })
                    })
                    .catch(e => console.log(e))
            })


            console.log(pelis);
        }
        
    }
    
    render(){
        return(
            <React.Fragment>
                <h2>Favoritos</h2>
                 <section className='cardContainer'>
                    { 
                        this.state.pelis.map( (unaPelicula, idx) => <MovieCard key={unaPelicula.name+idx} datosPeliculasPop={unaPelicula}/>)
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default Favoritos;