import React, { Component } from "react";
import movieData from "./movieData";
import "./App.css";
console.log(movieData.movies)
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movie: {}
    };
  }

  componentDidMount() {
    this.setState({
      movies: movieData.movies
    })
  }



  render() {
    return (
      <main className="App">
        <TopSection />
        {!this.state.movie ? <MovieCardContainer /> : <SingleMovie />}
      </main>

    )
  }
}

export default App;
