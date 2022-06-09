import React from "react";
import hogs from "../porkers_data";

function Tile({ hog, selectedHog, onHogSelect }) {
  const { image, name, greased, weight, specialty } = hog;

  function showDetails() {
    if (selectedHog === name) {
      return (
        <div>
          {
            <div>
              <p>Speciality: {specialty}</p>
              <p>Weight: {weight}</p>
              <p>Greased: {greased ? "Yes" : "No"}</p>
              <p>Medal: {hog["highest medal achieved"]}</p>
            </div>
          }
        </div>
      );
    } else {
      return null;
    }
  }

  function handleCLick() {
    onHogSelect(name);
  }

  return (
    <div>
      <h3>{name}</h3>
      <img src={image} onClick={handleCLick}></img>
      {showDetails()}
    </div>
  );
}

export default Tile;
