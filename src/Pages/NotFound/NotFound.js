import React from "react";
import not from "../../images/not.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img className="w-75 mx-auto" src={not} alt="" />
    </div>
  );
};

export default NotFound;
