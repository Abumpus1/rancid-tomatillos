import React from "react";
import "./MovieDetailContainer.css";

function MovieDetailContainer({movie}) {
  //map out movie and go through each detail
  const {title,tagline,budget,revenue,overview,runtime,genre} = movie
  return (
    <div className="movie-detail-container">
      <h3>{title}</h3>
      <h4>{tagline}</h4>
      <h4>{budget}</h4>
    </div>
  )
}

export default MovieDetailContainer;
