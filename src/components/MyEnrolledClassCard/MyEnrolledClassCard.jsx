import React from "react";
// import { IoCheckmarkDoneCircleSharp } from "react-icons/io";

const MyEnrolledClassCard = ({ singleClass, index }) => {
  const { name, image, email, price, date, transactionId } = singleClass;
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
      <td>{date}</td>
      <td>
        Successful
        {/* <IoCheckmarkDoneCircleSharp /> */}
      </td>
    </tr>
  );
};

export default MyEnrolledClassCard;
