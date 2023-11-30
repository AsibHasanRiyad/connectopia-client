import {useParams } from "react-router-dom";
import { FaRegCommentAlt, FaRegShareSquare } from "react-icons/fa";
import { BiDislike, BiLike } from "react-icons/bi";
import Button from "../../components/Shared/Button";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import CommentsOnPost from "../../components/Comments/CommentsOnPost";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const PostDetails = () => {
  // const data = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const {id} = useParams()

    // instead of loader data if we use query we can refetch the data so that after adding like or dislike it will update instantly
    const { data = [], refetch } = useQuery({
      queryKey: ["id", id],
      queryFn: async () => {
        const res = await axiosSecure.get(`/post/${id}`);
        return res.data;
      },
    });
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
  // console.log(data);
  // console.log(data);



  const { user } = useAuth();
  // console.log(user);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.postedTime = new Date();
    data.rootPostId = _id;
    data.email = user.email;
    data.image = user.photoURL;
    data.name = user.displayName;
    // console.log(data);
    axiosSecure.post("/comments", data).then((res) => {
      // console.log(res);
      if (res.status === 200) {
        Swal.fire({
          title: "Done!",
          text: "Thanks for your comment",
          icon: "success",
        });
      }
    });
  };

  const [comments, setComments] = useState([]);
  // const { id } = useParams();
  // console.log(id);
  const rootPostId = id;

  useEffect(() => {
    axiosSecure.get(`/comments?rootPostId=${rootPostId}`).then((res) => {
      // console.log(res.data);
      setComments(res.data);
    });
  }, [axiosSecure, rootPostId]);

  // console.log(comments.length);

  
  //handel UpVote
  const handelUpVote = () => {
    axiosSecure.patch(`/post/upvote/${_id}`).then((res) => {
      // console.log(res);
      if (res.status === 200) {
        Swal.fire({
          title: "Voted",
          text: "Thanks for your contribution",
          icon: "success",
        });
        refetch()
      }
    });
  };

  //handel DownVote
  const handelDownVote = () => {
    axiosSecure.patch(`/post/downvote/${_id}`).then((res) => {
      // console.log(res.data);
      if (res.status === 200) {
        Swal.fire({
          title: 'Thanks' ,
          text: "Thanks for your feedback",
          icon: "success",
        });
        refetch()
      }
    });
  };
  return (
    <div className=" w-full py-6 bg-transparent  rounded-lg shadow-sm   ">
      <Helmet>
        <title>Post Details</title>
      </Helmet>
      <div className="flex items-center">
        <img
          className="hidden object-cover w-10 h-10 mr-4 rounded-full sm:block"
          src={authorImage}
          alt="avatar"
        />
        <h1 className="font-bold text-gray-100 cursor-pointer  ">
          {name}
          <p className=" text-gray-300 text-sm font-normal">
            {" "}
            Posted At: {postedTime}
          </p>
        </h1>
      </div>
    <hr  className=" mt-2"/>
      <div className="mt-4">
        <h1 className=" text-2xl md:text-4xl my-3 font-bold text-gray-200 dark:text-white  dark:hover:text-gray-200">
          {" "}
          {postTitle}{" "}
        </h1>
        <p className="mt-2 text-gray-200   "> Tags: #{tags}</p>
        <p className="mt-2 text-gray-200    text-base md:text-xl">
          {" "}
          <span className=" text-justify text-gray-200 font-bold"> Post Description: </span>{" "}
          {postDescription}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className=" flex gap-4 text-gray-100  px-4 py-2 rounded text-2xl">
          <button
            onClick={handelUpVote}
            className=" flex gap-2 items-center justify-center"
          >
            <BiLike className="transform hover:scale-150 transition duration-500 ease-out text-gray-100" /> <span>{upVote}</span>
          </button>
          |
          <button
            onClick={handelDownVote}
            className=" flex gap-2 items-center justify-center"
          >
            <BiDislike className="transform hover:scale-150 transition duration-500 ease-out text-gray-100"/> <span>{downVote}</span>
          </button>
          |
          <button className=" flex gap-2 items-center justify-center">
            <FaRegCommentAlt className=" text-gray-100 transform hover:scale-150 transition duration-500 ease-out"></FaRegCommentAlt> <span>{comments.length}</span>
          </button>
          |
          <button className=" flex gap-2 items-center justify-center">
            <FaRegShareSquare className=" text-gray-100 transform hover:scale-150 transition duration-500 ease-out"/>
          </button>
        </div>
      </div>

      {/* comment section */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="textarea bg-transparent border border-white shadow-md shadow-white text-white textarea-bordered w-full h-52 my-6"
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
