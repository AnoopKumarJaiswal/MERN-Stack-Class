import { useContext } from "react"
import { countContext } from "../App"

export function Display()
{
    const {count ,setcount} = useContext(countContext)
    return (
        
        <div className="flex justify-center items-center w-[50vw]  flex-col gap-[200px] bg-amber-50 ">
           
           <p className="text-8xl font-semibold → 600">Display</p>
           <p className="mb-[200px] text-6xl font-bold → 500">{ count}</p>
        </div>
    )
}