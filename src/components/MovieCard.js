import React from "react";
import "./MovieCard.css";

function MovieCard({id, poster, backdrop, title, rating, date }) {
  const year = new Date(date).getFullYear();
  const fixedRating = `${rating.toFixed(1)*10}%`;

  return (
    <div className="movie-card">
      <div className="rating-box">
        <p>{fixedRating}</p>
      </div>
      {poster && <img className="poster-image" src={poster} alt={title}/>}
      <div className="movie-card-hover">
        <div className="hover-shadow"></div>
        <div className="backdrop-box">
          <img className="backdrop-image" src={backdrop} alt={`${title} backdrop`} />
        </div>
        <p className="card-date">{year}</p>
        <p className="card-title">{title}</p>
      </div>
    </div>
  )
}

export default MovieCard;
