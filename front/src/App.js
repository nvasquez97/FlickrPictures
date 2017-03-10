import React, { Component } from 'react';
import Blue from './components/blue';
import Red from './components/red';
import Purple from './components/purple';
import Yellow from './components/yellow';
import Green from './components/green';
import White from './components/white';
import Black from './components/black';
import axios from 'axios';
const URL="https://back-end-flickr.herokuapp.com/flickr"

class App extends Component {
    
    constructor(props){
        super(props);
        this.state={
            query:'',
            hazClick:''
        }
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
    
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
        <h1>
        Search pictures, by color!
        </h1>
        <input onChange={event=>{this.queries(event)}}/>
        <h3>{this.state.hazClick}</h3>
        </div>
        <div className="container columnas">
        <Blue updateFotos={this.updateFotosB.bind(this)} getUrl={this.getUrl.bind(this)}/>
        <Red query={this.state.query} getUrl={this.getUrl.bind(this)}/>
        <Purple query={this.state.query} getUrl={this.getUrl.bind(this)}/>
        <Yellow query={this.state.query} getUrl={this.getUrl.bind(this)}/>
        <Green query={this.state.query} getUrl={this.getUrl.bind(this)}/>
        <White query={this.state.query} getUrl={this.getUrl.bind(this)}/>
        <Black updateFotos={this.updateFotosB.bind(this)}/>
        </div>
      </div>
    );
  }
  
  updateFotosB()
    {
        var buscar =this.state.query+',black';
        console.log('buscar: '+buscar);
        axios.get(URL+'/'+buscar).then(response => {
            return response.data;
          });        
    }


queries(busca)
{
        this.setState(
        {
            query:busca.target.value,
            hazClick:'Ready! Now Click below:'
        })
}
}
export default App;
