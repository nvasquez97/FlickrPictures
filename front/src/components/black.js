import React, { Component } from 'react';
import axios from 'axios';
const URL="https://back-end-flickr.herokuapp.com/flickr"
class Black extends Component {
    constructor(props)
    {
        super(props);
        this.state={
           color:'black',
            fotos:[],
            id:'',
            farm:''
        }
    }
    render()
    {
     
        return(
            <div className="container columna black" onClick={this.upDateFotos.bind(this)}>
            <p>
            {this.state.color}
            </p>    
            {this.state.fotos.map(foto => {
                return <img src={this.getUrl(foto)} alt="foto"/>
          console.log(this.getUrl(foto))
            })}
        </div>
        );
    }
    
    upDateFotos()
    {
        var buscar = this.state.color;
        axios.get(URL+'/'+buscar).then(response => {
            this.setState(
            {   
                fotos:response.data.photos.photo
            }
            );
          })
    }

    getUrl(foto) {
        return "https://farm"+
            foto.farm +
            ".staticflickr.com/" +
            foto.server +
            "/"+
            foto.id+
            "_" +
            foto.secret +
            "_s.jpg";
    }

}

export default Black;