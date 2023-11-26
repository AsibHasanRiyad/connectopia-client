import { FaComment} from "react-icons/fa";

/* eslint-disable react/prop-types */
const MyPostTable = ({ post }) => {
  const { upVote, downVote, postTitle } = post;
  return (
    <>
      <tr>
        <td>{postTitle}</td>
        <td>{upVote}</td>
        <td>{downVote}</td>
        <td>
          <button className="btn btn-circle btn-md btn-outline hover:bg-[#132c50]">
            <FaComment></FaComment>
          </button>
        </td>
        <td>
          <button className="btn btn-circle btn-md btn-outline hover:bg-[#132c50]">
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
