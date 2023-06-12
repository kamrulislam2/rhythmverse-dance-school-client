import React, { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import PaymentHistoryCard from "../../components/PaymentHistoryCard/PaymentHistoryCard";
import { AuthContext } from "../../provider/AuthProvider";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);

  const { data: paymentInfo = [] } = useQuery({
    queryKey: ["paymentInfo", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-6">Payment History</h2>

      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra text-lg">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th></th>
              <th>Course Name</th>
              <th>Course Email</th>
              <th>Price</th>
              <th>Payment Date</th>
              <th>Payment ID</th>
            </tr>
          </thead>
          <tbody>
            {/* Row */}
            {paymentInfo.map((payment, index) => (
              <PaymentHistoryCard
                key={payment._id}
                payment={payment}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
