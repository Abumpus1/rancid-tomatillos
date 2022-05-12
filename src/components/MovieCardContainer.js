import React from "react";
import MovieCard from "./MovieCard";
import "./MovieCardContainer.css";

function MovieCardContainer({ movies }) {
  const movieCards = movies.map(singleMovie => {
    return (
      <MovieCard movie={singleMovie} key={singleMovie.id}/>
    )
  })
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