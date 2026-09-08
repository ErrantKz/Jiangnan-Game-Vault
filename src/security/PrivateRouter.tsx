import { Outlet } from "react-router";
import { Navigate } from "react-router";

function PrivateRouter(){
    const statusCode=localStorage.getItem("statusCode");
    return(
        statusCode? <Outlet/>:<Navigate to="/login"/> //Simplified version which is to be revised.
    )
}

export default PrivateRouter;