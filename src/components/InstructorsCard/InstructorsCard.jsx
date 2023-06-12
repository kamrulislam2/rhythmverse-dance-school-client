import React from "react";

const InstructorsCard = ({ instructor }) => {
  const { title } = instructor;
  const { name, image, email } = instructor.instructor;

  return (
    <div className="w-full bg-base-100 shadow-xl ">
      <figure>
        <img
          referrerPolicy="no-referrer"
          className="h-80 w-full"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p className="text-xl font-medium">Email: {email}</p>
        <p className="text-lg font-medium">Course Name: {title}</p>
      </div>
    </div>
  );
};

export default InstructorsCard;
