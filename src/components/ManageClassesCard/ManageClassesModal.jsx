import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageClassesModal = ({ id, refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data, id);
    // The class is declined due to plagiarism content. Please add new class with unique content.
    const updateFeedback = {
      feedback: data.feedback,
    };
    axiosSecure
      .put(`/updateFeedback/${id}`, updateFeedback)
      .then((data) => {
        console.log(data.data);
        if (
          data.data.classesResult.modifiedCount > 0 &&
          data.data.classUpdatesResult.modifiedCount > 0
        ) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Feedback Sent",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
          reset();
          closeModal();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const closeModal = () => {
    const modalToggle = document.getElementById(`modal-${id}`);
    if (modalToggle) {
      modalToggle.checked = false;
    }
  };

  useEffect(() => {
    const modalToggle = document.getElementById(`modal-${id}`);
    if (modalToggle) {
      modalToggle.checked = false;
    }
  }, [id]);

  return (
    <>
      <input type="checkbox" id={`modal-${id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Feedback</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              className="p-3 border-2 rounded border-[#FDD8D6]"
              name="feedback"
              type="text"
              {...register("feedback")}
              placeholder="write your feedback..."
              cols="51"
              rows="5"
              required
            ></textarea>

            <div className="modal-action">
              <label className="btn" type="submit">
                <input htmlFor={`modal-${id}`} type="submit" value="Send" />
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ManageClassesModal;
