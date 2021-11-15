import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://immense-mesa-85677.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added succesfully");
          reset();
        }
      });
  };
  return (
    <div className="add-service">
      <h1 className="text-center fw-bold my-4">ADD PRODUCTS</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title", { required: true })} placeholder="Title" />
        <input {...register("img")} placeholder="Image link" />
        <textarea {...register("descrip")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="Price" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
