import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class Favoritos extends Component{
    constructor(){
        super()
        this.state={
        }
    }

    render(){
        return(
            <React.Fragment>
                <Header />
                    <h1>Mis películas favoritas</h1>
                <Footer />
            </React.Fragment>
        )
    }

}


export default Favoritos;