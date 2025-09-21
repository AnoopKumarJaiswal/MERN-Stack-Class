import { createContext, useContext, useState } from "react"
export const UserContext = createContext()





export function UserContextProvider({children})
{
    const[age,setAge] = useState("25")
    const[name,setName] =useState("Anoop") 
    return(
        <UserContext.Provider  value={{age,setAge, name ,setName}}>
            {children}
        </UserContext.Provider>
    )
}





export function useMydata()
{
    return useContext(UserContext)
}