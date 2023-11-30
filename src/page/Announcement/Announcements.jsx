/* eslint-disable react/prop-types */



const Announcements = ({ announcement }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <div className="flex w-full overflow-hidden bg-transparent border border-slate-800 rounded-lg shadow-xl   ">
        <div className="flex items-center justify-center bg-green-500">
          <svg
            className="w-10 h-10 text-white fill-current"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
          </svg>
        </div>

        <div className=" px-4 py-2 -mx-3">
          <div className="flex mx-3 items-center">
            <img
              className="hidden object-cover w-10 h-10 mr-4 rounded-full sm:block"
              src={announcement?.authorImage}
              alt="avatar"
            />
            <h1 className="font-bold text-gray-200 text-lg cursor-pointer  ">
              {announcement?.name}
              <p className=" text-gray-100 text-sm font-normal">
                {" "}
                Email: {announcement?.email}
              </p>
            </h1>
          </div>
          <hr className=" my-2" />
          <div className="mx-3 px-1">
            <span className="font-semibold text-2xl text-blue-500 dark:text-blue-400">
              {announcement?.title}
            </span>
            <p className="text-sm text-gray-100   mt-2 text-justify">
              {announcement?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
