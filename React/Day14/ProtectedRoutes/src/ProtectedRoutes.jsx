import { Navigate, Outlet } from "react-router-dom";
import { UseMyContext } from "./Utills/Context";

export function Protect()
{
    const UserData = UseMyContext()
    return UserData ? <Outlet /> : <Navigate to={"/login"} />
}