import { Link } from 'react-router-dom'


export function Navbar()
{
    return (
            <div className="flex bg-black text-white justify-between h-[50px] items-center p-[20px] fixed w-[100vw]"> 
                 <h3>Logo</h3>
                <div className="flex gap-[10px]" >
                    {/* <a href="/home">Home</a>
                    <a href="/About">About</a>
                    <a href="/profile">Profile</a> */}


                    <Link to={"/home"}>Home</Link>
                    <Link to={"/About"}>About</Link>
                    <Link to={"/profile"}>Profile</Link>
                </div>
            </div>
    )
}