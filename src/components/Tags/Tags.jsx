const Tags = () => {
  const tags = [
    "#Technology",
    "#Travel",
    "#Fitness",
    "#Foodie",
    "#Photography",
    "#Music",
    "#Fashion",
    "#Art",
    "#Science",
    "#Books",
    "#News",
    "#Sports",
  ];

  return (
    <div className=" col-span-2 order-1 md:order-2 bg-[#132c50]  p-4 rounded-md h-80">
      <h1 className=" text-4xl text-gray-200 font-semibold">
        Use these tags to search post for finding better result
      </h1>
      <div className=" flex flex-wrap gap-4 mt-4">
        {tags.map((tag) => (
          <p className=" text-gray-200" key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default Tags;
