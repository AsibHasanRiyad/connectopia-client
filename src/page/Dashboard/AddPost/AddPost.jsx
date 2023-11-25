import useAuth from "../../../hooks/useAuth";
import Select from 'react-select'

const AddPost = () => {
  const { user } = useAuth();
  const options = [
    { "value": 'technology', "label": 'Technology' },
    { "value": 'travel', "label": 'Travel' },
    { "value": 'fitness', "label": 'Fitness' },
    { "value": 'foodie', "label": 'Foodie' },
    { "value": 'photography', "label": 'Photography' },
    { "value": 'music', "label": 'Music' },
    { "value": 'fashion', "label": 'Fashion' },
    { "value": 'art', "label": 'Art' },
    { "value": 'science', "label": 'Science' },
    { "value": 'books', "label": 'Books' },
    { "value": 'news', "label": 'News' },
    { "value": 'sports', "label": 'Sports' }
  ]
  
  const handelChange = e =>{
    console.log(e);
  }

  return (
    <div className=" min-h-screen flex justify-center items-center">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Create Post
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Author Image
              </label>
              <input
                defaultValue={user?.photoURL}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Author Name
              </label>
              <input
                defaultValue={user?.displayName}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Author Email
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Up Vote
              </label>
              <input
                type="number"
                defaultValue={0}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Down Vote
              </label>
              <input
                type="number"
                defaultValue={0}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
            <label className="text-gray-700 dark:text-gray-200">
                Down Vote
              </label>
            <Select className=" mt-2" 
            onChange={handelChange}
            options={options} />
            </div>
          </div>
          <div>
            <div className=" my-4">
              <label className="text-gray-700 dark:text-gray-200">
                Post Title
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Post Description
              </label>
              <textarea
                type="text"
                className="block w-full h-32 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Post
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddPost;
