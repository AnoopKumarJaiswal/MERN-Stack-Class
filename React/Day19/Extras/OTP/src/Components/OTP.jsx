import { useEffect, useRef, useState } from "react"

export function OTP()
{
    const temRef1 = useRef()
    const temRef2 = useRef()
    const temRef3 = useRef()
    const temRef4 = useRef()
    const temRef5 = useRef()
    const temRef6 = useRef()
    const arr = [temRef1,temRef2, temRef3, temRef4,temRef5,temRef6]
    const [currRef , setCurrrRef] = useState(0)
 

    useEffect(() =>{
        arr[currRef].current.focus()
         
         
    },[currRef])
    return(
        <div className="flex justify-center items-center h-[100vh] w-[100vw] bg-red-200">
            <div className="h-[300px] w-[600px] border-gray-800 flex justify-center items-center bg-white gap-[15px]">
                {/* <input className="border h-[50px] w-[50px] border-gray-300 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none pl-[20px] text-xl" type="number" /> */}
                {/* <input className="border h-[50px] w-[50px] border-gray-300 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none pl-[20px] text-xl" type="number" /> */}
                {/* <input className="border h-[50px] w-[50px] border-gray-300 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none pl-[20px] text-xl" type="number" /> */}
                {/* <input className="border h-[50px] w-[50px] border-gray-300 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none pl-[20px] text-xl" type="number" /> */}
                {/* <input className="border h-[50px] w-[50px] border-gray-300 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none pl-[20px] text-xl" type="number" /> */}
                {/* <input className="border h-[50px] w-[50px] border-gray-300 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none pl-[20px] text-xl" type="number" /> */}
            
                {[0,0,0,0,0,0].map((item,index) =>{
                    return <input onChange={(e) =>{
                        if(currRef == 5)
                        {
                            return
                        }
                        
                        setCurrrRef(currRef + 1)
                    }} key={index} ref={arr[index]} className="border h-[50px] w-[50px] border-gray-300 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none pl-[20px] text-xl" type="number" />
                    

                })}
            </div>
        </div>
    )
}