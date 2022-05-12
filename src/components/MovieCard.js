import React from "react";
import "./MovieCard.css";

function MovieCard({key, id, poster, backdrop, title, rating, date}) {
  return (
    <div className="movie-card">
      <img className="poster-image" src={poster}/>

    </div>
  )
}

export default MovieCard;