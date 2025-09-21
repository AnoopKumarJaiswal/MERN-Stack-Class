import { useEffect } from "react";
import { useState } from "react";
export function C()
{
    useEffect(() =>{
        console.log("C");
        
    } ,[])
   
    return(
        <div>
            <p>C</p>
        </div>
    )
}