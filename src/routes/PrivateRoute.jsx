/* eslint-disable react/prop-types */

import { useContext } from "react";
import Loader from "../components/Loader";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children
    }
    else{
        return <Navigate state={{from: location}} to={'/login'} replace></Navigate>
    }
};

export default PrivateRoute;