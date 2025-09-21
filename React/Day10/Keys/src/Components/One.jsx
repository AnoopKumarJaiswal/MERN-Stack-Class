import { useEffect } from "react";
import { Two } from "./Two";

export function One()
{
    useEffect(() =>{
        console.log("One Components Mounted");
        
    })
    return (
        <div>
            <Two />
        </div>
    )
}