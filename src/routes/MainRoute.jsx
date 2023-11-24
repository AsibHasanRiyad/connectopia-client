import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home/Home";
import MainLayout from "../layout/MainLayout";

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
    }
])

export default router