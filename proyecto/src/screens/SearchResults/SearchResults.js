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


    render() {
        return (
            <React.Fragment>
                <Buscador/>
                <h1 className='encabezado'>Resultados de tu busqueda</h1>
                <section className='cardContainer'>
                    {
                        this.state.peliculasEncontradas.map((unaPelicula, idx) => <ListadoSearch key={unaPelicula.name + idx} datospeliculasEncontradas={unaPelicula} busqueda={busqueda}/>)
                    }
                </section>
            </React.Fragment>
        )
    }
}


export default Search;