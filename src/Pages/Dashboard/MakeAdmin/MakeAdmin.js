import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, reset,handleSubmit,formState: { errors }} = useForm();
    const onSubmit=(data)=>{
        console.log(data)
        fetch("http://localhost:5000/makeAdmin",{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body: JSON.stringify(data),

        })
        .then(res=>res.json())
        .then(result=>console.log(result))
    }
    return (
        <div className="add-service">
            <h2 className="text-center">Make Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input  {...register("email")} placeholder="email" />
      
      {errors.email && <span>This field is required</span>}
     
      {/* <input {...register("img")} placeholder="Image" />
      <input type="number" {...register("price")}placeholder="Price" /> */}
      <input type="submit" value="make admin" />
    </form>
        </div>
    );
};

export default MakeAdmin;
