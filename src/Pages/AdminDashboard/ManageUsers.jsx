import React, { useContext } from "react";
import ManageUsersCard from "../../components/ManageUsersCard/ManageUsersCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("users");
      return res.data;
    },
  });
  console.log(allUsers);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-6">Manage Users</h2>

      <div className="overflow-x-auto mt-10">
        <table className="table table-zebra text-lg">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Row */}
            {allUsers.map((user, index) => (
              <ManageUsersCard
                key={user._id}
                user={user}
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

export default ManageUsers;
