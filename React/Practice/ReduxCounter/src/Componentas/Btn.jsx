import { useDispatch } from "react-redux"
import { decrement, increment, reset } from "../Utills/counterSlice"

export function Btn()
{
    const dis = useDispatch()
    return (
        <div className="h-[100vh] w-[50vw] border-2 flex justify-center items-center bg-amber-200 ">
            <div className="flex gap-[10px] text-6xl">
                <button onClick={() =>{
                    dis(increment())
                }}>+</button>
                <button onClick={() =>{
                    dis(reset())
                }}>Reset</button>
                <button onClick={() =>{
                    dis(decrement())
                }}>-</button>
            </div>
        </div>
    )
}