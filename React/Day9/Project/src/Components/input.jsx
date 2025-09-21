import { use, useEffect, useState } from "react"


export function Input()
{
 const[items, setItem] = useState([])
  const[text ,setText] = useState("")
  return (
    <div className=" w-[100vw] flex justify-center">

      <div className="border p-[80px] mt-[100px]">

      <input value={text} className="border w-[200px] h-[32px]" placeholder="type here" onChange={(e) =>{setText(e.target.value)}} type="text" />
      <button onClick={() =>{{if(text == "")
        {
          return
        }
        else
          {
            
            setItem([...items , text]), setText("")}
          }
        }} className="bg-blue-800 w-[60px] rounded-2xl">Add</button>
       

        <div className="mt-[100px] border p-[10px] ">
          <h1 className="text-3xl">List</h1>
        {items.map((item) => {
          return <li>{item}</li>
          })}
        </div>
       </div>
    </div>
  )
}
