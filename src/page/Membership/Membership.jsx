import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

//TODO: add valid publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Membership = () => {
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <h1 className=" text-xl text-gray-100 md:text-3xl lg:text-5xl text-center mt-10 mb-16 font-semibold">
        Please complete payment (10$) to <br /> become a{" "}
        <span className=" text-green-500">Gold Member</span>{" "}
      </h1>

      {/* payment */}
      <Elements stripe={stripePromise}>
        <PaymentForm></PaymentForm>
      </Elements>
    </div>
  );
};

export default Membership;
