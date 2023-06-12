import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import ManageClassesModal from "./ManageClassesModal";

const ManageClassesCard = ({ singleClass, index, refetch }) => {
  const { image, price, title, instructor, seats, status, feedback } =
    singleClass;
  const [axiosSecure] = useAxiosSecure();

  console.log(singleClass);
  const handleApprove = (updateClass) => {
    console.log(updateClass);
    const updateStatus = {
      status: "Approved",
    };
    const classUpdateData = {
      classId: updateClass._id,
      title: updateClass.title,
      image: updateClass.image,
      details: updateClass.details,
      price: updateClass.price,
      seats: updateClass.seats,
      students: updateClass.students,
      instructor: {
        ...updateClass.instructor,
      },
      status: "Approved",
    };
    axiosSecure
      .patch(`/manageClasses/${updateClass._id}`, {
        updateStatus,
        classUpdateData,
      })
      .then((data) => {
        console.log(data.data);
        if (
          data.data.updateResult.modifiedCount > 0 &&
          data.data.addResult.insertedId
        ) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Approved",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDeny = (updateClass) => {
    console.log(updateClass);
    const updateStatus = {
      status: "Denied",
    };
    const classUpdateData = {
      classId: updateClass._id,
      title: updateClass.title,
      image: updateClass.image,
      details: updateClass.details,
      price: updateClass.price,
      seats: updateClass.seats,
      students: updateClass.students,
      instructor: {
        ...updateClass.instructor,
      },
      status: "Denied",
    };
    axiosSecure
      .patch(`/manageClasses/${updateClass._id}`, {
        updateStatus,
        classUpdateData,
      })
      .then((data) => {
        console.log(data.data);
        if (
          data.data.updateResult.modifiedCount > 0 &&
          data.data.addResult.insertedId
        ) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Denied",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img
          className="w-24 h-20 rounded-r-full rounded-b-full"
          src={image}
          alt=""
        />
      </td>
      <td>{title}</td>
      <td>{instructor.name}</td>
      <td>{instructor.email}</td>
      <td>{seats}</td>
      <td>${price}</td>
      <td>{status}</td>
      <td>
        <button
          onClick={() => handleApprove(singleClass)}
          className={`hover:scale-110 transition transform hover:underline badge bg-green-500 font-bold ${
            status === "Approved" || status === "Denied" ? "btn-disabled" : ""
          }`}
        >
          Approve
        </button>
        <hr />
        <button
          onClick={() => handleDeny(singleClass)}
          className={`hover:scale-110 transition transform hover:underline badge bg-red-500 font-bold ${
            status === "Denied" || status === "Approved" ? "btn-disabled" : ""
          }`}
        >
          Deny
        </button>
        <hr />
        <label
          htmlFor={`modal-${singleClass.classId}`}
          className={`cursor-pointer hover:scale-110 transition transform hover:underline badge bg-[#FDD8D6] font-bold ${
            feedback ? "btn-disabled" : ""
          }`}
        >
          Feedback
        </label>

        <ManageClassesModal id={singleClass.classId} refetch={refetch} />
      </td>
    </tr>
  );
};

export default ManageClassesCard;
