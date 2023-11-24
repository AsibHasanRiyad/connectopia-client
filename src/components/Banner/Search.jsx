import Button from "../Shared/Button";


const Search = () => {
    return (
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
                    <input type="text" className="px-6 w-[50vw] py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring sm:mx-2" placeholder="Enter tags" />

                    <Button title="Search" type={'primary'}></Button>
                </div>
            </div>
    );
};

export default Search;