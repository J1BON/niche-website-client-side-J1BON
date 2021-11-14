import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <div class="container">
        <div className="gallery-txt my-5">
          <h1>FLYING DRONES</h1>
          <p className="text-muted">
            They really are a scream the Addams Family! Their house is a museum
            where people come to see ‘em. They really are a addams family.
          </p>
        </div>
        <div class="row g-0">
          <div class=" col-sm-12 col-md-6 col-lg-6">
            <img
              src="https://i.ibb.co/Y0mBG7H/shutterstock-309081578.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div class="col-sm-12 col-md-6 col-lg-6">
            <img
              src="https://i.ibb.co/0BJ5Gjv/shutterstock-360798107.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <div class="row g-0 mb-5">
          <div class="col-sm-12 col-md-6 col-lg-4">
            <img
              src="https://i.ibb.co/mDS2Vfq/shutterstock-373632925.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <img
              src="https://i.ibb.co/0cQ4D5y/shutterstock-371947111.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <div class=" col-sm-12 col-md-6 col-lg-4">
            <img
              src="https://i.ibb.co/grKQx2b/shutterstock-376470163.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
