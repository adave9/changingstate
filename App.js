import React from 'react';
import './App.css';
import Cars from './Cars.js';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <p> It is a {this.state.color}, {this.state.model} from {this.state.year}.</p>
        <button type="button" onClick={this.changeColor}>Change color</button>
        <Cars color="green"/>
      </div>
           );
    }
}
export default App;