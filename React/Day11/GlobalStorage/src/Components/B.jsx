import { createContext, use, useState } from "react"
import { C } from "./C"
export const countContext = createContext()

export function B()
{

    const[count, setCount] = useState(0)
    return (
            <countContext.Provider value={{count , naam : "Anoop"}}>

        <div>

            <C />

          
        </div>
            </countContext.Provider>
    )
}