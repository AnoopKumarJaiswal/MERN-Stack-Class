import { useState } from "react";

export function Changecolor()
{
  const[val , setVal] = useState(false)
  return (
    <>
  <div className="h-[100vh] w-[100vw] bg-black flex justify-center">
    <button onClick={() =>{
      setVal(!val)
    }} className="bg-white h-[50px] w-[100px] rounded-2xl">{val ? "Show": "Hide"}</button>

    <div className={"h-[500px] w-[500px] mx-auto bg-amber-200 mt-[70px] flex justify-center " +( val ? "invisible" : "visible")}>
      <div>
       <p className="text-4xl mt-[20px] ">Hello !</p>
      </div>
    </div>

  </div>
    </>
  )
}