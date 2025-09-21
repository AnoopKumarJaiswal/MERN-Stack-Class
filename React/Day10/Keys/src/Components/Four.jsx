import { useEffect } from "react";
import { Five } from "./Five";

export function Four()
{
    useEffect(()=>{
        console.log("four componenets mounted");
        
    })
    return (
        <div>
            <Five />
        </div>
    )
}