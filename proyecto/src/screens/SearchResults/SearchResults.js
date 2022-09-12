import React, {Component} from "react";
import Buscador from "../../components/Buscador/Buscador";
import ListadoSearch from "../../components/ListadoSearch/ListadoSearch";




class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculasEncontradas: [],
        }
    }
    componentDidMount() {

let busqueda = this.props.match.params.id;
let queryStringBusqueda = window.location.search;
let queryStringObjectSearch = new URLSearchParams(queryStringBusqueda);
let query = queryStringObjectSearch.get(busqueda);
        //Buscamos los datos de las peliculas//
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4bcb2ca1395628db6221ba6939b8c9d7&language=en-US&query=${query}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(data => this.setState({
                peliculasEncontradas: data.results,
            }))
            .catch()
        }

    render() {
        return (
            <React.Fragment>
                <Buscador/>
                <h1 className='encabezado'>Resultados de tu busqueda</h1>
                <section className='cardContainer'>
                    {
                        this.state.peliculasEncontradas.map((unaPelicula, idx) => <ListadoSearch key={unaPelicula.name + idx} datospeliculasEncontradas={unaPelicula}/>)
                    }
                </section>
            </React.Fragment>
        )
    }
}


export default Search;