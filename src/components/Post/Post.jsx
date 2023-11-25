import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Pos from "./Pos";


const Post = () => {
  const axiosPublic = useAxiosPublic();
  const { data: post = [] } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/post`);
      return res.data
    //   console.log(res.data);
    },
  });
  console.log(post);

  return (
    <div className=" col-span-4 order-2 md:order-1">
      <h1 className=" text-6xl"> News Feed </h1>
      <div className=" space-y-8 mr-0 md:mr-6 lg:mr-10 mt-6">
        {post.map((pos) => (
          <Pos pos={pos} key={pos._id}></Pos>
        ))}
      </div>
    </div>
  );
};

export default Post;
