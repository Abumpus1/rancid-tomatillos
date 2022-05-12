import React, { Component } from "react";
import movieData from "./movieData";
import "./App.css";
console.log(movieData.movies)
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.setState({
      movies: movieData.movies
    })
  }

  render() {
    return (
        <h1 className="App">Test</h1>

    )
  }
}

export default App;
