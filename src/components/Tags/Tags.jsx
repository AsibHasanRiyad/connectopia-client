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
    <div className=" col-span-2 order-1 md:order-2 bg-[#132c50] text-white p-4 rounded-md">
      <h1 className=" text-3xl">
        Use these tags to search post for finding better result
      </h1>
      <div className=" flex flex-wrap gap-4 mt-4">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default Tags;
