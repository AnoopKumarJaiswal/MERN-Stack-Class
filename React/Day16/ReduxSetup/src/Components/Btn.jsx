import React, { useState } from "react";
import { decrement, increment, reset} from "../Utills/slice";
import { useDispatch } from "react-redux";


export function Btn()
{

   const disfn =  useDispatch()
    return (
        <div className="h-[100vh] w-[50vw] border-4 border-blue-950 flex justify-center items-center">
            <div className="border-8  bg-amber-400 text-white rounded-2xl h-[200px] w-[250px] flex justify-center gap-[20px] text-3xl font-bold">
                <button onClick={() =>{
                    disfn(increment())
                }}>+</button>
                <button onClick={() =>{
                    disfn(reset())
                }}>Reset</button>
                <button onClick={() =>{
                    disfn(decrement())
                }}>-</button>
            </div>
        </div>
    )
}