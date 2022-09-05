import React, { Component } from 'react';
import './movieCard.css'
import { Link } from 'react-router-dom';


class MovieCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            descriptionClass: 'ocultar',
            textoMostrarDescripcion: 'Ver descripcion',
            favsLegend: 'Agregar a Favoritos'
        };
    };

    mostrarDescripcion() {
        if (this.state.descriptionClass === 'ocultar') {
            this.setState({
                descriptionClass: 'mostrar', textoMostrarDescripcion: 'Ocultar descripcion'
            })
        } else {
            this.setState({
                descriptionClass: 'ocultar', textoMostrarDescripcion: 'Ver descripcion'
            })
        }
    }


    adminFavoritos(id) {

        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if (recuperoStorage !== null) {
            let favoritosGuardados = JSON.parse(recuperoStorage);
            favoritos = favoritosGuardados

        }

        if (favoritos.includes(id)) {

            favoritos = favoritos.filter(elId => elId !== id);
            this.setState({
                favsLegend: 'Agregar a Favoritos'
            })
        }

        else {
            favoritos.push(id);
            this.setState({
                favsLegend: 'Quitar de Favoritos'
            })
        }


        let favoritosAString = JSON.stringify(favoritos);

        localStorage.setItem('favoritos', favoritosAString);

        console.log(localStorage)
    }

    render() {
        return (
            <article className='movie-box'>
                <figure className='figuraImagen'>
                    <Link to={`/peliculas/detalle/id/${this.props.datosPeliculasPop.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosPeliculasPop.poster_path}`} alt="Cartel de película" />
                    </Link>
                </figure>
                <h2 className='titulox'>{this.props.datosPeliculasPop.title}</h2>
                <div className='descripcionCard'>
                    <p onClick={() => this.mostrarDescripcion()} className='OverViewCard'> {this.state.textoMostrarDescripcion} </p>
                    <p className={this.state.descriptionClass}>{this.props.datosPeliculasPop.overview}</p>
                    <Link to={`/peliculas/detalle/id/${this.props.datosPeliculasPop.id}`}>
                    </Link>
                </div>
                <div className='buttonsCard'>
                    <Link to={`/peliculas/detalle/id/${this.props.datosPeliculasPop.id}`}>
                        <button>Ir a detalle</button>
                    </Link>
                    <button onClick={() => this.adminFavoritos(this.props.datosPeliculasPop.id)}>{this.state.favsLegend}</button>
                </div>

            </article>
        )


    }

}

export default MovieCard;