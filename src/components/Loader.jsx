import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className=" flex 
    flex-col 
    justify-center 
    items-center
    bg-[#122D51]
     min-h-screen"
    >
      <HashLoader size={50} color="#21C55D" />
    </div>
  );
};

export default Loader;
