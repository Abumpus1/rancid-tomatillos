import React from "react";
import "./MovieCard.css";

function MovieCard({key, id, poster, backdrop, title, rating, date}) {
  return (
    <div className="movie-card">
      <div className="rating-box">
        <p>{rating.toFixed(1)}</p>
      </div>
      <img className="poster-image" src={poster}/>

    </div>
  )
}

export default MovieCard;