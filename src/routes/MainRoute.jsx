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

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/post/:id',
                element:<PostDetails></PostDetails>,
                loader: ({params}) => fetch(`http://localhost:5001/post/${params.id}`)
            },
        ]
    },
    {
        path:'signUp',
        element:<SignUp></SignUp>
    },
    {
        path:'login',
        element:<LogIn></LogIn>
    },
    // dashboard
    {
        path:'dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            // normal user route
            {
                path:'myProfile',
                element:<MyProfile></MyProfile>
            },
            {
                path:'addPost',
                element:<AddPost></AddPost>
            },
            {
                path:'myPost',
                element:<MyPost></MyPost>
            },
            //admin routes
            {
                path:'adminProfile',
                element:<AdminProfile></AdminProfile>
            },
            {
                path:'announcement',
                element:<Announcement></Announcement>
            },
            {
                path:'report',
                element:<Report></Report>
            },
            {
                path:'manageUser',
                element:<ManageUser></ManageUser>
            },

        ]
    }
])

export default router