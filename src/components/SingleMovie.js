import React from "react";
import MovieCard from "./MovieCard";
import MovieDetailContainer from "./MovieDetailContainer";
import "./SingleMovie.css";

function SingleMovie({movie}) {

    const singleCard = (<MovieCard
        key={movie.id}
        id={movie.id}
        backdrop={movie.backdrop_path}
        title={movie.title}
        rating={movie.average_rating}
        date={movie.release_date}
      />)

  return (
    <div className="single-movie">
      {singleCard}
      <MovieDetailContainer movie={movie}/>
    </div>
  )
}

export default SingleMovie;
