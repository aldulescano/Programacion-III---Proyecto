import React, {Component} from 'react';
import './movieCard.css'
import {Link} from 'react-router-dom';


class MovieCard extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(

            <section class="movie-box">

				<figure class="movie-box_image">
                    <Link to={`/personajes/id/:id`}>
                    <img src='/img/logo.png' alt="probando" />
                    </Link>
				</figure>

				<article class="movie-box_data">
					<h2>Harry Potter</h2>
    				<p>nose</p>
					<p class="descripcion-box">blablablablablabla </p>

                    <div className='buttonsCard'>
                        <button className='verMas'>Ver más</button>
                        <button>Agregar a Favoritos</button> 
                    </div>
        		</article>

			</section>

        )
    }

}

export default MovieCard;