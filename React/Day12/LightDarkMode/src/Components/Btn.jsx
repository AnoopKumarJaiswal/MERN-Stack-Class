import { darkLight } from "../App"
import { useContext } from "react"


export function Btn()
{
    const {show , setShow} = useContext(darkLight)
    return (
        <div className="border h-[100vh] w-[50vw] flex justify-center items-center gap-[40px] bg-amber-100">
            {/* <button className="shadow-[10px_10px_10px_black] h-[70px] text-5xl rounded-3xl cursor-pointer bg-amber-100 hover:scale-[1.3] " onClick={() =>{setShow(true)}}>☀️</button> */}
            {/* <button className="shadow-[10px_10px_10px_black] h-[70px] text-5xl rounded-3xl cursor-pointer bg-amber-100 hover:scale-[1.3] " onClick={() =>{setShow(false)}}>🌚</button> */}
            <button className="shadow-[10px_10px_10px_black] h-[70px] text-5xl rounded-3xl cursor-pointer bg-amber-800 hover:scale-[1.3] " onClick={() =>{setShow(!show)}}>{show ? "🌚" : "☀️"}</button>
        </div>
    )
}