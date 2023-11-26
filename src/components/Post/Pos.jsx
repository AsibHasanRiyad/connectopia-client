/* eslint-disable react/prop-types */
import { BiDislike, BiLike } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Pos = ({ pos }) => {
  // console.log(pos);
  const { authorImage, name, tags, upVote, downVote, postedTime, postTitle,_id } =
    pos;
  return (
    <div className=" w-full py-6 bg-white rounded-lg shadow-sm dark:bg-gray-800">
      <Link to={`/post/${_id}`}>
        <div className="flex items-center">
          <img
            className="hidden object-cover w-10 h-10 mr-4 rounded-full sm:block"
            src={authorImage}
            alt="avatar"
          />
          <h1 className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
            {name}
            <p className=" text-gray-500 text-sm font-normal">
              {" "}
              Posted At: {postedTime}
            </p>
          </h1>
        </div>

        <div className="mt-2">
          <h1 className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
            {" "}
            {postTitle}{" "}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {" "}
            Tags: #{tags}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className=" flex gap-4 bg-slate-100 px-4 py-2 rounded-md">
            <button className=" flex gap-2 items-center justify-center">
              <BiLike /> <span>{upVote}</span>
            </button>
            |
            <button className=" flex gap-2 items-center justify-center">
              <BiDislike /> <span>{downVote}</span>
            </button>
            |
            <button className=" flex gap-2 items-center justify-center">
              <FaRegCommentAlt></FaRegCommentAlt> <span>Comment Count</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Pos;
