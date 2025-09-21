import { useState } from "react";

export function Calculater()
{
    const[val , setVal] = useState("0")
    function getVal(num) 
    {
        
        if(val == 0)
        {
           return setVal(num)
        }
        else
            {
            return setVal(String(val) + ((num))) 

        }
    }
    return(
        <div className="flex justify-center items-center border h-[100vh] w-[100vw] bg-black">
            <div className="border bg-white h-[80vh] w-[30vw] flex justify-center items-center">

            
            <div className="border w-[24vw] h-[70vh] bg-black">
                <div className="text-white text-5xl text-right  ">{val}</div>
                <div className="grid grid-cols-4 gap-3 mt-[20px] p-2">
                    <button onClick={() => setVal("0")} className="bg-gray-300 h-[70px] w-[70px] rounded-full border text-2xl tex">C</button>
                    <button onClick={() => getVal("**")} className="bg-gray-300 h-[70px] w-[70px] rounded-full border text-2xl tex">**</button>
                    <button onClick={() => getVal("%")} className="bg-gray-300 h-[70px] w-[70px] rounded-full border text-2xl tex">%</button>
                    <button onClick={() => getVal("/")} className="bg-gray-300 h-[70px] w-[70px] rounded-full border text-2xl tex">/</button>


                    <button onClick={() => getVal(7)} className="bg-gray-500 h-[70px] w-[70px] rounded-full  text-2xl text-white ">7</button>
                    <button onClick={() => getVal(8)} className="bg-gray-500 h-[70px] w-[70px] rounded-full  text-2xl text-white">8</button>
                    <button onClick={() => getVal(9)} className="bg-gray-500 h-[70px] w-[70px] rounded-full  text-2xl text-white">9</button>
                    <button onClick={() => getVal("*")} className="bg-gray-500 h-[70px] w-[70px] rounded-full  text-2xl text-white">*</button>


                    <button onClick={() => getVal(4)} className="bg-gray-500 h-[70px] w-[70px] rounded-full  text-2xl text-white">4</button>
                    <button onClick={() => getVal(5)} className="bg-gray-500 h-[70px] w-[70px] rounded-full  text-2xl text-white">5</button>
                    <button onClick={() => getVal(6)} className="bg-gray-500 h-[70px] w-[70px] rounded-full  text-2xl text-white">6</button>
                    <button onClick={() => getVal("-")} className="bg-gray-500 h-[70px] w-[70px] rounded-full  text-2xl text-white" >-</button>


                    <button onClick={() => getVal(1)} className="bg-gray-500 h-[70px] w-[70px] rounded-full  text-2xl text-white">1</button>
                    <button onClick={() => getVal(2)} className="bg-gray-500 h-[70px] w-[70px] rounded-full  text-2xl text-white">2</button>
                    <button onClick={() => getVal(3)} className="bg-gray-500 h-[70px] w-[70px] rounded-full  text-2xl text-white">3</button>
                    <button onClick={() => getVal("+")} className="bg-gray-500 h-[70px] w-[70px] rounded-full  text-2xl text-white">+</button>


                    <button onClick={() => getVal("0")} className="bg-gray-500 h-[70px] rounded-full  text-2xl text-white col-span-2">0</button>
                    <button onClick={() => getVal(".")} className="bg-gray-500 h-[70px] w-[70px] rounded-full  text-2xl text-white">.</button>
                    <button onClick={() => {
                        let ans = eval(val)
                        let temp = Math.floor(ans)
                        if((ans - temp)  == 0)
                        {
                            return setVal(ans)
                        }
                        else
                        {
                            return setVal((eval(val).toFixed(4)))
                        }
                        
                    }} className="bg-gray-500 h-[70px] w-[70px] rounded-full  text-2xl text-white">=</button>
                </div>
                </div>
            </div>
        </div>
    )
}