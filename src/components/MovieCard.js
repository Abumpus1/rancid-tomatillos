import React from "react";
import "./MovieCard.css";

function MovieCard({id, poster, backdrop, title, rating, date}) {
  return (
    <div className="movie-card">
      <div className="rating-box">
        <p>{rating.toFixed(1)}</p>
      </div>
      <img className="poster-image" src={poster}/>
      <div className="movie-card-hover">
        <img className="backdrop-image" src={backdrop} />
        <p className="card-date">{date}</p>
        <p className="card-title">{title}</p>
      </div>
    </div>
  )
}

export default MovieCard;