import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import Button from "../../../components/Shared/Button";

const Announcement = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const onSubmit = (data) => {
    data.postedTime = new Date();
    // console.log(data);
    axiosSecure.post("/announcement", data).then((res) => {
      // console.log(res.data);
      if (res.status === 200) {
        Swal.fire({
          title: "Announcement Is added!",
          text: "Visit announcement page to see it",
          icon: "success",
        });
      }
    });
  };
  return (
    <div>
      <h1 className=" text-4xl text-green-500 text-center my-16 font-bold">
        Make an Announcement
      </h1>
      {/* form */}
      <div className=" mx-4 md:mx-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-100  ">
                Author Image
              </label>
              <input
                defaultValue={user?.photoURL}
                type="text"
                {...register("authorImage", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-100 bg-transparent border border-gray-200 rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-100  ">
                Author Name
              </label>
              <input
                defaultValue={user?.displayName}
                type="text"
                {...register("name", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-100 bg-transparent border border-gray-200 rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-100  ">
                Author Email
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                {...register("email", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-100 bg-transparent border border-gray-200 rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="">
              <label className="text-gray-100  ">Title</label>
              <input
                type="text"
                {...register("title", { required: true })}
                className="block w-full px-4 py-2 mt-2 text-gray-100 bg-transparent border border-gray-200 rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div>
            <div className=" mt-4">
              <label className="text-gray-100  ">
                Description
              </label>
              <textarea
                type="text"
                {...register("description", { required: true })}
                className="block w-full h-32 px-4 py-2 mt-2 text-gray-100 bg-transparent border border-gray-200 rounded-md       dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <span type="submit">
              <Button title={"Make Announcement"} type={"secondary"}></Button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Announcement;
