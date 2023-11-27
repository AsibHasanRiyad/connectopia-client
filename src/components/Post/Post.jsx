// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import Pos from "./Pos";
import Button from "../Shared/Button";
import { useEffect, useState } from "react";

const Post = () => {
  const [post, setPost] = useState([])
  const [totalPost,setTotalPost] = useState(0)
    // console.log(post.length);
    const reversedPost = post.slice().reverse();

    //total post
    useEffect( () =>{
      fetch('http://localhost:5001/postCount')
      .then(res => res.json())
      .then(data =>{
        console.log(data.count);
        setTotalPost(data.count)
      })
    },[])
    
    const [currentPage, setCurrentPage] = useState(0);
    const postPerPage = 5;
    const numberOfPage = Math.ceil(totalPost / postPerPage);
    // console.log(numberOfPage);
    const pages = [];
    for (let i = 0; i < numberOfPage; i++) {
      pages.push(i);
    }
    // console.log(pages);
    console.log(currentPage);


  // const axiosPublic = useAxiosPublic();
  // const { data: post = [] } = useQuery({
  //   queryKey: ["post"],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get(`/post`);
  //     return res.data;
  //     //   console.log(res.data);
  //   },
  // });


  useEffect(() =>{
    fetch(`http://localhost:5001/post?page=${currentPage}&size=${postPerPage}`)
    .then(res => res.json())
    .then(data => setPost(data))
  },[currentPage])





  return (
    <div className=" col-span-4  mr-0 md:mr-6 lg:mr-10">
      <div className=" flex items-center justify-between mb-4">
        <h1 className=" font-bold text-2xl md:text-4xl lg:text-6xl">
          {" "}
          News Feed{" "}
        </h1>
        <Button type={"primary"} title={"Short By Popularity"}></Button>
      </div>
      <hr />
      <div className=" space-y-8 mt-6">
        {reversedPost.map((pos) => (
          <Pos pos={pos} key={pos._id}></Pos>
        ))}
      </div>
      <div className=" flex justify-center items-center my-6">
        {pages.map((page) => (
          <button
          onClick={() => setCurrentPage(page)}
            className={currentPage === page ?   'btn btn-circle bg-green-600 text-white hover:bg-green-600  mr-3 ' :'btn btn-circle bg-[#132c50] text-white hover:bg-green-700 mr-3'}
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
