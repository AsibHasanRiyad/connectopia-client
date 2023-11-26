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
  const [status] = useStatus()
  return (
    <div className="w-full min-h-screen flex items-center justify-center overflow-hidden  dark:bg-gray-800">
      <div>
        <div className="avatar flex justify-center items-center mt-24 mb-16"> 
          <div className=" w-40 md:w-48 absolute rounded-full ">
            <img src={user?.photoURL} />
          </div>
          <span className="badge relative -top-16 -right-16 md:-top-20 md:-right-20 w-24 h-24 rounded-full bg-[#132c50] indicator-item text-white text-xl">
            {status}
          </span>
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

        {/* recent post */}
        <div>
          <h1 className=" text-4xl font-bold pb-4">Recent Post</h1>
          <hr />
           <div>
            {
              last3Post.map(pos => <MyPos key={pos._id} pos={pos} ></MyPos>)
            }
           </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
