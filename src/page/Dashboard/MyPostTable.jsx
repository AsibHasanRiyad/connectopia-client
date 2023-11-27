import { FaComment } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import usePost from "../../hooks/usePost";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MyPostTable = ({ post }) => {
  const { upVote, downVote, postTitle, _id } = post;
  const axiosSecure = useAxiosSecure();
  const [, refetch] = usePost();
  const handelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`post/${id}`).then((res) => {
          // console.log(res.data);
          refetch();
          if (res.data.deletedCount > 1) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <>
      <tr>
        <td>{postTitle}</td>
        <td>{upVote}</td>
        <td>{downVote}</td>
        <td>
          <Link to={`/comments/${_id}`}>
            <button className="btn btn-circle btn-md btn-outline hover:bg-[#132c50]">
              <FaComment></FaComment>
            </button>
          </Link>
        </td>
        <td>
          <button
            onClick={() => handelDelete(_id)}
            className="btn btn-circle btn-md btn-outline hover:bg-[#132c50]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyPostTable;
