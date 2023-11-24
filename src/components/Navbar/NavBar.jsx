import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import Button from "../Shared/Button";
import "./NavBar.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const handelLogout = () => {
    logOut().then((res) => {
      console.log(res);
    });
  };
  const navItems = (
    <>
      <li className=" transform hover:scale-125 transition duration-500 ease-out">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li className="transform hover:scale-125 transition duration-500 ease-out">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to={"/membership"}
        >
          Membership
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-[#132c50] w-full">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <a>
              <img
                className=" w-64 hidden md:block"
                src="https://i.ibb.co/HN6b2g6/connectopia-high-resolution-logo-transparent.png"
                alt=""
              />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-5 text-[#F9FAFF]">{navItems}</ul>
          </div>
          <div className="navbar-end">
            <div className=" mx-6">
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <IoMdNotificationsOutline className=" text-4xl text-white" />
                  <span className="badge badge-md bg-[#22b14c] text-white border-none indicator-item">
                    {" "}
                    6
                  </span>
                </div>
              </button>
            </div>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <h1 className=" text-[#1371ff] text-xl">
                      {user?.displayName}
                    </h1>
                  </li>
                  <li>
                    <Link to={'dashboard/myProfile'}>
                      <h1 className=" text-[#1371ff] text-xl">Dashboard</h1>
                    </Link>
                  </li>
                  <li>
                    <button
                      className=" text-red-500 text-xl"
                      onClick={handelLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to={"login"}>
                <Button type={"secondary"} title={"Join Us"}></Button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;