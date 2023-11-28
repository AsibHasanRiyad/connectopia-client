import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { MdAdminPanelSettings } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCommentAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { PieChart, Pie, Cell, Legend } from "recharts";

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

  //pie chart
  console.log('vlaue', postCount, commentCount);
  const data = [
    { name: "Total Users", value: usersCount },
    { name: "Total Post", value: postCount },
    { name: "Total Comments", value: commentCount},
  ];

  const COLORS = ["#00D7C0", "#4A00FF", "#FF00D3"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

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
            <FaUsers className=" text-5xl" />
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

      {/* pie chart */}
     <div className=" flex justify-center items-center">
     <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend></Legend>
      </PieChart>
     </div>
    </div>
  );
};

export default AdminProfile;
