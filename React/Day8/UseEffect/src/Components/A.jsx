import { useEffect } from "react";
import { useState } from "react";
import { B } from "./B";

export function A()
{
    useEffect(() =>{
        console.log("A");
        
    },[])


    return (
        <div>
         
         <p>A</p>
         <B />
        </div>
    )
}