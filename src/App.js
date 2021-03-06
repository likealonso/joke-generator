import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: null,
      isFethingJoke: false
    }
  }

  componentDidMount(){
    this.fetchJoke()
  }

  fetchJoke = () => {
    this.setState({isFethingJoke:true})
    fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then(response => response.json())
      .then(json => {
        this.setState({
          joke: json.joke,
          isFethingJoke: false

        })
        console.log(json.joke)
      }
      )
  }
  onTellJoke = () => {
    this.fetchJoke()
  }
  render() {
    return (
      <div>
        <button onClick={this.onTellJoke} disabled={this.state.isFethingJoke}>Tell me a joke!</button>
        <p>{this.state.isFethingJoke ? "Loading.." : this.state.joke}</p>
      </div>
    )
  }


}

export default App;
