import React, {Component} from "react";
import Buscador from "../../components/Buscador/Buscador";
import ListadoSearch from "../../components/ListadoSearch/ListadoSearch";

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculasEncontradas: [],
            busqueda: this.props.match.params.title,
            loading: true
        }
    }

    componentDidMount() {
        //Buscamos los datos de las peliculas//
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&query=${this.state.busqueda}&page=1&include_adult=true`)
            .then(res => res.json())
            .then(data => this.setState({
                peliculasEncontradas: data.results,
                loading: false
            }))
            .catch()
    };

    componentDidUpdate() {
        if (this.state.busqueda !== this.props.match.params.title) {
            //Buscamos los datos de las peliculas//
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&query=${this.props.match.params.title}&page=1&include_adult=true`)
                .then(res => res.json())
                .then(data => this.setState({
                    peliculasEncontradas: data.results,
                    busqueda: this.props.match.params.title,
                    loading: false
                }))
                .catch()
        }

        return
    };

    render() {
        console.log(this.state.peliculasEncontradas);
        return (
            <React.Fragment>
                <Buscador/>
                {
                    this.state.loading ? 
                    <h1>Loading</h1>
                    :
                    <>
                        <h1 className='encabezado'>Resultados de tu busqueda</h1>
                        <section className='cardContainer'>
                            {
                                this.state.peliculasEncontradas.length !== 0 ? 
                                this.state.peliculasEncontradas.map((unaPelicula, idx) => <ListadoSearch key={unaPelicula.title + idx} datospeliculasEncontradas={unaPelicula}/>)
                                : 
                                <h1>No se encontraron resultados</h1>
                            }
                        </section>
                    </>
                }
            </React.Fragment>
        )
    }
}


export default Search;