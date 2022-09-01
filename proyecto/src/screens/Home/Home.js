import React, {Component} from 'react';
import './home.css'
import MovieCard from '../../components/MovieCard/MovieCard';

class Home extends Component{
    constructor(){
        super()
        this.state={
        }
    }

    render(){
        return(
            <React.Fragment>
                <h1>Películas en cartelera</h1>

                <section>
                    <MovieCard/>
                </section>
            </React.Fragment>
        )
    }

}


export default Home;