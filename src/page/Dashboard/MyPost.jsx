import usePost from "../../hooks/usePost";

import MyPostTable from "./MyPostTable";

const MyPost = () => {
  const [post] = usePost();
  const reversedPost = post.slice().reverse();
  return (
    <div className=" col-span-4 order-2 md:order-1">
      <h1 className=" text-6xl"> My Post </h1>
      {/* <div className=" space-y-8 mr-0 md:mr-6 lg:mr-10 mt-6">
                {
                    reversedPost.map(pos => <MyPos pos={pos} key={pos._id}></MyPos>)
                }
            </div> */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Up Votes</th>
              <th>Down Votes</th>
              <th>Comment</th>
              <th> Delete </th>
            </tr>
          </thead>
          <tbody>
            {reversedPost?.map((post) => (
              <MyPostTable key={post._id} post={post}></MyPostTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPost;
