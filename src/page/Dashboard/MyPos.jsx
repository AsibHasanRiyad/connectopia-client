/* eslint-disable react/prop-types */
import { BiDislike, BiLike } from "react-icons/bi";

const MyPos = ({ pos }) => {
  console.log(pos);
  const {
    authorImage,
    name,
    email,
    upVote,
    downVote,
    postDescription,
    postTitle,
  } = pos;
  return (
    <div className=" w-full px-8 py-6 bg-white rounded-lg shadow-sm dark:bg-gray-800">
      <div className="flex items-center">
        <img
          className="hidden object-cover w-10 h-10 mr-4 rounded-full sm:block"
          src={authorImage}
          alt="avatar"
        />
        <h1 className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
          {name}
          <h1 className=" text-gray-500 text-sm font-normal">
            {" "}
            Email: {email}
          </h1>
        </h1>
      </div>

      <div className="mt-2">
        <h1
          href="#"
          className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
        >
          {" "}
          {postTitle}{" "}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {" "}
          {postDescription}{" "}
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
        </div>
      </div>
    </div>
  );
};

export default MyPos;
