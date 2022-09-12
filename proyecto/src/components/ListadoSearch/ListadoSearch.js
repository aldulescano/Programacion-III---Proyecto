import React, {Component} from "react";
import './ListadoSearch.css'
import { Link } from 'react-router-dom';


class ListadoSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculasEncontradas: "",
            descriptionClass: 'ocultar',
            textoMostrarDescripcion: 'Ver descripcion',
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


    render() {
        return (
            <article className='movie-box'>
                <figure className='figuraImagen'>
                    <Link to={`/peliculas/detalle/id/${this.props.datospeliculasEncontradas.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.props.datospeliculasEncontradas.poster_path}`} alt="Cartel de película" />
                    </Link>
                </figure>
                <h2 className='titulox'>{this.props.datospeliculasEncontradas.title}</h2>
                <div className='descripcionCard'>
                    <p onClick={() => this.mostrarDescripcion()} className='OverViewCard'> {this.state.textoMostrarDescripcion} </p>
                    <p className={this.state.descriptionClass}>{this.props.datospeliculasEncontradas.overview}</p>
                    <Link to={`/peliculas/detalle/id/${this.props.datospeliculasEncontradas.id}`}>
                    </Link>
                </div>
                <div className='buttonsCard'>
                    <Link to={`/peliculas/detalle/id/${this.props.datospeliculasEncontradas.id}`}>
                        <button>Ir a detalle</button>
                    </Link>
                </div>

            </article>
        )


    }

}

export default ListadoSearch;