import useAuth from "../../hooks/useAuth";
import { IoMail } from "react-icons/io5";
import usePost from "../../hooks/usePost";
import MyPos from "./MyPos";
import useStatus from "../../hooks/useStatus";

const MyProfile = () => {
  const { user } = useAuth();
  // console.log(user);
  const [post] = usePost();
  const last3Post = post.slice(0, 3);
  console.log(last3Post);
  const [status] = useStatus();
  return (
    <div className="w-full  text-white overflow-hidden    ">
      <div className=" flex items-center justify-center mt-5 lg:mt-10 mb-10 lg:mb-20">
        <div className=" flex flex-col lg:flex-row  justify-between item-center gap-0 lg:gap-20">
          <div className="avatar flex justify-center items-center mt-24 mb-16">
            <div className=" w-40 md:w-48 absolute rounded-full ">
              <img src={user?.photoURL} />
            </div>
            <span className="badge relative -top-16 -right-16 md:-top-20 md:-right-20 w-24 h-24 rounded-full bg-[#132c50] indicator-item text-white text-xl">
              {status}
            </span>
          </div>
          <div className="px-6 py-4 text-start">
            <h1 className="text-2xl md:text-6xl font-semibold text-gray-200 dark:text-white">
              {user?.displayName}
            </h1>
            <h1 className=" text-sm md:text-2xl pt-3 flex justify-start items-center gap-2 text-gray-200">
              <IoMail />
              {user?.email}
            </h1>
            <h1 className="py-3 text-sm md:text-2xl text-gray-200">
              <span className=" font-bold">Account Created At: </span>{" "}
              {user?.metadata?.creationTime}
            </h1>
            <h1 className="py-3 text-sm md:text-2xl text-gray-200">
              <span className=" font-bold">Last Logged In At: </span>{" "}
              {user?.metadata?.lastSignInTime}
            </h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className=" text-4xl font-bold pb-4">Recent Post</h1>
        <hr />
        <div>
          {last3Post.map((pos) => (
            <MyPos key={pos._id} pos={pos}></MyPos>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
