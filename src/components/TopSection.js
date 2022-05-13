import React from "react";
import "./TopSection.css";
import image from "./logo.svg"

function TopSection({goHome,length}) {
  return (
    <div className="top-section">
      <header>
        <h1>Rancid Tomatillos</h1>
        <img className="rancid-logo" src={image} alt="Rancid Tomatillos"/>
      </header>
      <nav>
        {length !==0 && <button onClick={() =>{goHome()}}>Home</button>}
      </nav>
    </div>
  )
}

export default TopSection;
