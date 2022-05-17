import React, { Component } from "react";
import TopSection from "./components/TopSection";
import MovieCardContainer from "./components/MovieCardContainer";
import SingleMovie from "./components/SingleMovie";
import { Route, NavLink } from "react-router-dom";
import apiCalls from "./apiCalls";
import "./App.css";

let pickedMovie

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
    .then(data => {
          if(this.state.movie[0].id === id){
            console.log('pass')
            this.setState({movie: [data[0].movie],error:""})
          }
          console.log('fail')
         console.log(this.state.movie)

    })
    .catch(error => this.setState({error:error.message}))
  }


  render() {
    return (
      <main className="App">
      <TopSection goHome={this.goHome} length={this.state.movie.length}/>
        <Route exact path="/" render={() => {
           return <MovieCardContainer selectMovie={this.selectMovie} movies={this.state.movies}/>
        }}
        />
        <Route exact path="/:movie_id" render={ ({ match }) => {
          console.log(match)
          return (<SingleMovie movieId={parseInt(match.params.movie_id)}/>)
        }}
        />
      </main>

    )
  }
}

 /* <TopSection goHome={this.goHome} length={this.state.movie.length}/>
{this.state.error && <h2>An error has occured, please try your request again later.</h2>}
{!this.state.movie.length ? <MovieCardContainer selectMovie={this.selectMovie} movies={this.state.movies}/> : <SingleMovie movie={this.state.movie[0]}/>}

if(this.state.movie[0].id !== id) {
  console.log("pass")
  this.setState({movie: [data[0].movie],error:""})
  return <SingleMovie movie={this.state.movie[0]}/>

movie={this.state.movie[0]}

//promise.all([this.selectMovie(findMovie.id)])
//.then(return singlecard)
console.log(findMovie)
this.selectMovie(findMovie.id)

*/
export default App;
