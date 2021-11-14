import React from "react";
import { useForm } from "react-hook-form";
import ratingImg from "../../../images/rating.svg";
import "./AddReview.css";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/ratings", data).then((res) => {
      if (res.data.insertedId) {
        alert("Package booked successfully");
        reset();
      }
    });
  };
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-center my-5">PLEASE ADD YOUR REVIEW HERE</h1>
      <div className="row container mx-auto my-5">
        <div className="col-sm-12 col-md-12 col-lg-6 ">
          <img src={ratingImg} alt="" className="img-fluid" />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 from-area">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Full name"
              value={user.displayName}
            />
            <input
              type="hidden"
              {...register("img", { required: true })}
              placeholder="Full name"
              value={user.photoURL}
            />
            <br />
            <textarea {...register("text")} placeholder="Your Feedback" />
            <br />
            <input
              type="number"
              {...register("rating", { min: 1, max: 5 })}
              placeholder="Rating 1-5"
            />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
