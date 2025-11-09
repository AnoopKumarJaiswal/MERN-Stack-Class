import { Link } from "react-router-dom"

const Navbar = () =>{
    return (
        <div className="bg-blue-700 text-white flex justify-between items-center h-[80px] px-[20px] text-2xl">
            <Link className="" to={'/one'}>One</Link>
            <Link className="" to={'/two'}>Two</Link>
            <Link className="" to={'/three'}>Three</Link>
        </div>
    )
}

export default Navbar