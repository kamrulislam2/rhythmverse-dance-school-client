import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { AuthContext } from "../../provider/AuthProvider";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const { id } = useParams();
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);

  const { data: selectedClass = {} } = useQuery({
    queryKey: ["selected", id],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/selected/${id}`);
      return res.data;
    },
  });
  const price = parseFloat(selectedClass?.price).toFixed(2);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-center">Make Payment Please</h2>

      <Elements stripe={stripePromise}>
        <CheckoutForm selectedClass={selectedClass} price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
