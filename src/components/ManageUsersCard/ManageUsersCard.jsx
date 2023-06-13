import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUsersCard = ({ user, refetch, index }) => {
  const [axiosSecure] = useAxiosSecure();
  const { image, name, email, role, _id } = user;

  const handleInstructor = (id) => {
    console.log(id);
    const updateRole = {
      role: "instructor",
    };

    axiosSecure
      .patch(`/user/${id}`, updateRole)
      .then((data) => {
        console.log(data.data);
        if (data.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User updated as Instructor",
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

  const handelAdmin = (id) => {
    console.log(id);
    const updateRole = {
      role: "admin",
    };

    axiosSecure
      .patch(`/user/${id}`, updateRole)
      .then((data) => {
        console.log(data.data);
        if (data.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User updated as Admin",
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
          referrerPolicy="no-referrer"
          className="w-16 h-16 rounded-full"
          src={image}
          alt=""
        />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>
        <button
          onClick={() => handleInstructor(_id)}
          className={`hover:scale-110 transition transform hover:underline badge bg-[#FDD8D6] font-bold ${
            role === "instructor" ? "btn-disabled" : ""
          }`}
        >
          Make Instructor
        </button>
      </td>
      <td>
        <button
          onClick={() => handelAdmin(_id)}
          className={`hover:scale-110 transition transform hover:underline badge bg-green-500 font-bold ${
            role === "admin" ? "btn-disabled" : ""
          }`}
        >
          Make Admin
        </button>
      </td>
    </tr>
  );
};

export default ManageUsersCard;
