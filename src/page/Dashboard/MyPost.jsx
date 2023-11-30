import { useEffect, useState } from "react";

import MyPostTable from "./MyPostTable";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const MyPost = () => {
  const { user } = useAuth();
  // const [post, setPost] = useState([]);
  const [totalPost, setTotalPost] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  // const axiosSecure = useAxiosSecure();
  // const [post] = usePost()
  // console.log(post);
  

  useEffect(() => {
    fetch(`https://connectopia-server.vercel.app/myPostCount?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.count);
        setTotalPost(data.count);
      });
  }, [user?.email]);
  // console.log(totalPost);
  const postPerPage = 5;
  const numberOfPage = Math.ceil(totalPost / postPerPage);
  // console.log(numberOfPage);
  const pages = [];
  for (let i = 0; i < numberOfPage; i++) {
    pages.push(i);
  }
// console.log(numberOfPage, postPerPage)

  const axiosPublic = useAxiosPublic();
  const { data: post = [] } = useQuery({
    queryKey: ["post", user?.email, currentPage, postPerPage],
    queryFn: async () => {
      const res = await axiosPublic.get(`/post?page=${currentPage}&size=${postPerPage}&email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <div className=" col-span-4 order-2 md:order-1">
       <Helmet>
        <title>My Post</title>
      </Helmet>
      <h1 className=" text-6xl text-gray-100 font-semibold my-6"> My Post </h1>
      <div className="overflow-x-auto max-w-sm md:max-w-xl lg:max-w-full">
        <table className="table text-gray-100">
          <thead>
            <tr className=" text-green-500">
              <th>Title</th>
              <th>Up Votes</th>
              <th>Down Votes</th>
              <th>Comment</th>
              <th> Delete </th>
            </tr>
          </thead>
          <tbody>
            {post?.map((post) => (
              <MyPostTable key={post._id} post={post}></MyPostTable>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" flex flex-wrap gap-2 justify-center items-center my-6">
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={
              currentPage === page
                ? "btn btn-circle bg-blue-500 text-xl border-none text-white hover:bg-blue-500  mr-3 "
                : "btn btn-circle bg-green-500 text-xl border-none text-white hover:bg-blue-500 mr-3"
            }
            key={page}
          >
            {" "}
            {page}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyPost;
