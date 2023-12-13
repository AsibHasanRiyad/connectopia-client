import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
// import Container from "../components/Container";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const { loading } = useAuth();
  if (loading) {
    return <Loader></Loader>;
  } else
    return (
      <div
      className=" bg-[#132c50]"
        data-aos="fade-down"
        data-aos-offset="100"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <NavBar></NavBar>
        {/* <Container> */}
         <div className=" min-h-screen">
         <Outlet></Outlet>
         </div>
        {/* </Container> */}
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;
