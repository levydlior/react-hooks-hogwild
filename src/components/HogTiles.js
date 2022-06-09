import React, { useState } from "react";
import Tile from "./Tile";

function HogTiles({ hogsArray }) {
  const [selectedHog, setSelectedHog] = useState("");

  function handleHogSelect(nameOfHog) {
    setSelectedHog(nameOfHog);
  }

  const hogsItem = hogsArray.map((hog) => {
    return (
      <Tile
        hog={hog}
        className="ui eight wide column"
        key={hog.name}
        selectedHog={selectedHog}
        onHogSelect={handleHogSelect}
      />
    );
  });

  return <div className="ui grid container">{hogsItem}</div>;
}

export default HogTiles;
