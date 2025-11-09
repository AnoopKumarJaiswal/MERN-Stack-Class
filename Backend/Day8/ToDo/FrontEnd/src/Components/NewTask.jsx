import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"

const Addtask = () => {

    const nav = useNavigate()
    const [title , setTitle] = useState("")
    const [desc, setDesc] = useState("")
  return (
 <div className="h-[90vh]  flex justify-center items-center bg-gradient-to-br from-indigo-900 to-purple-700">
      <div className="h-[420px] w-[40vw] bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between">
        <p className="text-2xl font-bold text-gray-800 text-center mb-4">
          Add Your To-Do 📝
        </p>

        <div className="flex flex-col gap-5 items-center">
          <input   
             onChange={(e) =>{
                setTitle(e.target.value)
             }}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
            type="text"
            placeholder="Enter task title..."
          />
          <textarea
          onChange={(e) =>{
            setDesc(e.target.value)
          }}
            className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
            placeholder="Enter task description..."
          />
        </div>

        <button
         onClick={() =>{
          if(title.length < 10 || desc.length < 10)
          {
            toast.error("Pease Fill the Valid")
            return
          }
            axios.post(import.meta.env.VITE_DOMAIN+`/todos`, {title, desc})
            .then(() =>{
              toast.success("ToDo Added SuccessFully")
                nav("/") 
            })
         }}
         className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-md self-center">
          ADD Task
        </button>
      </div>
    </div>   
  );
};

export default Addtask;
