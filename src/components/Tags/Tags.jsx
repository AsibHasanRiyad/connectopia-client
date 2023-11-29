import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import Loader from "../Loader";

const Tags = () => {
  const axiosSecure = useAxiosSecure();
  const {loading} = useContext(AuthContext)
  const [tags, setTags] = useState([])
  useEffect(() => {
    axiosSecure.get("/tags").then((res) => {
      // console.log(res.data);
      setTags(res.data);
    });
  }, [axiosSecure]);
  console.log(tags);
  // console.log(tags.map(tag => <h1 key={tag._id}>{tag}</h1> ))


  // const tags = [
  //   "#Technology",
  //   "#Travel",
  //   "#Fitness",
  //   "#Foodie",
  //   "#Photography",
  //   "#Music",
  //   "#Fashion",
  //   "#Art",
  //   "#Science",
  //   "#Books",
  //   "#News",
  //   "#Sports",
  // ];
if (loading) {
  return <Loader></Loader>
}
  return (
    <div 
    data-aos="fade-down"
    data-aos-offset="100"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1000"
    className=" col-span-2  bg-[#132c50] rounded-md">
      <h1 className=" text-xl md:text-2xl lg:text-4xl text-green-500 font-semibold">
      Optimize searches by tags:
      </h1>
      <div className=" border border-green-500 rounded-md  p-6 shadow-md shadow-green-900 flex flex-wrap gap-4 mt-4 ">
        {tags.map((tag) => (
          <p className=" text-gray-200" key={tag._id}>#{tag.value}</p>
        ))}
      </div>
    </div>
  );
};

export default Tags;
