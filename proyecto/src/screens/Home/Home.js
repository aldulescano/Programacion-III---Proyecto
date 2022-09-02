import React, {Component} from 'react';
import './home.css'
import MovieCard from '../components/MovieCard/MovieCard';
import Header from '../components/Header/Header'

class Home extends Component{
    constructor(){
        super()
        this.state={
        }
    }

    render(){
        return(
            <React.Fragment>
                <h1>¡Conocé las películas en cartelera!</h1>
                    <MovieCard/>
                    <MovieCardTopRated/>
            </React.Fragment>
        )
    }

}


export default Home;