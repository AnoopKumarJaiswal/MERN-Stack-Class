import { useEffect, useState } from "react"
export function Five()
{

    const[count, setCount] =useState(0)

    useEffect(() =>{
        console.log("Five components mounted");
        
    })
    return (
        <div>
        <p onClick={() =>{
            setCount(count + 1)
        }}>{count}</p>
        </div>
    )
}