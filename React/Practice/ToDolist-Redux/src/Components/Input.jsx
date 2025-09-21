import { useState } from "react"
import { useDispatch } from "react-redux"
import { addText } from "../Utills/Slice"
import {v4 as uuid} from "uuid"

export function Input()
{
    const dis = useDispatch()
    const[text,setText] = useState("")
    return (
        <div className="h-[100vh] w-[50vw] border-2 justify-center items-center flex flex-col">
            <h1 className="font-bold text-5xl">To Do Input</h1>
            <div className="h-[300px] w-[400px]  bg-blue-400 shadow-[10px_10px_10px_black] flex flex-col justify-center items-center rounded-2xl gap-[20px]" >
                <input value={text} onChange={(e) => 
                    setText(e.target.value)
                } className="border bg-amber-50 h-[50px] w-[90%] rounded-xl p-[10px]" placeholder="Write Text Here.........." type="text" />
                <button onClick={() =>{
                    if(text.length == 0)
                    {
                        alert("Please fill the Text")
                        return
                    }
                    dis(addText({text, id : uuid()}))
                    setText("")
                }} className="bg-red-500 p-[10px] rounded-2xl cursor-pointer hover:scale-[1.1]">Add Task</button>
            </div>
        </div>
    )
}