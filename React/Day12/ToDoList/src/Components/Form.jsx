
import { useContext, useState } from "react"
import { valContext } from "../App"
import { v4 as uuid } from 'uuid';


export function Form()
{
    const {items , setItem }= useContext(valContext)
    

    const[desc , setDesc] = useState("")
    const[title, setTitle] = useState("")
    return (
        <div className="flex flex-col h-[100vh] w-[50vw] justify-center items-center gap-[40px] border bg-fuchsia-950 ">
            <h1 className="text-white text-5xl font-extrabold">Add New Task</h1>
            <div className="flex flex-col border gap-[10px] h-[300px] w-[400px] items-center p-[40px] shadow-[10px_10px_10px_black] bg-white rounded-2xl">

            <input value={title} onChange={(e) =>{setTitle(e.target.value) }} className="border w-[250px]  h-[40px] rounded-2xl p-[0px_10px_0px_10px]" placeholder="Enter Task" type="text" />
            <textarea value={desc} onChange={(e) =>{setDesc(e.target.value)}} className="border h-[100px] w-[300px] rounded-2xl pl-[20px]" name="" id="" placeholder="Enter Desc........"></textarea>

            <button onClick={() =>{
                if(title.length == 0 || desc.length == 0)
                {
                    alert("Please Fill the Title")
                    return
                }
                setItem([...items , {title ,desc , id : uuid()}])
                setDesc("")
                setTitle("")}} className="rounded-2xl bg-blue-500  text-2xl text-white h-[50px] w-[130px] hover:scale-[1.1] shadow-[10px_10px_10px_black]">Add Task</button>
            </div>
        </div>
    )
}