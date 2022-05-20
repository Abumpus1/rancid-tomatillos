import React, { Component }from "react";
import { NavLink } from "react-router-dom";
import "./TopSection.css";
import image from "./logo.svg"

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

  render() {
    return (
      <div className="top-section">
        <header>
          <h1>Rancid Tomatillos</h1>
          <img className="rancid-logo" src={image} alt="Rancid Tomatillos"/>
        </header>
        <nav>
          <form>
            <input
             className="search-bar"
             type="text"
             value={this.state.search}
             placeholder="Search Movie Titles"
             name="search"
             onChange={event => this.handleChange(event)}
             />
          </form>
          <NavLink exact to="/" className="nav">HOME</NavLink>
        </nav>
      </div>
    )
  }
}

export default TopSection;
