
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import CommentsTable from "./CommentsTable";



const Comments = () => {
  const axiosSecure = useAxiosSecure()
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
//  console.log(comments);

    return (
        <div>
             <h1 className=" text-center text-gray-100 text-5xl font-bold py-6">Comments</h1>
             <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className=" text-green-500">
              <th>Commenter</th>
              <th>Comments</th>
              <th>Time</th>
              <th>Feedback</th>
              <th> Report </th>
            </tr>
          </thead>
          <tbody>
            {
              comments.map(com => <CommentsTable key={com._id} com={com} > </CommentsTable> )
            }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Comments;