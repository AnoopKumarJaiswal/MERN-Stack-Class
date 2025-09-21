import { Link, NavLink, useNavigate } from "react-router-dom";

export function Navbar()
{
    const fn =  useNavigate()
    return (
        <div className="bg-black text-white font-bold  flex justify-between h-[50px] px-[20px] items-center">
          {/* <Link to={"/a"}>Apple</Link>
          <Link to={"/b"}>Bat</Link>
          <Link to={"/c"}>Cat</Link> */}
        
        
        {/* <button onClick={() =>{fn("/a")}}>Apple</button>
        <button onClick={() =>{fn("/b")}}>Bat</button>
        <button onClick={() =>{fn("/c")}}>Cat</button> */}
        


        {/* <NavLink to={"/a"} className={({isActive}) => isActive ? "text-amber-700" : ""} >Apple</NavLink>
        <NavLink to={"/b"} className={({isActive}) => isActive ? "text-amber-700" : ""} >Bat</NavLink>
        <NavLink to={"/c"} className={({isActive}) => isActive ? "text-amber-700" : ""} >Cat</NavLink> */}
        
                                            


        {/* <NavLink to={"/a"} className={({isActive}) => {return isActive ? "text-amber-700" : ""}} >Apple</NavLink>
        <NavLink to={"/b"} className={({isActive}) => {return isActive ? "text-amber-700" : ""}} >Bat</NavLink>
        <NavLink to={"/c"} className={({isActive}) => {return isActive ? "text-amber-700" : ""}} >Cat</NavLink> */}



        <NavLink to={"/a"} className={({isActive}) => (isActive ? "text-amber-700" : "")} >Apple</NavLink>
        <NavLink to={"/b"} className={({isActive}) => (isActive ? "text-amber-700" : "")} >Bat</NavLink>
        <NavLink to={"/c"} className={({isActive}) => (isActive ? "text-amber-700" : "")} >Cat</NavLink>
        </div>
    )
}