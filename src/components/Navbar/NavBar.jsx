import { Link, NavLink } from "react-router-dom";
import Container from "../Container";
import Button from "../Shared/Button";
import "./NavBar.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import useAnnouncement from "../../hooks/useAnnouncement";
import useAdmin from "../../hooks/useAdmin";
import { useState } from "react";

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);
  const { user, logOut } = useAuth();
  const handelLogout = () => {
    logOut().then((res) => {
      console.log(res);
    });
  };

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 90) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  //announcement count
  const [announcement] = useAnnouncement();
  // console.log(announcement);
  const [isAdmin] = useAdmin();

  const navItems = (
    <>
      {isAdmin ? (
        <>
          <li className=" transform hover:scale-125 transition duration-500 ease-out">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " bg-green-500 text-gray-100 italic px-2 py-1 rounded"
                  : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className=" transform hover:scale-125 transition duration-500 ease-out">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " bg-green-500 text-gray-100 italic px-2 py-1 rounded"
                  : ""
              }
              to={"/dashboard/manageUser"}
            >
              Manage User
            </NavLink>
          </li>
          <li className=" transform hover:scale-125 transition duration-500 ease-out">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " bg-green-500 text-gray-100 italic px-2 py-1 rounded"
                  : ""
              }
              to={"/dashboard/announcement"}
            >
              Make Announcement
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li className=" transform hover:scale-125 transition duration-500 ease-out">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " bg-green-500 text-gray-100 italic px-2 py-1 rounded"
                  : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className="transform hover:scale-125 transition duration-500 ease-out">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " bg-green-500 text-gray-100 italic px-2 py-1 rounded"
                  : ""
              }
              to={"/membership"}
            >
              Membership
            </NavLink>
          </li>
          <li className="transform hover:scale-125 transition duration-500 ease-out">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " bg-green-500 text-gray-100 italic px-2 py-1 rounded"
                  : ""
              }
              to={"/aboutUs"}
            >
              About Us
            </NavLink>
          </li>
          <li className="transform hover:scale-125 transition duration-500 ease-out">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " bg-green-500 text-gray-100 italic px-2 py-1 rounded"
                  : ""
              }
              to={"/contact"}
            >
              Contact
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div
      className={
        navBar
          ? "bg-[#1a365d] z-10 w-full sticky top-0 transform"
          : "bg-[#132c50] z-10 w-full sticky top-0 transition duration-500"
      }
    >
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
                  stroke="white"
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
            <Link to={"/"}>
              <img
                className=" w-64 hidden md:block"
                src="https://i.ibb.co/HN6b2g6/connectopia-high-resolution-logo-transparent.png"
                alt=""
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-5 text-[#F9FAFF]">{navItems}</ul>
          </div>
          <div className="navbar-end">
            <div className=" mx-6">
              <Link to={"/announcement"}>
                <button className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <IoMdNotificationsOutline className=" text-4xl text-white" />
                    <span className="badge badge-md bg-[#22b14c] text-white border-none indicator-item">
                      {" "}
                      {announcement.length}
                    </span>
                  </div>
                </button>
              </Link>
            </div>
            {user ? (
              <div className="dropdown dropdown-end z-20">
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
                    {isAdmin ? (
                      <Link to={"dashboard/adminProfile"}>
                        <h1 className=" text-[#1371ff] text-xl">Dashboard</h1>
                      </Link>
                    ) : (
                      <Link to={"dashboard/myProfile"}>
                        <h1 className=" text-[#1371ff] text-xl">Dashboard</h1>
                      </Link>
                    )}
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
