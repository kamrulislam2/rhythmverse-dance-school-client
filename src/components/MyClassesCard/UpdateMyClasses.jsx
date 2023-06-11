import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import { useSpring, animated } from "@react-spring/web";
import { TbFidgetSpinner } from "react-icons/tb";
import Swal from "sweetalert2";

const UpdateMyClasses = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  const { data: myClasses = [], isLoading } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myClasses?email=${user?.email}`);
      return res.data.filter((data) => data._id === id);
    },
  });

  const springs = useSpring({
    from: { background: "#ff6d6d", y: -40, x: 0 },
    to: async (next, cancel) => {
      await next({ x: 80, background: "#fff59a" });
      await next({ y: 40, background: "#88DFAB" });
      await next({ x: 0, background: "#569AFF" });
      await next({ y: -40, background: "#ff6d6d" });
    },
    loop: true,
  });

  const onSubmit = (data) => {
    const updateData = {
      id: myClasses[0]._id,
      seats: data.seats,
      price: data.price,
    };

    if (updateData.id) {
      axiosSecure
        .patch(`/myClasses/${updateData.id}`, updateData)
        .then((data) => {
          console.log(data.data);
          if (data.data.modifiedCount) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Updated successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/myClasses");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="px-10 pb-24">
      {isLoading && myClasses.length !== 1 ? (
        <div className="flex items-center h-[100vh] justify-center">
          <animated.div
            style={{
              width: 40,
              height: 40,
              borderRadius: 4,
              ...springs,
            }}
          />
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-center mb-6">Update Class</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Class name & image */}
            <label className="text-lg font-semibold w-full flex flex-col">
              Class Name
              <input
                readOnly
                value={myClasses[0].title}
                {...register("title")}
                className="border-2 border-[#FDD8D6] rounded-full p-3 mt-2"
                type="text"
                name="title"
                placeholder="class name"
              />
            </label>

            {/* Id */}
            <label className="text-lg font-semibold w-full hidden">
              <input
                readOnly
                value={myClasses[0]._id}
                {...register("id")}
                className="border-2 border-[#FDD8D6] rounded-full p-3 mt-2"
                type="text"
                name="id"
                placeholder="id"
              />
            </label>

            {/* Instructor name & email */}
            <div className="flex items-center gap-6 mt-6">
              <label className="text-lg font-semibold w-full flex flex-col">
                Instructor Name
                <input
                  readOnly
                  value={user?.displayName}
                  {...register("name")}
                  className="border-2 border-[#FDD8D6] rounded-full p-3 mt-2"
                  type="text"
                  name="name"
                  placeholder="instructor name"
                />
              </label>

              <label className="text-lg font-semibold w-full flex flex-col">
                Instructor Email
                <input
                  readOnly
                  value={user?.email}
                  {...register("email")}
                  className="border-2 border-[#FDD8D6] rounded-full p-3 mt-2"
                  type="email"
                  name="email"
                  placeholder="instructor email"
                />
              </label>
            </div>

            {/* Seat and Price */}
            <div className="flex items-center justify-between gap-6 mt-6">
              <label className="text-lg font-semibold w-full flex flex-col">
                Available Seats
                <input
                  {...register("seats", { required: true })}
                  className="border-2 border-[#FDD8D6] rounded-full p-3 mt-2"
                  type="number"
                  name="seats"
                  placeholder="available seats"
                />
              </label>

              <label className="text-lg font-semibold w-full flex flex-col">
                Price
                <input
                  {...register("price", { required: true })}
                  className="border-2 border-[#FDD8D6] rounded-full p-3 mt-2"
                  type="number"
                  name="price"
                  placeholder="price"
                />
              </label>
            </div>

            <div className="mt-6">
              <button
                className="px-5 py-3 bg-[#FDD8D6] hover:bg-[#DDDCDC] hover:border hover:border-[#FDD8D6] text-lg font-semibold rounded-full cursor-pointer"
                type="submit"
              >
                {isLoading ? (
                  <TbFidgetSpinner className="m-auto animate-spin" size={24} />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default UpdateMyClasses;
