import { Link, NavLink } from "react-router-dom";

export function Navbar()
{
    return (
        <div className="h-[50px] w-[100vw] flex justify-evenly bg-blue-400 text-white font-bold items-center">
            <NavLink to={"about"}  className={({isActive}) => isActive ? "text-red-500" : ""}>About</NavLink>
            <NavLink to={"home"}  className={({isActive}) => isActive ? "text-red-500" : ""}>Home</NavLink>
            <NavLink to={"profile"}  className={({isActive}) => isActive ? "text-red-500" : ""}>Profile</NavLink>
            <NavLink to={"login"}  className={({isActive}) => isActive ? "text-red-500" : ""}>Login</NavLink>
        </div>
    )
}
