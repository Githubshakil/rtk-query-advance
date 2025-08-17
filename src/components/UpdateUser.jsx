import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import {
  useGetUserByIdQuery,
  useUpdateUserByIdMutation,
} from "../redux/features/users/userApi";
import Loader from "./Loader";

const UpdateUser = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const { data: user = {}, isLoading, error } = useGetUserByIdQuery(id);
  const [updateUserById] = useUpdateUserByIdMutation();

  if (user && !isLoading && !error && !reset.called) {
    reset(user);
    reset.called = true;
  }
  const onSubmit = async (data) => {
    try {
      const response = await updateUserById({ id, ...data });
      console.log("Response:", response)

      alert("user update successfull");
      navigate("/");
    } catch (error) {
      console.error("Error Creating new user", error);
    }
  };

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="shadow-sm max-w-md rounded-lg p-8">
      <h2 className="text-xl font-semibold mb-5 ">Update User</h2>

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
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
