import React from "react";
import "./MovieDetailContainer.css";

function MovieDetailContainer({movie}) {
  const {title,tagline,budget,revenue,overview,runtime,genres} = movie

  const genresToDisplay = genres.map((genre,index)=> <p key={index}>{genre} </p>)


  return (
    <div className="movie-detail-container">
      <h3>{title}</h3>
      <h4>{tagline}</h4>
      <div>
        <h4>Overview:</h4>
        <p>{overview}</p>
      </div>
      <h4>Runtime:{runtime} minutes</h4>
      <div>
        <h4>Genres:</h4>
        {genresToDisplay}
      </div>
      <div>
        {budget !== 0 && <h4>Budget: ${budget.toLocaleString("en-US")}</h4>}
        {revenue !==0 && <h4>Revenue: ${revenue.toLocaleString("en-US")}</h4>}
      </div>
    </div>
  )
}

export default MovieDetailContainer;
