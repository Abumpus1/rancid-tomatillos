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
    // const select = this.state.movies.find(movie => movie.id === id)
    const select =  {
      id: 1,
      title: "Fake Movie Title",
      poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
      release_date: "2019-12-04", 
      overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!",
      average_rating: 6, genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" }

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
