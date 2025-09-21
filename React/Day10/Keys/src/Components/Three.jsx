import { Four } from "./Four"
import { useEffect, useState } from "react";
export function Three()
{


    const[count , setCount] = useState(0)
    useEffect(() =>{
        console.log("Three components mounted");
        
    })
    return (
        <div>
            <p onClick={() =>{
                setCount(count + 1)
            }}>Three : {count}</p>
            <Four />
        </div>
    )
}