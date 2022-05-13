import React from "react";
import MovieCard from "./MovieCard";
import "./MovieCardContainer.css";

function MovieCardContainer({ movies, selectMovie }) {
  const movieCards = movies.map(movie => {
    return (
      <MovieCard
        selectMovie={selectMovie}
        key={movie.id}
        id={movie.id}
        poster={movie.poster_path}
        backdrop={movie.backdrop_path}
        title={movie.title}
        rating={movie.average_rating}
        date={movie.release_date}
      />
    )
  })
  return (
    <div className="movie-card-container">
      {movieCards}
    </div>
  )
}

export default MovieCardContainer;
