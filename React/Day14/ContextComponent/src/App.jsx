import React, { useContext } from "react"
import { useMydata } from "./Utills/Context"
// import { UserContext } from "./Utills/Context"

export function App()
{
  // const {name ,age} = useContext(UserContext)



  
  const{name,age} = useMydata()
  return (
    <div>
  <p>{name}</p>
  <p>{age}</p>
    </div>
  )
}