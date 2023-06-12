import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ClassesCard = ({ singleClass }) => {
  const { user } = useContext(AuthContext);
  const { _id, title, image, instructor, seats, students, price, details } =
    singleClass;
  const navigate = useNavigate();

  const handleSelect = () => {
    if (!user) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please Login",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");
    }
    const selectedClass = {
      classId: _id,
      instructor: instructor.name,
      name: title,
      image,
      price,
      email: user?.email,
    };
    axios
      .post(`${import.meta.env.VITE_api_URL}/selected`, selectedClass)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
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
          <span className="font-bold">Instructor Name:</span> {instructor.name}
        </p>
        <p className="text-lg font-medium">
          <span className="font-bold">Available Seats:</span> {seats - students}
        </p>
        <p className="text-lg font-medium">
          <span className="font-bold">Course Fee:</span> ${price}
        </p>
        <p className="text-lg font-medium">
          <span className="font-bold">Descriptions:</span>{" "}
          {details.substring(0, 100)}...
        </p>

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
