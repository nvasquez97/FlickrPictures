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
    
    getQuery()
    {
        return this.state.query;
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
        <Blue getQuery={this.getQuery.bind(this)}/>
        <Red getQuery={this.getQuery.bind(this)}/>
        <Purple getQuery={this.getQuery.bind(this)}/>
        <Yellow getQuery={this.getQuery.bind(this)}/>
        <Green getQuery={this.getQuery.bind(this)}/>
        <White getQuery={this.getQuery.bind(this)}/>
        <Black getQuery={this.getQuery.bind(this)}/>
        </div>
      </div>
    );
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
