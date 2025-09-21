import { useContext, useEffect } from "react"
import { countContext } from "../App"

// export function C({count})
// {

//     const {val } = useContext(countContext)
//       useEffect(() =>{console.log("C component")})
    
//     return (
//         <div>{val}</div>
//     )
// }




export function C()
{

    const val  = useContext(countContext)
      useEffect(() =>{console.log("C component")})
    
    return (
        <div>{val}</div>
    )
}