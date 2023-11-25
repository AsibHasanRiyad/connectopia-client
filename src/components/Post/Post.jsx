import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Pos from "./Pos";
import Button from "../Shared/Button";


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
  // console.log(post);
  const reversedPost = post.slice().reverse();

  return (
    <div className=" col-span-4 order-2 md:order-1 mr-0 md:mr-6 lg:mr-10">
      <div className=" flex items-center justify-between mb-4">
      <h1 className=" text-6xl"> News Feed </h1>
      <Button type={'primary'} title={'Short By Popularity'}></Button>
      </div>
      <hr />
      <div className=" space-y-8 mt-6">
        {reversedPost.map((pos) => (
          <Pos pos={pos} key={pos._id}></Pos>
        ))}
      </div>
    </div>
  );
};

export default Post;
