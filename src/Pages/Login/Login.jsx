import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loading, setLoading, googleLogin, loginUser } =
    useContext(AuthContext);
  const [isShow, setIsShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setError("");
    loginUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        setLoading(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state?.from?.pathname || "/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        setLoading(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state?.from?.pathname || "/", { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center p-3 lg:p-6 min-h-screen">
      <Helmet>
        <title>RhythmVerse | Login</title>
      </Helmet>
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
              type={isShow ? "text" : "password"}
              name="password"
              {...register("password", { required: true })}
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
          </label>
          {error && <p className="text-red-600">{error}*</p>}
          <button
            className="w-full bg-[#FDD8D6] hover:bg-[#DDDCDC] hover:border hover:border-[#FDD8D6] py-3 text-lg font-semibold rounded-full cursor-pointer"
            type="submit"
          >
            {loading ? (
              <TbFidgetSpinner className="m-auto animate-spin" size={24} />
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p className="my-6">
          New to here? Please{" "}
          <Link className="underline" to="/register">
            Register
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

export default Login;
