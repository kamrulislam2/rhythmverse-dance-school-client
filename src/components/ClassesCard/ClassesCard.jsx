import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const ClassesCard = ({ singleClass }) => {
  const { user } = useContext(AuthContext);
  const { _id, title, image, instructor, seats, students, price } = singleClass;

  const handleSelect = () => {
    const selectedClass = {
      classId: _id,
      instructor: instructor.name,
      name: title,
      image,
      price,
      email: user?.email,
    };
    axios
      .put(`${import.meta.env.VITE_api_URL}/selected`, selectedClass)
      .then((data) => {
        if (data.data.upsertedId && data.data.upsertedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class selected",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Already selected",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div
      className={`w-full ${
        seats - students === 0 ? "bg-red-400" : "bg-base-100"
      } shadow-xl`}
    >
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

        <div className="card-actions justify-end">
          <button
            onClick={handleSelect}
            className={`px-5 py-3 bg-[#FDD8D6] hover:bg-[#DDDCDC] ${
              seats - students === 0 && "btn-disabled"
            } cursor-pointer text-base lg:text-lg font-medium uppercase transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none inline-flex items-center gap-3`}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
