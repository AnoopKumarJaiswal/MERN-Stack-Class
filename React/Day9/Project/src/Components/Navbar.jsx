import { Link } from "react-router-dom"

export function Navbar()
{
    return (
        <div>
            <div className="bg-black text-white flex justify-between h-[80px] items-center p-[20px] w-[100vw] fixed">
                <h1>LOGO</h1>
                <div className="flex gap-2">
                    {/* <p>Home</p>
                    <p>About</p>
                    <p>Profile</p> */}

                    <Link to={"/counter"} >Counter</Link>
                    <Link to={"/input"}>Input</Link>
                    <Link to={"/Harry"}>HP</Link>
                </div>
            </div>
        </div>
    )
}