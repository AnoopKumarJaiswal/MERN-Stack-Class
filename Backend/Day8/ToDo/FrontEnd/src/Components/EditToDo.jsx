import axios from "axios";
import { useState ,useEffect} from "react";
import toast from "react-hot-toast";
import { data, Navigate, useNavigate, useParams } from "react-router-dom"

const EditTodo = () =>{
    const [task ,setTask] =useState({}) 
    const {id} = useParams()
    const nav = useNavigate()

    useEffect(() =>{
        axios.get(import.meta.env.VITE_DOMAIN+"/todos/"+id)
        .then((res) =>{
             setTask(res.data.data)           
        })
    }, [])
    return (
         <div className="h-[90vh]  flex justify-center items-center bg-gradient-to-br from-indigo-900 to-purple-700">
      <div className="h-[420px] w-[40vw] bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between">
        <p className="text-2xl font-bold text-gray-800 text-center mb-4">
          Edit Your To-Do 📝
        </p>

        <div className="flex flex-col gap-5 items-center">
          <input  
          value={task.title}
             onChange={(e) =>{
                setTask({
                    ...task,
                    title : e.target.value
                })
             }}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
            type="text"
            placeholder="Enter task title..."
          />
          <textarea
          value={task.desc}
          onChange={(e) =>{
            setTask({
                ...task,
                desc : e.target.value
            })
          }}
            className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
            placeholder="Enter task description..."
          />
        </div>

        <button
         onClick={() =>{
          if(task.title.length < 10 || task.desc.length < 10)
          {
            toast.error("Pease Fill the Valid")
            return
          }
            axios.patch(import.meta.env.VITE_DOMAIN + `/todos/${id}`, task)
            .then(() =>{
                console.log(task);
                
              toast.success("ToDo Added SuccessFully")
                nav("/") 
            })
            .catch(() =>{
                toast.error("Task Failed")
            })
         }}
         className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 shadow-md self-center">
          ADD Task
        </button>
      </div>
    </div>
    )
}


export default EditTodo