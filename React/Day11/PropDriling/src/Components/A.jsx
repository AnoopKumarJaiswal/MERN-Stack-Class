import { useEffect } from "react"
import {B} from "./B"
// export function A( {count})
// {
//       useEffect(() =>{console.log("A component")})

//     return (
//         <div>
//             <B  count = {count}/>
//         </div>
//     )
// }




export function A()
{
      useEffect(() =>{console.log("A component")})

    return (
        <div>
            <B  />
        </div>
    )
}