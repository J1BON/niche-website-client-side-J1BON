import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "./../Service/Service";

const Services = () => {
  const [drone, setDrone] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setDrone(data));
  }, []);
  return (
    <div className="pkg-main">
      <div className="pakage-title text-center">
        <h2>Drone Products</h2>
      </div>
      <div className="pakages row container mx-auto g-3">
        {drone.slice(0, 6).map((drones) => (
          <Service key={drones._id} drones={drones}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
