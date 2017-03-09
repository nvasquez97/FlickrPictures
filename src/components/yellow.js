import React, { Component } from 'react';
import axios from 'axios';
const URL="localhost:9000/flickr"
class Yellow extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            color:'yellow',
            fotos:[]
        }
    }
    render()
    {
        <div>
            
        </div>
    }
    
    upDateFotos()
    {
        var buscar =this.props.query+' '+this.state.color;
        console.log('buscar: '+buscar);
        axios.get(URL+'/'+buscar).then(response => {
            console.log(response);
            this.setState({
              fotos:response.data
            });
          });        
    }
}

export default App;