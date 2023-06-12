import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MyEnrolledClassCard from "../../components/MyEnrolledClassCard/MyEnrolledClassCard";
import { AuthContext } from "../../provider/AuthProvider";

const MyEnrolledClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);

  const { data: enrolledClass = [] } = useQuery({
    queryKey: ["enrolled", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-6">My Enrolled Class</h2>

      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra text-lg">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Course Email</th>
              <th>Price</th>
              <th>Payment Date</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Row */}
            {enrolledClass.map((singleClass, index) => (
              <MyEnrolledClassCard
                key={singleClass._id}
                singleClass={singleClass}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClass;
