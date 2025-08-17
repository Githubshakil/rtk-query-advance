import React from "react";
import { useForm } from "react-hook-form";
import { useAddUserMutation } from "../redux/features/users/userApi";
import { useNavigate } from "react-router";

const AddNewUser = () => {
  const {register,handleSubmit,formState: { errors },} = useForm();
  const [addUser] = useAddUserMutation()
  const navigate = useNavigate()
  const onSubmit = async(data) => {
    try {
        await addUser(data)
        alert("user add successfully")
        navigate("/")
    } catch (error) {
        console.error("Error Creating new user", error)
    }
  }

  return (
    <div className="shadow-sm max-w-md rounded-lg p-8">
      <h2 className="text-xl font-semibold mb-5 ">Add New User</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-2">id:</label>
          <input
          {...register("id", { required: true })}
            type="number"
            placeholder="Id no."
            className=" p-2 border focus:outline-none  border-gray-200 rounded-lg w-full"
          />
        </div>
        <div>
          <label className="block mb-2">Name:</label>
          <input
          {...register("name", { required: true })}
            type="text"
            placeholder="Enter Your Name"
            className=" p-2 border focus:outline-none w-full border-gray-200 rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Email:</label>
          <input
          {...register("email", { required: true })}
            type="text"
            placeholder="Enter Your Email"
            className=" p-2 border focus:outline-none w-full border-gray-200 rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Age:</label>
          <input
          {...register("age", { required: true })}
            type="text"
            placeholder="Enter Your Age"
            className=" p-2 border focus:outline-none w-full border-gray-200 rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2">Country:</label>
          <input
          {...register("country", { required: true })}
            type="text"
            placeholder="Enter Your Country"
            className=" p-2 border focus:outline-none w-full border-gray-200 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="px-5 py-2 bg-blue-500 text-white rounded"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddNewUser;
