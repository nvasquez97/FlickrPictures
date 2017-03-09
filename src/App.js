import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Blue from './components/blue';
import Red from './components/red';
import Purple from './components/purple';
import Yellow from './components/yellow';
import Green from './components/green';
import White from './components/white';
import Black from './components/black';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state={
            query:''
        }
    }
    
    
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
        <h1>
        Seacrh pictures, by color!
        </h1>
        <input onChange={event=>{this.queries(event.target.value)}}/>
        </div>
        <Blue query={this.state.query}/>
        <Red query={this.state.query}/>
        <Purple query={this.state.query}/>
        <Yellow query={this.state.query}/>
        <Green query={this.state.query}/>
        <White query={this.state.query}/>
        <Black query={this.state.query}/>
      </div>
    );
  }


queries(busca)
{
    this.setState(
    {
        query:busca
    });
}
}
export default App;
