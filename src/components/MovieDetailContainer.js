import React from "react";
import "./MovieDetailContainer.css";

function MovieDetailContainer({ title, tagline, budget, revenue, overview, runtime, genres }) {

  const genresToDisplay = genres.map((genre,index)=> <p className="detail" key={index}>{genre} </p>)

  const convertNumber = (value) => {
    return `$${value.toLocaleString("en-US")}`;
  }

  return (
    <div className="movie-detail-container">
      <h3 className="detail">{title}</h3>
      {tagline && <h4 className="tagline detail">{tagline}</h4>}
      <div>
        <h4 className="detail">Overview:</h4>
        <p className="detail">{overview}</p>
      </div>
      <h4 className="detail">Runtime: {runtime} minutes</h4>
      <div>
        <h4 className="detail">Genres:</h4>
        {genresToDisplay}
      </div>
        {budget !== 0 && <h4 className="detail">Budget: {convertNumber(budget)}</h4>}
        {revenue !==0 && <h4 className="detail">Revenue: {convertNumber(revenue)}</h4>}
    </div>
  )
}

export default MovieDetailContainer;
