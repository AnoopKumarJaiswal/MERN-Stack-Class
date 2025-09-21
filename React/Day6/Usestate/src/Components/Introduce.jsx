import { useState } from "react";

export function Introduce()
{
    const[val, setVal] = useState("")
    return(
        <div>
            <input onChange={(e) =>{
                setVal(e.target.value)
            }}  className="border" type="text" placeholder="Name" />

          {val.length && <h1 className="text-3xl">Welcome, {val}</h1>}
          {val.length > 0 ? <h1 className="text-3xl">Welcome, {val}</h1> : null }
        </div>
    )
}