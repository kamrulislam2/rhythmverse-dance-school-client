import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyClassesCard = ({ classes, refetch }) => {
  const {
    title,
    details,
    image,
    price,
    seats,
    students,
    status,
    _id,
    feedback,
  } = classes;
  console.log(classes);
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (id) => {
    console.log(id);
    axiosSecure.delete(`/myClasses/${id}`).then((data) => {
      console.log(data);
      if (data.data.deletedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Deleted Done",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };
  return (
    <div className="card relative lg:card-side border shadow-xl">
      <figure>
        <img className="w-[500px] h-full" src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <p className="text-lg w-1/2">{details}</p>
        <p className="text-lg">
          <span className="font-bold">Price:</span> ${price}
        </p>
        <p className="text-lg">
          <span className="font-bold">Total Seat:</span> {seats}
        </p>
        {(status === "Denied" || status === "Approved") && feedback && (
          <p className="text- text-gray-500">
            [<span className="font-bold">Feedback:</span> {feedback}]
          </p>
        )}
      </div>
      <button
        onClick={() => handleDelete(_id)}
        className="absolute text-lg font-semibold top-2 right-[260px] inline-flex items-center gap-2 text-red-600"
      >
        <FaTrashAlt />
        Delete
      </button>
      <p className="top-2 right-28 text-lg font-semibold absolute">
        Total Students: {students}
      </p>
      <div className="badge bg-[#FDD8D6] mr-2 mt-2 text-base p-3">{status}</div>
      <Link
        to={`/dashboard/updateClass/${_id}`}
        className={`card-actions absolute bottom-8 right-6 items-end justify-end ${
          status === "Denied" ? "btn-disabled" : ""
        }`}
      >
        <label
          htmlFor="modal"
          className={`btn btn-sm inline-flex items-center gap-2 bg-[#FDD8D6] ${
            status === "Denied" ? "btn-disabled" : ""
          }`}
        >
          <FaEdit />
          Edit
        </label>
      </Link>
      {/* <MyClassesModal classes={classes} refetch={refetch} editData={editData} /> */}
    </div>
  );
};

export default MyClassesCard;
