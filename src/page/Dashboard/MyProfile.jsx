import useAuth from "../../hooks/useAuth";
import { IoMail } from "react-icons/io5";

const MyProfile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="w-full overflow-hidden  dark:bg-gray-800">
      <div className="avatar flex justify-center items-center my-10">
        <div className=" w-56 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
          <img src={user?.photoURL} />
        </div>
      </div>

      <div className="px-6 py-4 text-center">
        <h1 className="text-2xl md:text-6xl font-semibold text-gray-800 dark:text-white">
          {user?.displayName}
        </h1>

        <div className="flex items-center mt-4  "></div>
        <h1 className="px-2 text-sm md:text-2xl flex justify-center items-center gap-2 text-gray-600">
          <IoMail />
          {user?.email}
        </h1>
        <h1 className="py-3 text-sm md:text-2xl text-gray-600">
          <span className=" font-bold">Account Created At: </span>{" "}
          {user?.metadata?.creationTime}
        </h1>
        <h1 className="py-3 text-sm md:text-2xl text-gray-600">
          <span className=" font-bold">Last Logged In At: </span>{" "}
          {user?.metadata?.lastSignInTime}
        </h1>
      </div>
    </div>
  );
};

export default MyProfile;
