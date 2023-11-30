import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import useStatus from "../../hooks/useStatus";
import { Link } from "react-router-dom";
import Button from "../../components/Shared/Button";
import { Helmet } from "react-helmet-async";

//TODO: add valid publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Membership = () => {
  const [status] = useStatus();
  // console.log(status);
  return (
    <div>
      <Helmet>
        <title>Membership</title>
      </Helmet>
      {status === "Gold" ? (
        <div>
          <div className="container px-6 py-16 mx-auto">
            <div className="items-center lg:flex">
              <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                  <h1 className="text-3xl font-semibold text-gray-100 dark:text-white lg:text-6xl">
                    You are already <br /> a{" "}
                    <span className="text-green-500 ">Gold Member</span>
                  </h1>

                  <p className="my-3 text-xl text-gray-200   ">
                    You can now post more than 5 post .Tell your friends about
                    this.
                  </p>

                  <Link to={"/"}>
                    <Button type={"secondary"} title={"Home"}></Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img
                  className="w-3/4 h-full lg:max-w-3xl"
                  src="https://i.ibb.co/W5GCyDD/Pngtree-business-goals-achievement-concept-with-7516352-1.png"
                  alt="Success"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Membership;
