import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";

const Register = () => {
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
          Please Register
        </h2>
      </div>
    </div>
  );
};

export default Register;
