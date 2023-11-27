import { useContext } from "react";
import bannerImage from "../../assets/5267.jpg";
import Button from "../Shared/Button";
import { SearchContext } from "../../provider/searchProvider";

const Banner = () => {
    const {getSearchValue} = useContext(SearchContext)
    const handelSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const input = form.input.value;
        // console.log(input);
        const lowercase = input.toLowerCase()
        console.log(lowercase);
        getSearchValue(lowercase);
      };
  return (
    <div className="container py-8 md:py-16 mx-auto">
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className=" text-3xl md:text-4xl font-semibold text-gray-800 dark:text-white lg:text-5xl">
              Best place to express <br /> your{" "}
              <span className="text-blue-500 ">opinion</span>
            </h1>

            <p className="my-4 text-gray-600 dark:text-gray-400 text-base md:text-xl text-justify">
              Connect, Share, Explore: Your Social Universe Awaits! Dive into a
              world of ideas, moments, and conversations. Join us in shaping a
              vibrant community where every voice matters. Welcome to{" "}
              <span className="text-blue-500 ">Connectopia</span> where your
              story unfolds
            </p>
            <Button type={"primary"} title={"Post Your Idea"}></Button>
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            className="w-full h-full lg:max-w-3xl"
            src={bannerImage}
            alt="Catalogue-pana.svg"
          />
        </div>
      </div>
      <div className="flex flex-col w-full ">
        <h1 className="text-3xl font-extrabold text-center lg:text-5xl 2xl:text-6xl">
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-blue-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
            Search
          </span>

          <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-blue-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
            Post
          </span>
        </h1>
        <div className="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
        <form onSubmit={handelSearch}>
          <input
            className=" w-full  bg-gray-200 p-4 "
            type="text"
            name="input"
            placeholder="Search......."
          />
          <button type=" submit" className=" btn btn-primary">
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
