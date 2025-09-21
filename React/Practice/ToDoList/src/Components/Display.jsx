import { useContext } from "react"
import { InputContext } from "../App"
import { Input } from "./Input"

export function Display()
{
  const{Items , setItems} = useContext(InputContext)
    return (
        <div className="w-[50vw] h-[100vh] border flex flex-col bg-gradient-to-r from-orange-600 to-yellow-700 justify-center items-center gap-[20px]">
            <h1 className="font-bold text-6xl text-white">Display</h1>
            <div className="h-[80vh] w-[40vw] border-8 rounded-2xl p-[40px] shadow-lg shadow-gray-700/40 overflow-y-auto  ">
               <div className="flex flex-col gap-[20px]">
                {Items.map((item) =>{
                    return (
                        <div className="bg-cyan-50 p-[15px] rounded-2xl flex justify-between overflow-y-auto">
                            <div>
                                <p className="text-2xl font-bold ">{item.title}</p>
                                <p>{item.desc}</p>
                            </div>
                            <button onClick={() =>{
                             const filetrItems =  Items.filter((i) =>{
                                    return i.id != item.id
                                })
                                setItems(filetrItems)
                            }} className="bg-red-500 px-[20px] rounded-2xl">Delete</button>
                        </div>
                    )
                })}
               </div>
            </div>
        </div>
    )
}