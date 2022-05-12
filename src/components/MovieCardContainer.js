import React from "react";
import MovieCard from "./MovieCard";
import "./MovieCardContainer.css";

function MovieCardContainer() {
  return (
    <div>
      <h2>MovieCard Container</h2>
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  )
}

export default MovieCardContainer;