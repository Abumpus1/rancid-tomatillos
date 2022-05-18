import React from "react";
import { Route, NavLink } from "react-router-dom";
import "./TopSection.css";
import image from "./logo.svg"

function TopSection() {
  return (
    <div className="top-section">
      <header>
        <h1>Rancid Tomatillos</h1>
        <img className="rancid-logo" src={image} alt="Rancid Tomatillos"/>
      </header>
      <nav>
        <NavLink exact to="/" className="nav">HOME</NavLink>
      </nav>
    </div>
  )
}

export default TopSection;
