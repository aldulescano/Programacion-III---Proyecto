import React, {Component} from 'react';
import './home.css'
import Movie from '../../components/Movie/Movie'

class Home extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            //faltaria el formulario de busqueda interno, que va por encima de la section de movie//
            <React.Fragment>
                <h1  className="titularHome">¡Conocé las películas en cartelera!</h1>
                    <Movie/>
            </React.Fragment>
        )
    }

}


export default Home;