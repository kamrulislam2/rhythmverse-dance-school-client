import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import MyClassesCard from "../../components/MyClassesCard/MyClassesCard";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: myClasses = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myClasses?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-6">My Classes</h2>

      <div className="my-16 flex flex-col gap-y-10">
        {myClasses.map((classes) => (
          <MyClassesCard
            classes={classes}
            key={classes._id}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
