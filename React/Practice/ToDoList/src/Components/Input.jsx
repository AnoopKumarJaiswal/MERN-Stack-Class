import { useContext, useState } from "react"
import { InputContext } from "../App"
import { v4 as uuid } from 'uuid';


export function Input()
{
    const {Items, setItems} = useContext(InputContext)
    const[title, setTitle] = useState("")
    const[desc , setDesc] = useState("")
    return (
        <div className="w-[50vw] h-[100vh] border flex justify-center flex-col items-center bg-amber-900 gap-[50px]">
            <h1 className="text-5xl text-white font-bold">To Do Input</h1>
            <div className="flex flex-col h-[400px] w-[400px] border justify-center items-center gap-[30px] bg-white shadow-[10px_10px_10px_black]">
                <input value={title} onChange={(e) =>{setTitle(e.target.value)}} placeholder="Enter Title.." className="border h-[40px] w-[250px] rounded-xl p-[20px] hover:scale-[1.01]" type="text" />
                <textarea value={desc} onChange={(e) =>{setDesc(e.target.value)}} placeholder="Enter Desc...." className="border w-[250px] h-[130px]  rounded-xl p-[20px] hover:scale-[1.01]" name="" id=""></textarea>
                <button onClick={() =>{
                    if(desc.length == 0 || title.length == 0)
                    {
                        alert("Please Fill the Title and Desc")
                        return
                    }
                    setItems([...Items , {title ,desc , id : uuid()}]) 
                     setDesc("") 
                     setTitle("")}} className=" hover:scale-[1.08] cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-5 py-2 transition
">Add Task</button>
            </div>
        </div>
    )
}