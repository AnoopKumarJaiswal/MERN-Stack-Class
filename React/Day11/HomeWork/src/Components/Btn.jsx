import { useContext } from "react"
import { countContext } from "../App"

export function Btn()
{
    const {count ,setCount}= useContext(countContext)
    return (
        <div className="w-[50vw]  flex justify-center items-center gap-[200px] flex-col bg-amber-100">
            <p className="text-8xl font-semibold → 600">Button</p>
           
           
           
            <div className="flex gap-[20px] text-3xl mb-[200px] text-amber-50  ">
                <button  className="hover:scale-[1.1] h-[60px] w-[100px] rounded-2xl bg-green-800"  onClick={() =>{setCount(count+1)}}>+</button>
                <button  className="hover:scale-[1.1] h-[60px] w-[120px] rounded-2xl bg-red-600"    onClick={() =>{setCount(0)}}>Reset</button>
                <button  className="hover:scale-[1.1] h-[60px] w-[100px] rounded-2xl bg-amber-400"  onClick={() =>{setCount(count-1)}}>-</button>
            </div>

        </div>
    )
}



