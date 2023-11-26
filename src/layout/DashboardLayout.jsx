import { Outlet } from "react-router-dom";
import Sidebar from "../page/Dashboard/Sidebar/Sidebar";


const DashboardLayout = () => {
    return (
        <div className=" flex">
            <div className=" min-h-screen">
                <Sidebar></Sidebar>
            </div>
            <div className=" flex-1 px-4 lg:px-6 py-12 lg:py-6">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;