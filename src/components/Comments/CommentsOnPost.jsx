import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

const CommentsOnPost = () => {
  const axiosSecure = useAxiosSecure();
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  console.log(id);
  const rootPostId = id;

  useEffect(() => {
    axiosSecure.get(`/comments?rootPostId=${rootPostId}`).then((res) => {
      console.log(res.data);
      setComments(res.data);
    });
  }, [axiosSecure, rootPostId]);
  return (
    <div>
      {comments.map((com) => (
        <div className=" my-6" key={com._id}>
            <hr />
          <div className=" my-5">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={com.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{com.name}</div>
              <div className="text-sm opacity-50 w-44">{com.postedTime}</div>
            </div>
            <div>
                <p>{com.comment}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentsOnPost;
