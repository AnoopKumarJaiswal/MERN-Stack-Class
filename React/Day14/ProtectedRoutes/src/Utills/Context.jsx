import { createContext, use, useContext } from "react";

const UserContext = createContext()
export function UserContextProvider({children})
{
    const UserData = null
    return (
        <UserContext.Provider value={UserData}>
            {children}
        </UserContext.Provider>
    )
}



export function UseMyContext()
{
    return useContext(UserContext)
}