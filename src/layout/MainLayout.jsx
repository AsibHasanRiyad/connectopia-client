import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Container from "../components/Container";
import Loader from "../components/Loader";
import useAuth from "../hooks/useAuth";

const MainLayout = () => {
  const {loading} = useAuth()
  if (loading) {
      return <Loader></Loader>
  }
  else
  return (
    <div className=" px-4 lg:px-0">
      <NavBar></NavBar>
      <Container>
        <Outlet></Outlet>
      </Container>
    </div>
  );
};

export default MainLayout;