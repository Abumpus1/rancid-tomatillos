import React, {Component} from "react";
import MovieCard from "./MovieCard";
import MovieDetailContainer from "./MovieDetailContainer";
import apiCalls from "../apiCalls";
import "./SingleMovie.css";

class SingleMovie extends Component {
  constructor({movieId}) {
    super()
    this.state = {
      id:movieId,
      movie:{}
    }
  }



componentDidMount() {
  apiCalls.getMovies(this.state.id).then(data => this.setState({movie: data.movie}))
}


  render(){
    (console.log("should be a fetched movie",this.state.movie))


    const singleCard = (<MovieCard
      key={this.state.movie.id}
      id={this.state.movie.id}
      backdrop={this.state.movie.backdrop_path}
      title={this.state.movie.title}
      rating={this.state.movie.average_rating}
      date={this.state.movie.release_date}
      />)



    return (
      <div className="single-movie">
        {singleCard}
        <MovieDetailContainer movie={this.state.movie}/>
      </div>
    )
  }
}

export default SingleMovie;
