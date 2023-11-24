import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import MainLayout from "../layout/MainLayout";
import SignUp from "../page/SignUp/SignUp";
import LogIn from "../page/LogIn/LogIn";
import DashboardLayout from "../layout/DashboardLayout";
import MyProfile from "../page/Dashboard/MyProfile";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
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
            {
                path:'myProfile',
                element:<MyProfile></MyProfile>
            }
        ]
    }
])

export default router