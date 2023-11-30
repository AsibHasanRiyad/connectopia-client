import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Select from "react-select";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import usePost from "../../../hooks/usePost";

// import Button from "../../../components/Shared/Button";
// import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../components/Loader";
// import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Button from "../../../components/Shared/Button";
import useStatus from "../../../hooks/useStatus";

const AddPost = () => {
  const { user, loading } = useAuth();
  // console.log(user?.email);
  const [tags, setTags] = useState("");
  const [option, setOption] = useState("");
  const axiosSecure = useAxiosSecure();
  const [post, refetch] = usePost();
  // console.log(post);
  // const [status, setStatus] = useState('')

  // const { data: currentUser } = useQuery({
  //   queryKey: ["currentUser", user?.email],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get("/users");
  //     return res.data;
  //   },
  // });
  // console.log(currentUser);

  //   const { data: currentUser, isLoading } = useQuery({
  //   queryKey: ["currentUser", user?.email],
  //   queryFn: async () => {
  //     const res = await axiosSecure.get(`/users?email=${user.email}`);
  //     return res.data;
  //   },
  // });
  // useEffect(() => {
  //   if (!isLoading && currentUser && currentUser.length > 0) {
  //     const currentStatus = currentUser[0].status;
  //     console.log(currentStatus);
  //     setStatus(currentStatus);
  //   }
  // }, [isLoading, currentUser, status]);

  // console.log('current user',currentUser);

  //instead of this using hooks
  const [status] = useStatus();
  // console.log(status);

  // const options = [
  //   { value: "technology", label: "Technology" },
  //   { value: "travel", label: "Travel" },
  //   { value: "fitness", label: "Fitness" },
  //   { value: "foodie", label: "Foodie" },
  //   { value: "photography", label: "Photography" },
  //   { value: "music", label: "Music" },
  //   { value: "fashion", label: "Fashion" },
  //   { value: "art", label: "Art" },
  //   { value: "science", label: "Science" },
  //   { value: "books", label: "Books" },
  //   { value: "news", label: "News" },
  //   { value: "sports", label: "Sports" },
  // ];
  //tags
  useEffect(() => {
    axiosSecure.get("/tags").then((res) => {
      console.log(res.data);
      setOption(res.data);
    });
  }, [axiosSecure]);

  const handelChange = (e) => {
    setTags(e.value);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.postedTime = new Date();
    data.tags = tags;
    console.log(data);
    axiosSecure.post("/post", data).then((res) => {
      console.log(res.data);
      refetch();
      if (res.status === 200) {
        Swal.fire({
          title: "Added!",
          text: "Your article has been posted to the timeline.",
          icon: "success",
        });
      }
    });
  };
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className=" min-h-screen flex justify-center items-center">
      <section className="max-w-4xl w-full p-6 mx-4 my-4 bg-transparent rounded-md shadow-md dark:bg-gray-800">
        {status === "Bronze" && post.length >= 5 ? (
          <div>
            <h1 className="  text-3xl text-center text-green-500 font-bold">
              Become a member to create more post
            </h1>
            <div className=" flex justify-center items-center my-6">
              <Link to={"/membership"}>
                <Button title={"Become A Member"} type={"danger"}></Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className=" bg-transparent">
            <h2 className="text-lg font-semibold text-gray-100 capitalize dark:text-white">
              Create Post
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="text-gray-100 dark:text-gray-200">
                    Author Image
                  </label>
                  <input
                    defaultValue={user?.photoURL}
                    type="text"
                    {...register("authorImage", { required: true })}
                    className="block w-full px-4 py-2 mt-2 text-gray-100 bg-transparent border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-100 dark:text-gray-200">
                    Author Name
                  </label>
                  <input
                    defaultValue={user?.displayName}
                    type="text"
                    {...register("name", { required: true })}
                    className="block w-full px-4 py-2 mt-2 text-gray-100 bg-transparent border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-100 dark:text-gray-200">
                    Author Email
                  </label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    {...register("email", { required: true })}
                    className="block w-full px-4 py-2 mt-2 text-gray-100 bg-transparent border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-100 dark:text-gray-200">
                    Up Vote
                  </label>
                  <input
                    type="number"
                    {...register("upVote", { required: true })}
                    // defaultValue={0}
                    value={0}
                    className="block w-full px-4 py-2 mt-2 text-gray-100 bg-transparent border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-100 dark:text-gray-200">
                    Down Vote
                  </label>
                  <input
                    type="number"
                    {...register("downVote", { required: true })}
                    value={0}
                    className="block w-full px-4 py-2 mt-2 text-gray-100 bg-transparent border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
                <div>
                  <label className="text-gray-100  dark:text-gray-200">
                    Select Tag
                  </label>
                  <Select
                    className=" mt-2 "
                    onChange={handelChange}
                    options={option}
                    required
                  />
                </div>
              </div>
              <div>
                <div className=" my-4">
                  <label className="text-gray-100 dark:text-gray-200">
                    Post Title
                  </label>
                  <input
                    type="text"
                    {...register("postTitle", { required: true })}
                    className="block w-full px-4 py-2 mt-2 text-gray-100 bg-transparent border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-gray-100 dark:text-gray-200">
                    Post Description
                  </label>
                  <textarea
                    type="text"
                    {...register("postDescription", { required: true })}
                    className="block w-full h-32 px-4 py-2 mt-2 text-gray-100 bg-transparent border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6">
                {/* <button
                  type="submit"
                  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  Post
                </button> */}
                <Button type={"secondary"} title={"Post"}></Button>
              </div>
            </form>
          </div>
        )}
      </section>
    </div>
  );
};

export default AddPost;
