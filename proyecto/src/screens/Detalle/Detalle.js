import React, { Component } from 'react';
import './detalle.css'

class Detalle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: Number(props.match.params.id),
            pelicula: {},
            favsLegend: 'Agregar a Favoritos'
        }
    }

    componentDidMount() {

        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=4bcb2ca1395628db6221ba6939b8c9d7`)
            .then(res => res.json())
            .then(data => this.setState(
                {
                    pelicula: data

                }
            ))
            .catch(error => console.log('El error fue: ' + error))
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.state.pelicula.title}</h1>
                <div className='pelicula-completa'>

                    <div className='pelicula-izquierda'>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />
                    </div>

                    <div className='pelicula-derecha'>
                        <h3>Rating: {this.state.pelicula.popularity}</h3>
                        <h3>Fecha de estreno: {this.state.pelicula.release_date}</h3>
                        <h3>Duracion: {this.state.pelicula.runtime} minutos</h3>
                        <p>{this.state.pelicula.overview}</p>
                        {/* <p>{this.state.pelicula.genres.name}</p> */}
                    </div>
                </div>
            </React.Fragment>
        )
    }

}


export default Detalle;