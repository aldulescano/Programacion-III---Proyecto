import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Buscador extends Component{
    constructor(props){
        super(props);
        this.state={
            input: "",
        }
    }
    prevRecarga(e){ 
        e.preventDefault();
    };
    saveChanges(e){ 
        this.setState({
            input: e.target.value
        }); 
    };
    render () {
        return (
            <React.Fragment>
                <form onSubmit={(e) => this.prevRecarga(e)}>
                    <input type='text' placeholder='pelicula' onChange={(e) => this.saveChanges(e)} value={this.state.input} />
                    {
                        this.state.input ?
                            <Link to={`/resultados/${this.state.input}`}>
                                <input type='submit' value='submit' /> 
                            </Link> 
                            :
                            <input type='submit' value='submit' /> 
                    }
                </form> 
            </React.Fragment>
        )

    }
}

export default Buscador;


