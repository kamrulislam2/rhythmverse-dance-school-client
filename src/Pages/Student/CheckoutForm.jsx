import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import "./Common.css";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

const CheckoutForm = ({ selectedClass, price }) => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [paymentLoading, setPaymentLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setPaymentLoading(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Unknown",
            name: user?.displayName || "Anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
    }
    console.log(paymentIntent || error || confirmError);
    if (paymentIntent.status === "succeeded") {
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        name: selectedClass.name,
        classId: selectedClass.classId,
        selectedClassId: selectedClass._id,
        image: selectedClass.image,
        date: moment(new Date()).format("LLL"),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.insertResult.insertedId) {
          axiosSecure
            .patch(`/classes/${selectedClass.classId}`)
            .then((data) => {
              console.log(data.data);
            });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Done Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/dashboard/myEnrolledClass");
      });
    }
    setPaymentLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="border p-3 rounded w-3/6 mx-auto mt-16 mb-6"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="w-1/12 mx-auto ">
          <button
            id="paymentBtn"
            className="btn btn-primary w-full"
            type="submit"
            disabled={!stripe || !clientSecret | paymentLoading}
          >
            Pay
          </button>
        </div>
      </form>

      <div className="w-5/6 mx-auto pt-6 pb-20">
        {cardError && (
          <p className="text-lg text-red-600 font-medium">{cardError}</p>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
