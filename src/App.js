import React, { Component } from "react";
import TopSection from "./components/TopSection";
import MovieCardContainer from "./components/MovieCardContainer";
import SingleMovie from "./components/SingleMovie";
import apiCalls from "./apiCalls"
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movie: [],
      error:""
    };
  }

  componentDidMount() {
    Promise.all([apiCalls.getMovies()])
    .then(data => this.setState({movies: data[0].movies,error:""}))
    .catch(error => this.setState({error:error.message}))
  }

  goHome = () => {
    this.setState({movie:[]})
  }

  selectMovie = (id) => {
    Promise.all([apiCalls.getMovies(id)])
    .then(data => this.setState({movie: [data[0].movie],error:""}))
    .catch(error => this.setState({error:error.message}))
  }


  render() {
    return (
      <main className="App">
        <TopSection goHome={this.goHome} length={this.state.movie.length}/>
        {this.state.error && <h2>An error has occured, please try your request again later.</h2>}
        {!this.state.movie.length ? <MovieCardContainer selectMovie={this.selectMovie} movies={this.state.movies}/> : <SingleMovie movie={this.state.movie[0]}/>}
      </main>

    )
  }
}

export default App;
