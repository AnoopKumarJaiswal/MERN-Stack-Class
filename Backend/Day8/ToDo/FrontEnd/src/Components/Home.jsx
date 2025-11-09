import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"

const Home = () => {
  const [todo, setTodo] = useState([]);
  const nav = useNavigate()

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_DOMAIN + "/todos")
      .then((res) => {
        setTodo(res.data.data);
      });
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-8 flex flex-col items-center h-[90vh]">
      <h1 className="text-4xl font-extrabold text-white mb-8 tracking-wide">
        📝 My To-Do List
      </h1>

      <div className="w-full max-w-3xl space-y-4">
        {todo.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 transition-all duration-200 rounded-2xl p-5 shadow-md"
          >
            <div>
              <h2 className="text-xl font-semibold text-white">
                {item.title}
              </h2>
              <p className="text-gray-300 text-sm mt-1">{item.desc}</p>
            </div>


            
           <div className="flex gap-5">

                <p onClick={() =>{
                    axios.delete(`${import.meta.env.VITE_DOMAIN}/todos/${item._id}`)
                    .then((res) =>{
                        const filteredTodo = todo.filter((i) =>{
                          return i._id != item._id
                        })
                        setTodo(filteredTodo)
                        toast.success("ToDo Deleted SuccessFully")
                    })
                }} className="cursor-pointer hover:bg-red-800">❌</p>
                <p onClick={() =>{
                  nav("/edit/" + item._id)
                }} className="cursor-pointer">✏️</p>
                <input
                className="w-5 h-5 accent-green-500 cursor-pointer"
                checked={item.isCompleted}
                type="checkbox"
                readOnly
                />

            </div>



          </div>
        ))}

        {todo.length === 0 && (
          <p className="text-gray-300 text-center mt-10 text-lg">
            No todos found. Start adding some! ✨
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
