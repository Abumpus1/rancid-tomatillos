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

  goHome = () => {
    this.setState({movie:[]})
  }

  selectMovie = (id) => {
    const select = this.state.movies.find(movie => movie.id === id)
    this.setState({movie:[select]})
  }


  render() {
    return (
      <main className="App">
        <TopSection goHome={this.goHome} length={this.state.movie.length}/>
        {!this.state.movie.length ? <MovieCardContainer selectMovie={this.selectMovie} movies={this.state.movies}/> : <SingleMovie movie={this.state.movie[0]}/>}
      </main>

    )
  }
}

export default App;
