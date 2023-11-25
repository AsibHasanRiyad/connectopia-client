import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const LogIn = () => {
  const [error, setError] = useState("");
  const { singIn, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const toastId = toast.loading("Logging In....");
    setError("");
    console.log(data);
    singIn(data.email, data.password)
      .then((result) => {
        toast.success('Logged In...', {id: toastId});
        console.log(result);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message, {id: toastId})
      });
  };
  // google sign in
  const handelGoogleSignIn = () => {
    const toastId = toast.loading("Logging In....");
    googleSignIn()
      .then((result) => {
        console.log(result);
        toast.success('Logged In...', {id: toastId});
        const userInfo = {
          name: result?.user?.name,
          email: result?.user?.email,
          image:result?.user?.photoURL
        }
        axiosPublic.post('/users', userInfo)
        navigate("/");
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        toast.error(error.message, {id: toastId});
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#132c50]">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10  text-gray-200">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-200">Welcome to Connectopia</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#0065ff] bg-gray-100 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                {...register("password", {
                  required: true,
                })}
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                placeholder="*******"
                className="w-full px-3 py-2 mb-3 border rounded-md border-gray-100 focus:outline-[#0065ff] bg-gray-100 text-gray-900"
              />
              {errors.password?.type === "required" && (
                <span className=" text-red-500">Password is required</span>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-red-500 w-full rounded-md py-3 text-white"
            >
              Sign In
            </button>
            <h1 className=" text-red-500 mt-3">{error}</h1>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handelGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-300">
          Already have an account?{" "}
          <Link
            to="/signUp"
            className="hover:underline hover:text-red-500 text-gray-100"
          >
            Register
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default LogIn;
