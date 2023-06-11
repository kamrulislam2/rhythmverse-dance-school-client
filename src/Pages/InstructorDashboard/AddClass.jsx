import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { TbFidgetSpinner } from "react-icons/tb";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData.data.display_url);
        if (imageData.success) {
          const image = imageData.data.display_url;
          const classData = {
            title: data.title,
            image: image,
            students: 0,
            seats: data.seats,
            price: data.price,
            details: data.details,
            status: "Pending",
            instructor: {
              name: data.name,
              email: data.email,
              image: user?.photoURL,
            },
          };
          axiosSecure.post("/classes", classData).then((data) => {
            console.log(data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              setIsLoading(false);
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const { user } = useContext(AuthContext);
  return (
    <div className="px-10 pb-24">
      <h2 className="text-2xl font-bold text-center mt-6">Add A Class</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        {/* Class name & image */}
        <div className="flex items-center justify-between gap-6">
          <label className="text-lg font-semibold w-full flex flex-col">
            Class Name
            <input
              {...register("title", { required: true })}
              className="border-2 border-[#FDD8D6] rounded-full p-3 mt-2"
              type="text"
              name="title"
              placeholder="class name"
            />
          </label>

          <label className="text-lg font-semibold w-full flex flex-col">
            Add Image
            <input
              {...register("image", { required: true })}
              className="border-2 border-[#FDD8D6] rounded-full p-3 mt-2"
              type="file"
              name="image"
              placeholder="class name"
            />
          </label>
        </div>

        {/* Instructor name & email */}
        <div className="flex items-center justify-between gap-6 mt-6">
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

        {/* Details */}
        <div className="flex items-center justify-between gap-6 mt-6">
          <label className="text-lg font-semibold w-full flex flex-col">
            Class Details
            <textarea
              className="border-2 border-[#FDD8D6] rounded p-3 mt-2"
              {...register("details", { required: true })}
              name="details"
              type="text"
              cols="30"
              rows="5"
            ></textarea>
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
    </div>
  );
};

export default AddClass;
