import { useForm } from "react-hook-form";
import Button from "../../../components/Shared/Button";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddTags = () => {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const onSubmit = (data) => {
    data.label = data.value;
    data.value = data.value.toLowerCase()
    console.log(data);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Add Tag",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/tags", data).then((res) => {
          console.log(res.data);
          if (res.status === 200) {
            Swal.fire({
              title: "Added!",
              text: `${data.value} is added in the tag option`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h1 className=" text-4xl text-[#132c50] font-semibold mb-5">
        Add Post Tags:
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Enter tag........"
            {...register("value", { required: true })}
            className="block w-full px-4 py-2 my-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <Button type={"secondary"} title={"Add"}></Button>
      </form>
    </div>
  );
};

export default AddTags;
