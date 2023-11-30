import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, googleSignIn } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setError("");
    const toastId = toast.loading("Logging In....");
    // console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log(res.data.data.display_url);
    const imageUrl = res.data.data.display_url;
    // console.log(imageUrl);
    const userInfo = {
      name: data?.name,
      email: data?.email,
      image: res.data.data.display_url,
      role: "user",
      status: "Bronze",
    };
    console.log(userInfo);
    createUser(data?.email, data?.password)
      .then((res) => {
        axiosPublic.post("/users", userInfo);
        toast.success("Logged In...", { id: toastId });
        // console.log(res);
        updateProfile(res.user, {
          displayName: data?.name,
          photoURL: imageUrl ? imageUrl : res?.photoURL,
        });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        toast.success(error.message, { id: toastId });
      });
  };
  // google sign in
  const handelGoogleSignIn = () => {
    const toastId = toast.loading("Logging In....");
    googleSignIn()
      .then((result) => {
        toast.success("Logged In...", { id: toastId });
        // console.log(result.user.displayName);
        updateProfile(result.user, {
          displayName: result?.user?.name,
          photoURL: result?.user?.photoURL,
        });
        const userInfo = {
          name: result?.user?.displayName,
          email: result?.user?.email,
          image: result?.user?.photoURL,
          role: "user",
          status: "Bronze",
        };
        axiosPublic.post("/users", userInfo);
        navigate("/");
      })
      .catch((error) => {
        // console.log(error);
        setError(error.message);
        toast.success(error.message, { id: toastId });
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
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                {...register("name", { required: true })}
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-100 focus:outline-[#0065ff] bg-gray-100 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                id="image"
                name="image"
                {...register("image", { required: true })}
                accept="image/*"
                className=" border border-gray-100 rounded-md p-2"
              />
            </div>
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
                  minLength: 8,
                  pattern:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
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
              {errors.password?.type === "minLength" && (
                <span className=" text-red-500">
                  Password Must be at least 8 characters
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className=" text-red-500 ">
                  Password must contain at least 1 numeric character at least 1
                  lowercase letter at least 1 uppercase letter at least 1
                  special character
                </span>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-red-500 w-full rounded-md py-3 text-white"
            >
              Sign Up
            </button>
            <h1 className=" text-red-500 mt-3">{error}</h1>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16   "></div>
          <p className="px-3 text-sm   ">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16   "></div>
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
            to="/login"
            className="hover:underline hover:text-red-500 text-gray-100"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
