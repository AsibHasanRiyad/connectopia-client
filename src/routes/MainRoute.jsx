import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import MainLayout from "../layout/MainLayout";
import SignUp from "../page/SignUp/SignUp";
import LogIn from "../page/LogIn/LogIn";
import DashboardLayout from "../layout/DashboardLayout";
import MyProfile from "../page/Dashboard/MyProfile";
import AddPost from "../page/Dashboard/AddPost/AddPost";
import MyPost from "../page/Dashboard/MyPost";
import PostDetails from "../page/PostDetails/PostDetails";
import Announcement from "../page/AdminDashboard/Announcement/Announcement";
import Report from "../page/AdminDashboard/Report/Report";
import ManageUser from "../page/AdminDashboard/ManageUser/ManageUser";
import AdminProfile from "../page/AdminDashboard/AdminProfile/AdminProfile";
import AnnouncementPage from "../page/Announcement/AnnouncementPage";
import Membership from "../page/Membership/Membership";
import AdminRoutes from "./AdminRoutes";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../page/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/post/:id",
        element: <PostDetails></PostDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/post/${params.id}`),
      },
      {
        path: "/announcement",
        element: <PrivateRoute><AnnouncementPage></AnnouncementPage>  </PrivateRoute>,
      },
      {
        path: "/membership",
        element:<PrivateRoute> <Membership></Membership>  </PrivateRoute>,
      },
    ],
  },
  {
    path: "signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "login",
    element: <LogIn></LogIn>,
  },
  // dashboard
  {
    path: "dashboard",
    element:<PrivateRoute>  <DashboardLayout></DashboardLayout> </PrivateRoute>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      // normal user route
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "addPost",
        element: <AddPost></AddPost>,
      },
      {
        path: "myPost",
        element: <MyPost></MyPost>,
      },
      //admin routes
      {
        path: "adminProfile",
        element: (
          <AdminRoutes>
            <AdminProfile></AdminProfile>
          </AdminRoutes>
        ),
      },
      {
        path: "announcement",
        element: (
          <AdminRoutes>
            <Announcement></Announcement>
          </AdminRoutes>
        ),
      },
      {
        path: "report",
        element: (
          <AdminRoutes>
            <Report></Report>
          </AdminRoutes>
        ),
      },
      {
        path: "manageUser",
        element: (
          <AdminRoutes>
            <ManageUser></ManageUser>
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;
