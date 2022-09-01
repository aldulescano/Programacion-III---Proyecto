import React, {Component} from 'react';
import './movieCard.css'
import {Link} from 'react-router-dom';

class MovieCard extends Component{
    constructor(props){
        super(props)
        this.state={
           
        }
    }

    render(){
        return(
            // aca esta con la interactividad que no tenemos asi que primero lo hago sin dinamismo y dsp lo cambiamos cuando tengamos la API
            //  <article className='movieCard'>
            //     <Link to={`/personajes/id/${this.props.datosPersonaje.id}`}>
            //         <img src={this.props.datosPersonaje.image} alt="" />
            //     </Link>
            //     <h2>{this.props.datosPersonaje.name}</h2> {/* Nombre */}
            //     <p>{this.props.datosPersonaje.status}</p> {/* Estado */}
            //     <p>{this.props.datosPersonaje.species}</p> {/* Especie */}
            //     <p className='more'>Ver más</p> 
            //     <section className='extra'>
            //         <p>Origen: {this.props.datosPersonaje.origin.name}</p> 
            //     </section>
            //     <p className='delete' onClick={()=>this.props.borrar(this.props.datosPersonaje.id)}>Borrar</p>
            // </article>

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