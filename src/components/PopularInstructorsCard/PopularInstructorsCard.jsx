import React from "react";
import { Link } from "react-router-dom";

const PopularInstructorsCard = ({ instructor }) => {
  const { seats, students, price } = instructor;
  const { name, image } = instructor.instructor;
  return (
    <div className="w-full bg-base-100 shadow-xl ">
      <figure>
        <img className="h-80 w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p className="text-lg font-medium">
          Available Seats: {seats - students}
        </p>
        <p className="text-lg font-medium">Course Fee: ${price}</p>
      </div>
    </div>
  );
};

export default PopularInstructorsCard;
