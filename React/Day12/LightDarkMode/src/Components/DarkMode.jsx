import { useContext } from "react"
import { darkLight } from "../App"
export function DarkMode()
{
    const {show , setShow} = useContext(darkLight)
    return(
        <div className={"w-[50vw] h-[100vh] border " + (show ? "bg-white" : "bg-black")}>

        </div>
    )
}