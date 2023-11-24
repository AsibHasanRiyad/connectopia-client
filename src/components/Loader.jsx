import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className=" flex 
    flex-col 
    justify-center 
    items-center
     min-h-screen"
    >
      <BounceLoader size={100} color="blue" />
    </div>
  );
};

export default Loader;
