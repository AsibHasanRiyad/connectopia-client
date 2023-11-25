import { useLoaderData } from "react-router-dom";
import { FaRegCommentAlt, FaRegShareSquare } from "react-icons/fa";
import { BiDislike, BiLike } from "react-icons/bi";
import Button from "../../components/Shared/Button";

const PostDetails = () => {
  const data = useLoaderData();
  const {
    authorImage,
    name,
    tags,
    upVote,
    downVote,
    postedTime,
    postTitle,
    postDescription,
  } = data;
  console.log(data);
  // console.log(data);
  return (
    <div className=" w-full py-6 bg-white rounded-lg shadow-sm dark:bg-gray-800">
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
            Posted At: {postedTime}
          </h1>
        </h1>
      </div>

      <div className="mt-4">
        <h1 className="text-4xl my-5 font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
          {" "}
          {postTitle}{" "}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300"> Tags: #{tags}</p>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-xl">
          {" "}
          <span className=" font-bold">Post Description: </span> {postDescription}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className=" flex gap-4 bg-gray-100 px-4 py-2 rounded">
          <button className=" flex gap-2 items-center justify-center">
            <BiLike /> <span>{upVote}</span>
          </button>
          |
          <button className=" flex gap-2 items-center justify-center">
            <BiDislike /> <span>{downVote}</span>
          </button>
          |
          <button className=" flex gap-2 items-center justify-center">
            <FaRegCommentAlt></FaRegCommentAlt>
          </button>
          |
          <button className=" flex gap-2 items-center justify-center">
            <FaRegShareSquare />
          </button>
        </div>
      </div>
      <div>
        <textarea
          className="textarea textarea-bordered w-full h-52 mt-6"
          placeholder="Write your comment here......"
        ></textarea>

        <div className=" flex justify-end mt-2">
        <Button type={'primary'} title={'Comment'}></Button>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
