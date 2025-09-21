import { createContext, useState } from "react";

export const DemoContext = createContext()

export function Example({children})
{
    const [name ,setName] = useState("Anoop")
    return(
        <DemoContext.Provider value={{name ,setName}}>
            {children}
        </DemoContext.Provider>
    )
}