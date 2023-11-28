import { useLoaderData, useParams } from "react-router-dom";
import { FaRegCommentAlt, FaRegShareSquare } from "react-icons/fa";
import { BiDislike, BiLike } from "react-icons/bi";
import Button from "../../components/Shared/Button";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import CommentsOnPost from "../../components/Comments/CommentsOnPost";
import { useEffect, useState } from "react";

const PostDetails = () => {
  const data = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const {
    _id,
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
  

  const {user} = useAuth()
  console.log(user);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.postedTime = new Date();
    data.rootPostId = _id;
    data.email = user.email;
    data.image = user.photoURL
    data.name = user.displayName
    axiosSecure.post('/comments', data).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: "Done!",
          text: "Thanks for your comment",
          icon: "success",
        });
      }
    });
  };

  const [comments, setComments] = useState([])
  const {id} = useParams()
  console.log(id);
  const rootPostId = id;

 useEffect( () =>{
  axiosSecure.get(`/comments?rootPostId=${rootPostId}`)
  .then(res =>{
    console.log(res.data);
    setComments(res.data)
  })
 },[axiosSecure, rootPostId]) 

 console.log(comments.length);
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
          <p className=" text-gray-500 text-sm font-normal">
            {" "}
            Posted At: {postedTime}
          </p>
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
          <span className=" font-bold">Post Description: </span>{" "}
          {postDescription}
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
            <FaRegCommentAlt></FaRegCommentAlt> <span>{comments.length}</span>
          </button>
          |
          <button className=" flex gap-2 items-center justify-center">
            <FaRegShareSquare />
          </button>
        </div>
      </div>

      {/* comment section */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="textarea textarea-bordered w-full h-52 my-6"
          placeholder="Write your comment here......"
          {...register("comment", { required: true })}
        />
        <Button title={"Submit"} type={"secondary"}></Button>
      </form>
      <CommentsOnPost></CommentsOnPost>
    </div>
  );
};

export default PostDetails;
