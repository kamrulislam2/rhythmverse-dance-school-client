import React from "react";
import { Link } from "react-router-dom";

const ClassesCard = ({ singleClass }) => {
  const { title, image, instructor, seats, students, price } = singleClass;

  return (
    <div className="w-full bg-base-100 shadow-xl ">
      <figure>
        <img className="h-80 w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-xl font-medium">
          Instructor Name: {instructor.name}
        </p>
        <p className="text-lg font-medium">
          Available Seats: {seats - students}
        </p>
        <p className="text-lg font-medium">Course Fee: ${price}</p>

        <Link to="/classes" className="card-actions justify-end">
          <button className="px-5 py-3 bg-[#FDD8D6] hover:bg-[#DDDCDC] cursor-pointer text-base lg:text-lg font-medium uppercase transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none inline-flex items-center gap-3">
            Select
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ClassesCard;
