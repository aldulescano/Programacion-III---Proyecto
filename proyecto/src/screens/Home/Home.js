import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './home.css'

class Home extends Component{
    constructor(){
        super()
        this.state={
        }
    }

    render(){
        return(
            <React.Fragment>
                <Header />
                    <h1>peliculas</h1>
                <Footer />
            </React.Fragment>
        )
    }

}


export default Home;