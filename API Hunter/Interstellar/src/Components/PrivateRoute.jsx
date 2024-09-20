import { useContext } from "react";
import { Authcontext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
    const {auth}=useContext(Authcontext)

    if(!auth.isAuth){
        return  <Navigate to="/login" />
    }
    return children
}

export default PrivateRoute;
