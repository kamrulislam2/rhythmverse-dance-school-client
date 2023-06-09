import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Register = () => {
  const {
    user,
    loading,
    setLoading,
    createUser,
    updateUserProfile,
    googleLogin,
  } = useContext(AuthContext);
  const [isShow, setIsShow] = useState(false);
  const [isShowAnother, setIsShowAnother] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setError("");

    if (data.password !== data.confirm) {
      setError("Password mismatched please try again");
    }

    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.image)
          .then(() => {
            const saveUser = {
              name: data.name,
              email: data.email,
            };
            axios
              .put(`${import.meta.env.VITE_api_URL}/users`, saveUser)
              .then((data) => {
                if (
                  data.data.modifiedCount > 0 ||
                  data.data.upsertedCount > 0
                ) {
                  setLoading(false);
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registration Successful",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/");
                }
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        const saveUser = {
          name: loggedUser?.displayName,
          email: loggedUser?.email,
        };
        axios
          .put(`${import.meta.env.VITE_api_URL}/users`, saveUser)
          .then((data) => {
            if (data.data.modifiedCount > 0 || data.data.upsertedCount > 0) {
              setLoading(false);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registration Successful",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center p-3 lg:p-6 min-h-screen">
      <div className="card border border-[#FDD8D6] p-12 w-5/6 lg:w-1/3">
        <h2 className="text-center font-extrabold text-3xl mb-10">
          Please Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <label className="text-lg font-semibold flex flex-col gap-y-2">
            Name*
            <input
              className="border-2 border-[#FDD8D6]  rounded-full p-3"
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="name"
            />
            {errors.name && <p className="text-red-600">Name is required*</p>}
          </label>
          <label className="text-lg font-semibold flex flex-col gap-y-2">
            PhotoURL*
            <input
              className="border-2 border-[#FDD8D6]  rounded-full p-3"
              type="url"
              name="image"
              {...register("image", { required: true })}
              placeholder="photoURL"
            />
            {errors.image && (
              <p className="text-red-600">Enter your image URL*</p>
            )}
          </label>

          <label className="text-lg font-semibold flex flex-col gap-y-2">
            Email*
            <input
              className="border-2 border-[#FDD8D6]  rounded-full p-3"
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="email"
            />
            {errors.email && <p className="text-red-600">Enter valid email*</p>}
          </label>

          <label className="relative text-lg font-semibold flex flex-col gap-y-2">
            Password*
            <input
              className="border-2 border-[#FDD8D6]  rounded-full p-3"
              type={isShow ? "text" : "password"}
              name="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              placeholder="password"
            />
            {isShow ? (
              <FaEyeSlash
                onClick={() => setIsShow(false)}
                className="absolute top-14 right-6 cursor-pointer"
              />
            ) : (
              <FaEye
                onClick={() => setIsShow(true)}
                className="absolute top-14 right-6 cursor-pointer"
              />
            )}
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required*</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">Password must be 6 characters*</p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600">
                Password must be less than 20 characters*
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                Password must have one uppercase, one lowercase, number &
                special character characters*
              </p>
            )}
          </label>
          <label className="relative text-lg font-semibold flex flex-col gap-y-2">
            Confirm Password*
            <input
              className="border-2 border-[#FDD8D6]  rounded-full p-3"
              type={isShowAnother ? "text" : "password"}
              name="confirm"
              {...register("confirm", { required: true })}
              placeholder="confirm password"
            />
            {isShowAnother ? (
              <FaEyeSlash
                onClick={() => setIsShowAnother(false)}
                className="absolute top-14 right-6 cursor-pointer"
              />
            ) : (
              <FaEye
                onClick={() => setIsShowAnother(true)}
                className="absolute top-14 right-6 cursor-pointer"
              />
            )}
            {errors.confirm && (
              <p className="text-red-600">Confirm password is required*</p>
            )}
            {error && <p className="text-red-600">{error}*</p>}
          </label>

          <button
            className="w-full bg-[#FDD8D6] hover:bg-[#DDDCDC] hover:border hover:border-[#FDD8D6] py-3 text-lg font-semibold rounded-full cursor-pointer"
            type="submit"
          >
            {loading ? (
              <TbFidgetSpinner className="m-auto animate-spin" size={24} />
            ) : (
              "Register"
            )}
          </button>
        </form>
        <p className="my-6">
          Already registered? Please{" "}
          <Link className="underline" to="/login">
            Login
          </Link>
        </p>

        <div
          onClick={handleGoogleLogin}
          className="inline-flex items-center justify-center gap-2 w-2/3 mx-auto bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer rounded-full"
        >
          <FcGoogle size={24} />
          <button className="text-xl font-semibold py-3">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
