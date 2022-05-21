import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import "./MovieCardContainer.css";

function MovieCardContainer({ movies }) {
  const movieCards = movies.map(movie => {
    return (
      <Link className="movie-card-link" to={`/${movie.id}`} key={movie.id}>
        <MovieCard
        {...movie}
        />
      </Link>
    )
  })
  return (
    <div className="movie-card-container">
      {movieCards}
    </div>
  )
}

export default MovieCardContainer;
