/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";


const AdminRoutes = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin();
    const {user, loading} = useAuth();
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to={"/"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;