// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import Pos from "./Pos";
import Button from "../Shared/Button";
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { SearchContext } from "../../provider/searchProvider";

const Post = () => {
  const [post, setPost] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [totalPost, setTotalPost] = useState(0);
  // console.log(post.length);
  // const reversedPost = post.slice().reverse();
  const reversedPost = post.sort((a, b) => new Date(b.postedTime) - new Date(a.postedTime));
  // console.log('reversing post order',reversedPost);

  //total post
  useEffect(() => {
    fetch("https://connectopia-server.vercel.app/postCount")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.count);
        setTotalPost(data.count);
      });
  }, []);

  const [currentPage, setCurrentPage] = useState(0);
  const postPerPage = 5;
  const numberOfPage = Math.ceil(totalPost / postPerPage);
  // console.log(numberOfPage);
  const pages = [];
  for (let i = 0; i < numberOfPage; i++) {
    pages.push(i);
  }



  // console.log(pages);
  // console.log(currentPage);

  //alternative 1
  // const axiosPublic = useAxiosPublic();
  // const { data: post = [] } = useQuery({
  //   queryKey: ["post"],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get(`/post`);
  //     return res.data;
  //     //   console.log(res.data);
  //   },
  // });

  //alternative 2
  // useEffect(() =>{
  //   fetch(`https://connectopia-server.vercel.app/post?page=${currentPage}&size=${postPerPage}`)
  //   .then(res => res.json())
  //   .then(data => setPost(data))
  // },[currentPage])

  //search
  // const [tag, setTag] = useState("");
  // const handelSearch = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const input = form.input.value;
  //   console.log(input);
  //   setTag(input);
  // };


  //search functionality is moved to Search provider using context api to search from different component



  
  
  const {tag} = useContext(SearchContext)

  //alternative  3
  useEffect(() => {
    const post = async () => {
      const res = await axiosPublic.get(
        `/post?page=${currentPage}&size=${postPerPage}&tag=${tag}`
      );
      setPost(res.data);
    };
    post();
  }, [axiosPublic, currentPage, tag]);

  return (
    <div className=" col-span-4  mr-0 md:mr-6 lg:mr-10">
      <div className=" flex items-center justify-between mb-4">
        <h1 className=" font-bold text-gray-100 text-2xl md:text-4xl lg:text-6xl">
          {" "}
          News Feed{" "}
        </h1>
        <Button type={"secondary"} title={"Short By Popularity"}></Button>
      </div>
      <hr />
      <div>
        {/* <form onSubmit={handelSearch}>
          <input
            className=" w-full  bg-gray-200 p-4 "
            type="text"
            name="input"
            placeholder="Search......."
          />
          <button type=" submit" className=" btn btn-primary">
            Submit
          </button>
        </form> */}
      </div>
      <hr />
      <div className=" space-y-8 mt-6">
       {
         reversedPost.map(pos => <Pos pos={pos} key={pos._id}></Pos> )
       }

      </div>
      <div className=" flex flex-wrap gap-2 justify-center items-center my-6">
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={
              currentPage === page
                ? "btn btn-circle bg-blue-500 text-xl border-none text-white hover:bg-blue-500  mr-3 "
                : "btn btn-circle bg-green-500 text-xl border-none text-white hover:bg-blue-500 mr-3"
            }
            key={page}
          >
            {" "}
            {page}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Post;
