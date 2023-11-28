import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { MdAdminPanelSettings } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCommentAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";


import { MdOutlineArticle } from "react-icons/md";

const AdminProfile = () => {
  const [postCount, setPostCount] = useState("");
  const [commentCount, setCommentCount] = useState("");
  const [usersCount, setUsersCount] = useState("");
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  //post
  axiosSecure.get("/postCount").then((res) => {
    // console.log(res.data.count);
    setPostCount(res.data.count);
  });
  //comment
  axiosSecure.get("/commentCount").then((res) => {
    // console.log(res.data.count);
    setCommentCount(res.data.count);
  });
  //users
  axiosSecure.get("/usersCount").then((res) => {
    // console.log(res.data.count);
    setUsersCount(res.data.count);
  });

  return (
    <div>
      <div className="stats shadow w-full py-10">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
          </div>
          <div className="stat-value text-2xl">{user.displayName}</div>
          <div className="stat-title">{user.email}</div>
          <button className="text-[#132c50] py-2 px-0 flex justify-center items-center gap-2 text-4xl font-bold rounded mt-2">
            <MdAdminPanelSettings />
            Admin
          </button>
        </div>
        <div className="stat">
          <div className="stat-figure text-accent">
            <FaUsers  className=" text-5xl"/>
          </div>
          <div className="stat-title">Total Users</div>
          <div className="stat-value text-accent text-5xl">{usersCount}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-primary">
            <MdOutlineArticle className=" text-5xl" />
          </div>
          <div className="stat-title">Total Posts</div>
          <div className="stat-value text-primary text-5xl">{postCount}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaCommentAlt className=" text-5xl"></FaCommentAlt>
          </div>
          <div className="stat-title">Total Comments</div>
          <div className="stat-value text-secondary text-5xl">
            {commentCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
