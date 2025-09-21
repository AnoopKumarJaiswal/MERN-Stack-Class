import {use, useState} from "react"

export function Calculater2()
{


    const [val, setVal] = useState("0")
    function Clicked(num)
    {
        if(val == 0)
        {
            return setVal(num)
        }
        else
        {
            return setVal(val + String(num))

        }
    }
    return (
        <div className="flex justify-center items-center h-[100vh] w-[100vw]">
            <div className="border h-[70vh] w-[20vw] bg-black">
                <div className="text-right text-6xl text-white">{val}</div>
            <div className="grid grid-cols-4 ml-[10px] mt-[20px] gap-[10px]">
                <button onClick={() =>{(setVal(0))}} className="text-2xl rounded-full h-[60px] w-[60px] text-white bg-gray-400">C</button>
                <button onClick={() =>{Clicked("**")}}className="text-2xl rounded-full h-[60px] w-[60px] text-white bg-gray-400" >^</button>
                <button onClick={() =>{Clicked("%")}}className="text-2xl rounded-full h-[60px] w-[60px] text-white bg-gray-400">%</button>
                <button onClick={() =>{Clicked("/")}} className="text-2xl rounded-full h-[60px] w-[60px] text-white bg-yellow-600">/</button>


                <button onClick={() =>{Clicked(7)}} className="text-2xl rounded-full h-[60px] w-[60px] text-white  bg-gray-800">7</button>
                <button onClick={() =>{Clicked(8)}} className="text-2xl rounded-full h-[60px] w-[60px] text-white  bg-gray-800">8</button>
                <button onClick={() =>{Clicked(9)}} className="text-2xl rounded-full h-[60px] w-[60px] text-white  bg-gray-800">9</button>
                <button onClick={() =>{Clicked("*")}} className="text-2xl rounded-full h-[60px] w-[60px] text-white bg-yellow-600">X</button>


                <button onClick={() =>{Clicked(4)}}  className="text-2xl rounded-full h-[60px] w-[60px] text-white bg-gray-800">4</button>
                <button onClick={() =>{Clicked(5)}} className="text-2xl rounded-full h-[60px] w-[60px] text-white bg-gray-800">5</button>
                <button onClick={() =>{Clicked(6)}} className="text-2xl rounded-full h-[60px] w-[60px] text-white bg-gray-800">6</button>
                <button  onClick={() =>{Clicked("-")}} className="text-2xl rounded-full h-[60px] w-[60px] text-white bg-yellow-600">-</button>


                <button onClick={() =>{Clicked(1)}} className="text-2xl rounded-full h-[60px] w-[60px] text-white bg-gray-800">1</button>
                <button onClick={() =>{Clicked(2)}} className="text-2xl rounded-full h-[60px] w-[60px] text-white bg-gray-800">2</button>
                <button onClick={() =>{Clicked(3)}} className="text-2xl rounded-full h-[60px] w-[60px] text-white bg-gray-800">3</button>
                <button onClick={() =>{Clicked("+")}} className="text-2xl rounded-full h-[60px] w-[60px] text-white bg-yellow-600">+</button>


                <button onClick={() =>{Clicked(0)}} className=" text-2xl rounded-full h-[60px] col-span-2 text-white bg-gray-800">0</button>
                <button onClick={() =>{Clicked(".")}} className=" text-2xl rounded-full h-[60px] w-[60px] text-white bg-gray-800">.</button>
                <button onClick={() =>{
                    let org = eval(val)
                    let temp = Math.floor(eval(val))
                    if(org - temp == 0)
                    {
                            setVal(eval(val))
                    }
                    else
                    {
                        setVal(eval(val).toFixed(2))
                    }
                    }} className=" text-2xl rounded-full h-[60px] w-[60px] text-white bg-yellow-600">=</button>
            </div>
            </div>
        </div>
    )
}