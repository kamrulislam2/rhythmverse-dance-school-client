import React from "react";
import Lottie from "lottie-react";
import image from "../../assets/404-error.json";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="relative">
      <div className="absolute left-[703px] bottom-16 z-10">
        <Link
          to="/"
          className="bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer transition-transform px-5 py-3 text-xl font-medium "
        >
          Go Back
        </Link>
      </div>
      <Lottie className="w-full h-[100vh]" animationData={image} loop={true} />
    </div>
  );
};

export default Error;
