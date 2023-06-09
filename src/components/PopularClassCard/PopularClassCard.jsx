import React from "react";
import { Link } from "react-router-dom";

const PopularClassCard = ({ singleClass }) => {
  const { title, image, price, students } = singleClass;

  return (
    <div className="w-full bg-base-100 shadow-xl">
      <figure>
        <img className="h-80 w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-lg font-medium">Total Students: {students}</p>
        <p className="text-lg font-medium">Course Fee: ${price}</p>
        <Link to="/classes" className="card-actions justify-center">
          <button className="px-5 py-3 bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer text-base lg:text-lg font-medium uppercase transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            Enroll Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularClassCard;
