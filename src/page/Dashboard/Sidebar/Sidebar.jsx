import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoCreateOutline } from "react-icons/io5";
import {
  MdLibraryBooks,
  MdManageAccounts,
  MdOutlineReport,
} from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { TfiAnnouncement } from "react-icons/tfi";
import "./Sidebar.css";
import usePost from "../../../hooks/usePost";
const Sidebar = () => {
  const [post] = usePost();
  // TODO: make is admin dynamic
  const isAdmin = true;
  return (
    <div className="drawer lg:drawer-open z-10 h-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content absolute flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden m-4">
          <IoMdMenu className=" text-4xl text-black" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu space-y-4 text-center text-xl p-4 w-60 min-h-full bg-[#132c50]  text-white">
          {/* Sidebar content here */}

          {isAdmin ? (
            //admin
            <>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/dashboard/adminProfile"}
              >
                <p className="transform hover:scale-125 transition duration-500 ease-out flex justify-center items-center gap-2">
                  <CgProfile />
                  Admin Profile
                </p>
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/dashboard/manageUser"}
              >
                <p className="transform hover:scale-125 transition duration-500 ease-out flex justify-center items-center gap-2">
                  <MdManageAccounts />
                  Manage User
                </p>
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/dashboard/report"}
              >
                <p className="transform hover:scale-125 transition duration-500 ease-out flex justify-center items-center gap-2">
                  <MdOutlineReport />
                  Report
                </p>
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/dashboard/announcement"}
              >
                <p className="transform hover:scale-125 transition duration-500 ease-out flex justify-center items-center gap-2">
                  <TfiAnnouncement />
                  Announcement
                </p>
              </NavLink>
            </>
          ) : (
            // normal user
            <>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/dashboard/myProfile"}
              >
                <p className="transform hover:scale-125 transition duration-500 ease-out flex justify-center items-center gap-2">
                  <CgProfile />
                  My Profile
                </p>
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/dashboard/addPost"}
              >
                <p className="transform hover:scale-125 transition duration-500 ease-out flex justify-center items-center gap-2">
                  <IoCreateOutline />
                  Add Post
                </p>
              </NavLink>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                to={"/dashboard/myPost"}
              >
                <p className="transform hover:scale-125 transition duration-500 ease-out flex justify-center items-center gap-2">
                  <MdLibraryBooks />
                  My Post ({post.length})
                </p>
              </NavLink>
            </>
          )}
          <hr />
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to={"/"}
          >
            <p className="transform hover:scale-125 transition duration-500 ease-out flex justify-center items-center gap-2">
              <IoHome />
              Home
            </p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
