import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: null
    }
  }
  onTellJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then(response => response.json())
      .then(json => {
        this.setState({
          joke: json.joke

        })
        console.log(json.joke)
      }
      )
  }
  render() {
    return (
      <div>
        <button onClick={this.onTellJoke}>Tell me a joke!</button>
        <p>{this.state.joke}</p>
      </div>
    )
  }


}

export default App;
