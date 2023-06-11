import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MySelectedClassCard = ({ singleClass, index, refetch }) => {
  const { name, image, email, price } = singleClass;

  const handleDelete = (singleClass) => {
    axios
      .delete(`${import.meta.env.VITE_api_URL}/selected/${singleClass?._id}`)
      .then((data) => {
        if (data.data.deletedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Deleted Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
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
      <td>{name}</td>
      <td>{email}</td>
      <td>${price}</td>
      <td>
        <button
          onClick={() => handleDelete(singleClass)}
          className="hover:scale-110 transition transform hover:underline"
        >
          Delete
        </button>
      </td>
      <td>
        <Link to={`/dashboard/payment/${singleClass._id}`}>
          <button className="hover:scale-110 transition transform hover:underline">
            Pay
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default MySelectedClassCard;
