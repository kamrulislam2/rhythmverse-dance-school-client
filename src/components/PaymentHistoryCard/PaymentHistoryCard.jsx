import React from "react";

const PaymentHistoryCard = ({ payment, index }) => {
  const { name, email, price, date, transactionId } = payment;
  return (
    <tr>
      <th>{index + 1}</th>

      <td>{name}</td>
      <td>{email}</td>
      <td>${price}</td>
      <td>{date}</td>
      <td>{transactionId}</td>
    </tr>
  );
};

export default PaymentHistoryCard;
