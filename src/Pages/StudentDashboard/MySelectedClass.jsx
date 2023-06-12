import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MySelectedClassCard from "../../components/MySelectedClassCard/MySelectedClassCard";
import { AuthContext } from "../../provider/AuthProvider";

const MySelectedClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const { data: selectedClass = [], refetch } = useQuery({
    queryKey: ["selected", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/selected?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-6">My Selected Class</h2>

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
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Row */}
            {selectedClass.map((singleClass, index) => (
              <MySelectedClassCard
                key={singleClass._id}
                singleClass={singleClass}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
