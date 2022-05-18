import React, { Component } from "react";
import MovieCard from "./MovieCard";
import MovieDetailContainer from "./MovieDetailContainer";
import apiCalls from "../apiCalls";
import "./SingleMovie.css";

class SingleMovie extends Component {
  constructor({ movieId }) {
    super()
    this.state = {
      id: movieId,
      movie: {}
    }
  }



componentDidMount() {
  apiCalls.getMovies(this.state.id).then(data => this.setState({ movie: data.movie }))
}


  render() {

    return (
       this.state.movie.id ? <div className="single-movie">
        <MovieCard 
          key={this.state.movie.id}
          id={this.state.movie.id}
          backdrop={this.state.movie.backdrop_path}
          title={this.state.movie.title}
          rating={this.state.movie.average_rating}
          date={this.state.movie.release_date}
        />
        <MovieDetailContainer movie={this.state.movie}/>
      </div> 
      : <h2>Loading...</h2>
    )
  }
}

export default SingleMovie;
