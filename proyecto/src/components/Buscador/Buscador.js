import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Buscador extends Component{
    constructor(props){
        super (props);
        this.state={
            input: '',
        }
    }
    preventRecarga(evento){ 
        evento.preventDefault();
    };
    guardarCambios(evento){ 
        this.setState({
            input: evento.target.value}); 
    };
    render () {
        /* console.log(this.props.funcionalidades) */
        return (
            <React.Fragment>
                <form onSubmit={(evento) => this.preventRecarga(evento)}>
                    <input type='text' placeholder='pelicula' onChange={(evento) => this.guardarCambios(evento)} value={this.state.input} />
                    <Link to={`/searchresult/id/${this.state.input}`}> <input type='submit' value='submit' /> </Link>    
                </form> 
            </React.Fragment>
        )

    }
}

export default Buscador;