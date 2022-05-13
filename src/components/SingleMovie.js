import React from "react";
import MovieCard from "./MovieCard";
import MovieDetailContainer from "./MovieDetailContainer";
import "./SingleMovie.css";

function SingleMovie({movie}) {

    const singleCard = (<MovieCard
        key={movie.id}
        id={movie.id}
        poster={movie.poster_path}
        backdrop={movie.backdrop_path}
        title={movie.title}
        rating={movie.average_rating}
        date={movie.release_date}
      />)


  return (
    <div>
      <h2>SingleMovie</h2>
      {singleCard}
      // <MovieDetailContainer />
    </div>
  )
}

export default SingleMovie;
