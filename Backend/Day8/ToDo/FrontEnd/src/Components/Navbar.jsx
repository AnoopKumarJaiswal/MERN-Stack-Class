import {Link} from "react-router-dom"
const Navbar = () =>{
    return (
        <div className="bg-black h-[60px] w-[100vw] flex text-white justify-between items-center px-10">
            <h1>LOGO</h1>


            <div className="flex gap-[20px]">
             <Link to = {"/home"}>Home</Link>
             <Link to = {"/new"}>Add New Task</Link>
            </div> 
        </div>
    )
}


export default Navbar