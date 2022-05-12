import React from "react";
import MovieCard from "./MovieCard";
import MovieDetailContainer from "./MovieDetailContainer";
import "./SingleMovie.css";

function SingleMovie() {
  return (
    <div>
      <h2>SingleMovie</h2>
      <MovieCard />
      <MovieDetailContainer />
    </div>
  )
}

export default SingleMovie;