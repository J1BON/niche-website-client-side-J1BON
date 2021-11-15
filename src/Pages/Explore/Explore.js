import React, { useState, useEffect } from "react";

import Service from "../Home/Service/Service";

const Explore = () => {
  const [explors, setExplors] = useState([]);
  useEffect(() => {
    fetch("https://immense-mesa-85677.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setExplors(data));
  }, []);
  return (
    <div className="pkg-main">
      <div className="pakage-title text-center">
        <h2>Drone Products</h2>
      </div>
      <div className="pakages row container mx-auto g-3">
        {explors.map((drones) => (
          <Service key={drones.id} drones={drones}></Service>
        ))}
      </div>
    </div>
  );
};

export default Explore;
