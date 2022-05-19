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
      movie: {},
      videos:[]
    }
  }

componentDidMount() {
  Promise.all([apiCalls.getMovies(this.state.id),apiCalls.getMovies(`${this.state.id}/videos`)])
  .then(data => this.setState({ movie: data[0].movie, videos: data[1].videos }))
}

  render() {
    const trailer = this.state.videos.find(video => video.type === "Trailer" && video.site === "YouTube")
    return (
       this.state.movie.id ? <div className="single-movie">
       <div className="card-display">
        <MovieCard
          key={this.state.movie.id}
          id={this.state.movie.id}
          backdrop={this.state.movie.backdrop_path}
          title={this.state.movie.title}
          rating={this.state.movie.average_rating}
          date={this.state.movie.release_date}
        />
        </div>
        <div className="trailer-details">
          {trailer && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> }
          <br/>
          <MovieDetailContainer movie={this.state.movie}/>
        </div>
      </div>
      : <h2>Loading...</h2>
    )
  }
}

export default SingleMovie;
