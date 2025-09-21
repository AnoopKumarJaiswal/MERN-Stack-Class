import { useEffect } from "react"
import { C } from "./C"
// export function B({count})
// {

//       useEffect(() =>{console.log("B component")})
    
//     return (
//         <div>
//             <C count = {count}/>
//         </div>
//     )
// }



export function B()
{

      useEffect(() =>{console.log("B component")})
    
    return (
        <div>
            <C />
        </div>
    )
}