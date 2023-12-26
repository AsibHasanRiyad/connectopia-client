/* eslint-disable react/prop-types */

const Announcements = ({ announcement }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <div className="flex w-full overflow-hidden bg-transparent border border-slate-600 rounded-lg shadow-xl   ">
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
