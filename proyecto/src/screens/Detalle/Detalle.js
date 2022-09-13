import React, { Component } from 'react';
import './detalle.css'

class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: Number(props.match.params.id),
            pelicula: {},
            generos: [],
            fav: 'Agregar a Favoritos'
        }
    }

    componentDidMount() {

        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=4bcb2ca1395628db6221ba6939b8c9d7`)
            .then(res => res.json())
            .then(data => this.setState(
                { 
                    pelicula: data,
                    generos: data.genres
                }
            ))
            .catch(error => console.log('El error fue: ' + error))

        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let favoritosArray = JSON.parse(recuperoStorage);
            favoritos = favoritosArray
        }

        if(favoritos.includes(this.state.id)){
            this.setState({
                fav: 'Quitar de favoritos'
            })
        }
    }

    funcionalidadFavoritos(id){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            let favoritosArray = JSON.parse(recuperoStorage);
            favoritos = favoritosArray
        }

        if(favoritos.includes(id)){
            favoritos = favoritos.filter(unId => unId !== id);
            this.setState({
                fav: 'Agregar a favoritos'
            })
        } else {
            favoritos.push(id);
            this.setState({
                fav: 'Quitar de favoritos'
            })
        }

        let favoritosString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favoritosString);

        console.log(localStorage);
    }

    render() {
        return (
            <React.Fragment>
                    { 
                        this.state.pelicula.title === 0 ? 
                        <div className="gif">
                            <img src="/img/cargando-loading.gif" className="tenor-gif-embed" alt="chica cargando"/>
                            <p>Cargando... O quizas no tenemos lo que buscas</p>
                        </div> 
                        : 
                        <div>
                            <h1>{this.state.pelicula.title}</h1>
                            <div className='pelicula-completa'>

                                <div className='pelicula-izquierda'>
                                    <img src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />
                                </div>

                                <div className='pelicula-derecha'>
                                    <h3>Rating: {Number(this.state.pelicula.popularity).toFixed(0)}</h3>
                                    <h3>Fecha de estreno: {this.state.pelicula.release_date}</h3>
                                    <h3>Duracion: {this.state.pelicula.runtime} minutos</h3>
                                    <ul>
                                        {this.state.generos.map((Genero, idx) => <li key={Genero.name + idx}>{Genero.name}</li>)}
                                    </ul>
                                    <p>{this.state.pelicula.overview}</p>
                                    <button onClick={() => this.funcionalidadFavoritos(this.state.id)}>{this.state.fav}</button>
                                </div>
                            </div>
                        </div>
                    }
            </React.Fragment>
        )
    }

}


export default Detalle;