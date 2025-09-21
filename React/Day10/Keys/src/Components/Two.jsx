import { useEffect } from "react";
import { Three } from "./Three";

export function Two()
{

    useEffect(() =>{
        console.log("Two components mounted");
        
    })
    return (
        <div>
            <Three />
        </div>
    )
}