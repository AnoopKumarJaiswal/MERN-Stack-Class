import { useState } from "react"



export function Counter()
{
     const[count , setCount] = useState(0)
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] ">
            <h1 className="text-5xl mb-[40px] text-shadow-red-500">Counter App</h1>

        <div className="border  w-[300px] shadow-[10px_10px_10px_black] text-right">
            <div className="border w-[300px] text-5xl h-[50px] text-right">{count}</div>
            <div className=" bg-amber-800 flex justify-end gap-[10px] p-[20px]">
            <button onClick={() =>{setCount(count+1)}} className="text-white text-2xl bg-emerald-700 border w-[70px] h-[50px] rounded-full">+</button>
            <button onClick={() =>{setCount(0)}}       className="text-white text-2xl bg-red-500 border w-[70px] h-[50px] rounded-full">Reset</button>
            <button onClick={() =>{setCount(count-1)}} className="text-white text-2xl bg-yellow-500 border w-[70px] h-[50px] rounded-full">-</button>
            </div>
        </div>
        </div>
    )
}