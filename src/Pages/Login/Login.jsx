import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center p-3 lg:p-6 min-h-screen">
      <div className="card border border-[#FDD8D6] p-12 w-5/6 lg:w-1/3">
        <h2 className="text-center font-extrabold text-3xl mb-10">
          Please Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <label className="text-lg font-semibold flex flex-col gap-y-2">
            Email
            <input
              className="border-2 border-[#FDD8D6]  rounded-full p-3"
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="email"
            />
          </label>

          <label className="text-lg font-semibold flex flex-col gap-y-2 relative">
            Password
            <input
              className="border-2 border-[#FDD8D6]  rounded-full p-3"
              type="password"
              name="password"
              {...register("password", { required: true })}
              placeholder="password"
            />
            <FaEye className="absolute top-14 right-6 cursor-pointer" />
          </label>
          <input
            className="w-full bg-[#FDD8D6] hover:bg-[#DDDCDC] hover:border hover:border-[#FDD8D6] py-3 text-lg font-semibold rounded-full cursor-pointer"
            type="submit"
            value="Login"
          />
        </form>
        <p className="my-6">
          New to here? Please{" "}
          <Link className="underline" to="/register">
            Register
          </Link>
        </p>
        <div className="inline-flex items-center justify-center gap-2 w-2/3 mx-auto bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer rounded-full">
          <FcGoogle size={24} />
          <button className="text-xl font-semibold py-3">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
