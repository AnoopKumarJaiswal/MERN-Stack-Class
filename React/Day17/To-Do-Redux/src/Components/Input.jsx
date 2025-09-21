import { useState } from "react"
import {useDispatch} from "react-redux"
import { addItem } from "../Utills/Slice"
import { v4 as uuid} from "uuid"

export function Input()
{
    const dis = useDispatch()
    const[text , setText] = useState("")
    return(
        <div className="h-[100vh] w-[50vw] flex justify-center items-center flex-col">
            <h1 className="text-6xl font-bold">To Do Input</h1>
            <div className="flex flex-col border-4 h-[300px] w-[400px] justify-center items-center gap-[20px] ">
                <input value={text} onChange={(e) =>{
                    setText(e.target.value)
                }} className= "border h-[50px] w-[90%] rounded-xl p-[10px]" placeholder="Write Text Here....." type="text" />
                <button onClick={() =>{
                    if(text.length == 0)
                    {
                        alert("Please fill Input")
                        return
                    }
                    dis(addItem({text, id : uuid() }))
                    setText("")
                }} className="bg-blue-600 text-white h-[50px] w-[90px] text-xl rounded-xl">Add Text</button>
            </div>
        </div>
    )
}