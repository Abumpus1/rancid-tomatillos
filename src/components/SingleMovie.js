import React, { Component } from "react";
import MovieCard from "./MovieCard";
import MovieDetailContainer from "./MovieDetailContainer";
import apiCalls from "../apiCalls";
import utilities from "../utilities"
import "./SingleMovie.css";

class SingleMovie extends Component {
  constructor({ movieId }) {
    super()
    this.state = {
      id: movieId,
      movieCard: {},
      movieDetail:{},
      videos:[],
      error: ""
    }
  }

componentDidMount() {
  Promise.all([apiCalls.getMovies(this.state.id), apiCalls.getMovies(`${this.state.id}/videos`)])
  .then(data => {
    this.setState({ movieCard: utilities.cleanMovieCard(data[0].movie), movieDetail:utilities.cleanMovieDetail(data[0].movie), videos: utilities.cleanVideos(data[1].videos)})
  })
  .catch(error => this.setState({error:error.message}))
}

  render() {
    const trailer = this.state.videos.find(video => video.type === "Trailer" && video.site === "YouTube")
    return (
      <>
         {this.state.movieCard.id && <div className="single-movie">
         <div className="card-display">
          <MovieCard
            key={this.state.movieCard.id}
            {...this.state.movieCard}
          />
          </div>
          <div className="trailer-details">
            {trailer && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> }
            <br/>
            <MovieDetailContainer {...this.state.movieDetail}/>
          </div>
        </div>}
         {this.state.error && <h2>Error: {this.state.error}, Please go back Home and try again.</h2>}
       </>
    )
  }
}

export default SingleMovie;
