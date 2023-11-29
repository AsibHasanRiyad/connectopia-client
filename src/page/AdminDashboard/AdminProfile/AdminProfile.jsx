import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { PieChart, Pie, Cell, Legend } from "recharts";

import AddTags from "./AddTags";
import Tags from "../../../components/Tags/Tags";
import { IoMail } from "react-icons/io5";

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
  console.log("vlaue", postCount, commentCount);
  const data = [
    { name: "Total Users", value: usersCount },
    { name: "Total Post", value: postCount },
    { name: "Total Comments", value: commentCount },
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

      <div className=" flex flex-col lg:flex-row  justify-center item-center gap-0 lg:gap-32  ">
        <div className="avatar flex justify-center items-center mt-24 mb-16">
          <div className=" w-40 md:w-48 absolute rounded-full ">
            <img src={user?.photoURL} />
          </div>
          <span className="badge relative -top-16 -right-16 md:-top-20 md:-right-20 w-24 h-24 rounded-full bg-[#132c50] indicator-item text-white text-xl">
              Admin
            </span>
        </div>
        {/*  */}
        <div className=" flex justify-center items-center">
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

      <div className="bg-transparent py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center space-y-4">
              <h2 className=" text-xl md:text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Trusted by people worldwide
              </h2>
            </div>
            <dl className="mt-8 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-3 lg:grid-cols-3">
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  Users
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {usersCount}
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  {" "}
                  Posts
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {postCount}
                </dd>
              </div>
              <div className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  {" "}
                  Comments{" "}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {commentCount}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* pie chart */}
      <div className=" hidden sm:flex overflow-x-auto justify-center items-center">
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
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
      </div>
      <hr className=" my-6" />
      <div className=" flex flex-col md:flex-row gap-5 z-0">
        <div className=" w-full md:w-1/2  border-r-2 pr-6">
          <AddTags></AddTags>
        </div>
        <div className=" w-full md:w-1/2">
          <h1 className="text-4xl text-[#132c50] font-semibold mb-4">
            Current Tags:
          </h1>
          <Tags></Tags>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
