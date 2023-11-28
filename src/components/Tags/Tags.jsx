import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";

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
  return <h1>Loading..........</h1>
}
  return (
    <div className=" col-span-2  bg-[#132c50]  p-4 rounded-md">
      <h1 className=" text-xl md:text-2xl lg:text-4xl text-gray-200 font-semibold">
        Use these tags to search post for finding better result
      </h1>
      <div className=" flex flex-wrap gap-4 mt-4">
        {tags.map((tag) => (
          <p className=" text-gray-200" key={tag._id}>#{tag.value}</p>
        ))}
      </div>
    </div>
  );
};

export default Tags;
