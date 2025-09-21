import { useState } from 'react'
// import Kuchbhi from "./Components/Example"
// import Hi from "./Components/DefaultExport"

// function App() {
//   return (
//     <div>
//       {/* {Kuchbhi()} */}
//       <kuchbhi />
//       <h1>Hello</h1>
//       <Hi />
//     </div>
//   )
// }



// import {Myfn1 , MyFn2, MyFn3 , animal , arr} from "./Components/NamedExport"
import {Myfn1 as Fn , MyFn2, MyFn3 , animal , arr} from "./Components/NamedExport"    // Renamed the Variable // function  name 


function App()
{
  return(
    <div>
      {/* <Myfn1 /> */}
      <Fn />
      <MyFn2 />
      <MyFn3 />

      <h1>{animal}</h1>
      <h2>{arr}</h2>

    </div>
  )
}






export default App





