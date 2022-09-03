import React, {Component} from 'react';
import Movie from '../../components/Movie/Movie'
import Form from '../../components/Form/Form'

class VerTodas extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }


    render(){
        return(
            <React.Fragment>
            
            <Form/>
            <Movie/>
            </React.Fragment>
        )
    }
}

export default VerTodas;