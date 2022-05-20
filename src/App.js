import React, { Component } from "react";
import TopSection from "./components/TopSection";
import MovieCardContainer from "./components/MovieCardContainer";
import SingleMovie from "./components/SingleMovie";
import { Route, Switch } from "react-router-dom";
import apiCalls from "./apiCalls";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error:""
    };
  }

  componentDidMount() {
    apiCalls.getMovies()
      .then(data => this.setState({movies: data.movies,error:""}))
      .catch(error => this.setState({error:error.message}))
  }

  render() {
    return (
      <main className="App">
        <TopSection />
        {this.state.error && <h2>An error has occured, please try your request again later.</h2>}

        <Switch>
          <Route exact path="/" render={() => <MovieCardContainer movies={this.state.movies}/>} />
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
