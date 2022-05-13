import React, { Component } from "react";
import movieData from "./movieData";
import TopSection from "./components/TopSection";
import MovieCardContainer from "./components/MovieCardContainer";
import SingleMovie from "./components/SingleMovie";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movie: []
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
        {!this.state.movie.length ? <MovieCardContainer movies={this.state.movies}/> : <SingleMovie />}
      </main>

    )
  }
}

export default App;
