import React, { Component } from "react";
import TopSection from "./components/TopSection";
import MovieCardContainer from "./components/MovieCardContainer";
import SingleMovie from "./components/SingleMovie";
import { Route, NavLink } from "react-router-dom";
import apiCalls from "./apiCalls";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movie: {},
      error:""
    };
  }

  componentDidMount() {
    apiCalls.getMovies()
      .then(data => this.setState({movies: data.movies,error:""}))
      .catch(error => this.setState({error:error.message}))
  }

  selectMovie = (id) => {
    apiCalls.getMovies(id)
      .then(data => {
        this.setState({movie: data.movie, error:""})
      })
    .catch(error => this.setState({error: error.message}))
  }


  render() {
    return (
      <main className="App">
        <TopSection />
        <Route exact path="/" render={() => {
           return <MovieCardContainer selectMovie={this.selectMovie} movies={this.state.movies}/>
        }}
        />
        <Route exact path="/:movie_id" render={ ({ match }) => {
          return (<SingleMovie movieId={parseInt(match.params.movie_id)}/>)
        }}
        />
      </main>

    )
  }
}

export default App;
