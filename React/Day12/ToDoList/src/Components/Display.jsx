import { valContext } from "../App"
import { useContext } from "react"
export function Display()
{
    const {items ,setItem} = useContext(valContext)
    
  

     

    return (
        
        <div className="h-[100vh] w-[50vw] bg-amber-100 flex justify-center items-center flex-col gap-[20px] ">
           
            <h1 className="text-4xl font-extrabold ">Display</h1>
            <div className="flex border-[4px] border-gray-400 h-[80%] w-[80%] justify-center flex-col items-center gap-[20px] rounded-2xl shadow-[10px_10px_10px_black] overflow-hidden">
           

       
           <div className="flex flex-col gap-[20px]">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all bg-gray-50 flex justify-between w-[30vw]" >
                <div>    
                    <p className="text-lg font-medium text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                </div>

                <button onClick={() =>{
                const DelArr =      items.filter((i) =>{
                        return i.id  != item.id
                     })
                     setItem(DelArr)
                }} className="bg-red-600 px-[20px] rounded-2xl">Delete</button>
            </div>
          ))}
        </div>

            </div>
        </div>
    )
}