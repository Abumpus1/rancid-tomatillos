import React, { Component }from "react";
import { NavLink, Route } from "react-router-dom";
import "./TopSection.css";
import image from "./popcorn.png"

class TopSection extends Component {
  constructor() {
    super();
    this.state = {
      search:""
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
    this.props.searchMovies(event.target.value);
  }

  clearSearch() {
    this.setState({search:""})
    this.props.searchMovies("")
  }


  render() {
    return (
      <div className="top-section">
        <header>
          <img className="rancid-logo" src={image} alt="Rancid Tomatillos"/>
          <h1>Rancid Tomatillos</h1>
          <img className="rancid-logo" src={image} alt="Rancid Tomatillos"/>
        </header>
        <nav>
        <Route exact path="/" render={()=> {
            return (
              <form onSubmit={event => event.preventDefault()}>
                <input
                className="search-bar"
                type="search"
                value={this.state.search}
                placeholder="Search Movie Titles"
                name="search"
                onChange={event => this.handleChange(event)}
                />
              </form>
            )
          }}
        />
          <NavLink exact to="/" onClick={() => this.clearSearch()} className="nav">HOME</NavLink>
        </nav>
      </div>
    )
  }
}

export default TopSection;
