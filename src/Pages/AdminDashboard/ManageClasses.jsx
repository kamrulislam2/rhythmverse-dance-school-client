import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import ManageClassesCard from "../../components/ManageClassesCard/ManageClassesCard";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);

  const { data: myClasses = [], refetch } = useQuery({
    queryKey: ["manageClasses", user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const response1 = axiosSecure.get("/manageClasses");
      const response2 = axiosSecure.get("/updatedClasses");

      try {
        const [data1, data2] = await Promise.all([response1, response2]);
        const combinedData = [...data1.data, ...data2.data];
        return combinedData;
      } catch (error) {
        console.log(error);
      }
    },
  });
  useEffect(() => {
    if (myClasses.length !== 0) {
      refetch();
    }
  }, [myClasses, refetch]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-6">Manage Classes</h2>

      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra text-lg">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Row */}
            {myClasses.map((singleClass, index) => (
              <ManageClassesCard
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

export default ManageClasses;
