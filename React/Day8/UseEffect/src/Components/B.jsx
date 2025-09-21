import { useEffect } from "react";
import {useState} from "react"
import{C} from "./C"


export  function B()
{
    useEffect(() =>{
        console.log("B");
        
    },[])

    return (
        <div>
            <p>B</p>
            <C />
        </div>
    )
}