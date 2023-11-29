import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = useAxiosSecure();
  const price = 10;
  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price: price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error);
      console.log("payment error", error);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    //confirm card payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        //save payment info and change user status
        const paymentInfo = {
          email: user?.email,
          price: price,
          date: new Date(),
          status: "pending",
          transactionId: transactionId,
        };
        const res = await axiosSecure.post("/payments", paymentInfo);
        console.log("payment is coming", res.data);
        if (res.data.updateUserStatus.acknowledged === true) {
          Swal.fire({
            title: "Payment Successful!",
            text: "Congratulations, you can now create more than 5 post",
            icon: "success",
          });
        }
      }
    }
  };
  return (
    <div className="  p-10 rounded-md bg-slate-200 text-white">
      <form onSubmit={handleSubmit}>
        <CardElement
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
        <div className=" flex items-center justify-center">
          <button
            className=" btn btn-primary bg-[#132c50] text-2xl text-white mt-6 w-1/4"
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
            <FaMoneyCheckDollar className=" text-3x ml-2 hidden md:block" />
          </button>
        </div>
        <p className=" py-4 text-red-500 flex justify-center items-center">
          {" "}
          {error.message}
        </p>
        {transactionId && (
          <div className=" py-4 text-green-500 text-center">
            <h1 className=" text-3xl ">Payment Successful</h1>
            <br />
            <h1 className=" text-gray-600">
              {" "}
              <span className=" font-bold text-gray-800">
                Your Transaction Id:{" "}
              </span>{" "}
              {transactionId}
            </h1>
          </div>
        )}
      </form>
    </div>
  );
};

export default PaymentForm;
