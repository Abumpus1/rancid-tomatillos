import React, { Component } from "react";
import TopSection from "./components/TopSection";
import MovieCardContainer from "./components/MovieCardContainer";
import SingleMovie from "./components/SingleMovie";
import { Route, Switch } from "react-router-dom";
import apiCalls from "./apiCalls";
import utilities from "./utilities"
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error:"",
      searchResults: [],
      loading:true
    };
  }

  componentDidMount() {
    apiCalls.getMovies()
      .then(data => this.setState({movies: utilities.cleanAllMovies(data.movies),error:"",searchResults: utilities.cleanAllMovies(data.movies),loading:false}))
      .catch(error => this.setState({error:error.message,loading:false}))
  }



  searchMovies = (searchInput) => {
    const searchResults = this.state.movies.filter(movie => {
          return (movie.title.toLowerCase().includes(searchInput.toLowerCase()))
        })

      this.setState({searchResults:searchResults});
  }

  render() {
    return (
      <main className="App">
        <TopSection searchMovies={this.searchMovies}/>
        {this.state.error && <h2>Error: {this.state.error}, Please try your request again later.</h2>}
        {this.state.loading && <h2>Loading...</h2>}
        {!this.state.searchResults.length && this.state.movies.length > 0 && <h2>No search results found! Please alter your search and try again.</h2>}
        <Switch>
          <Route exact path="/" render={() => <MovieCardContainer movies={this.state.searchResults}/>} />
          <Route exact path="/:movie_id" render={ ({ match }) => {
            return (<SingleMovie movieId={parseInt(match.params.movie_id)}/>)
          }}
          />
          <Route render={()=>  <h2>Looks like you took a wrong turn, click Home to go back!</h2>} />
        </Switch>
      </main>
    )
  }
}

export default App;
