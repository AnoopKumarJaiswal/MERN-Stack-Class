import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { One } from './Components/One'

// function App() {
//   const data = ["Anoop" , "Amit" , "Shubham", "Akash" , "Rahul" , "Ramkumar"]

//   return (
//     <div>
//       {data.map((item , index) =>{
//         return <p key={index}>{item }</p>
//       })}
//     </div>
//   )
// }

export default App



function App()
{

  const[count, setCount] = useState(0)


  useEffect(() =>{
    console.log("App components mounted");
    
  })
  return (
    <div>
      <p onClick={() =>{
        setCount(count -1)
      }}>App:{count}</p>
      <One />
    </div>
  )
}
