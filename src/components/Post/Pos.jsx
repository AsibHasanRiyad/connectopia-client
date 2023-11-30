/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Pos = ({ pos }) => {
  // console.log(pos);
  const { authorImage, name, tags, upVote, downVote, postedTime, postTitle,_id } =
    pos;

    const [comments, setComments] = useState([])
    const rootPostId = _id;
    const axiosSecure = useAxiosSecure()
  
   useEffect( () =>{
    axiosSecure.get(`/comments?rootPostId=${rootPostId}`)
    .then(res =>{
      // console.log(res.data);
      setComments(res.data)
    })
   },[axiosSecure, rootPostId]) 
  return (
    <div
    data-aos="fade-down"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="700"
    className=" w-full py-6 text-gray-100 rounded-lg shadow-sm">
      <Link to={`/post/${_id}`}>
        <div className="flex items-center">
          <img
            className="hidden object-cover w-10 h-10 mr-4 rounded-full sm:block"
            src={authorImage}
            alt="avatar"
          />
          <h1 className="font-bold text-gray-200 cursor-pointer ">
            {name}
            <p className=" text-gray-300 text-sm font-normal">
              {" "}
              Posted At: {postedTime}
            </p>
          </h1>
        </div>

        <div className="mt-2">
          <h1 className="text-xl font-bold text-gray-100 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
            {" "}
            {postTitle}{" "}
          </h1>
          <p className="mt-2 text-gray-400   ">
            {" "}
            Tags: #{tags}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className=" flex gap-4 py-2 rounded-md text-gray-100 text-2xl">
            <button className=" flex gap-2 items-center justify-center">
              <BiLike /> <span>{upVote}</span>
            </button>
            |
            <button className=" flex gap-2 items-center justify-center">
              <BiDislike /> <span>{downVote}</span>
            </button>
            |
            <button className=" flex gap-2 items-center justify-center">
              <FaRegCommentAlt></FaRegCommentAlt> <span> {comments.length} </span>
            </button>
          </div>
        </div>
      </Link>
      <hr className=" mt-4" />
    </div>
  );
};

export default Pos;
