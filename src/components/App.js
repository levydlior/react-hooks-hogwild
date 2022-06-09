import React, { useState } from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles";

import hogs from "../porkers_data";

function App() {
  const [greased, setGreased] = useState(false);
  const [sortWeight, setSortWeight] = useState(false);
  const [sortName, setSortName] = useState(false);

  let filteredHogs = hogs.filter((hog) => {
    return greased ? hog.greased : hog;
  });

  function sortByWeight() {
    if (sortWeight) {
      filteredHogs.sort((a, b) => (a.weight > b.weight ? 1 : -1));
    }
  }

  function sortByName() {
    if (sortName) {
      filteredHogs.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
  }
  sortByName();
  sortByWeight();
  return (
    <div className="App">
      <Nav />
      <button style={{ margin: "2rem" }} onClick={() => setGreased(!greased)}>
        {greased ? "unfilter" : "Filter Greased"}
      </button>
      <button
        style={{ margin: "2rem" }}
        onClick={() => setSortWeight(!sortWeight)}
      >
        {sortWeight ? "Unsort Weight" : "Sort Weight"}
      </button>
      <button style={{ margin: "2rem" }} onClick={() => setSortName(!sortName)}>
        {sortName? "Unsort": 'Sort by name'}
      </button>
      <HogTiles hogsArray={filteredHogs} />
    </div>
  );
}

export default App;
