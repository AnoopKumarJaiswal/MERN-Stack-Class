import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const[num, setNum] = useState(1)


  function findNthPrime(n) {
  

  let count = 0;
  let num = 1;

  while (count < n) {
    num++; // Start checking from 2

    if (isPrime(num)) {
      count++;
    }
  }
  return num;
}

function isPrime(number) {
  if (number <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }
  if (number <= 3) {
    return true; // 2 and 3 are prime
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false; // Multiples of 2 or 3 are not prime
  }

  // Check for primality using a step of 6, optimizing the search
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}



let ans = useMemo(() =>(findNthPrime(num)) , [num])

  return (
    <>
    <div>
          <input className='border-3' onChange={(e)=>{setNum(e.target.value)}} type="number" />
          <h1>{ans}</h1>
    </div>


    <div >
          <button className='text-4xl' onClick={() =>{setCount(count+1)}}>+</button>
          <button className='text-4xl' onClick={() =>{setCount(0)}}>Reset</button>
          <button className='text-4xl' onClick={() =>{setCount(count-1)}}>-</button>

          <p>{count}</p>
    </div>
    </>
  )
}







// Use CallBack



// function App() {
//   const [count, setCount] = useState(1)
//   const[num, setNum] = useState(1)


//  const findNthPrime = useCallback( function(n) {
  

//   let count = 0;
//   let num = 1;

//   while (count < n) {
//     num++; // Start checking from 2

//     if (isPrime(num)) {
//       count++;
//     }
//   }
//   return num;
// }, [])

//  const isPrime = useCallback(function (number) {
//   if (number <= 1) {
//     return false; // Numbers less than or equal to 1 are not prime
//   }
//   if (number <= 3) {
//     return true; // 2 and 3 are prime
//   }
//   if (number % 2 === 0 || number % 3 === 0) {
//     return false; // Multiples of 2 or 3 are not prime
//   }

//   // Check for primality using a step of 6, optimizing the search
//   for (let i = 5; i * i <= number; i += 6) {
//     if (number % i === 0 || number % (i + 2) === 0) {
//       return false;
//     }
//   }
//   return true;
// } , [])



// let ans = useMemo(() =>(findNthPrime(num)) , [num])

//   return (
//     <>
//     <div>
//           <input className='border-3' onChange={(e)=>{setNum(e.target.value)}} type="number" />
//           <h1>{ans}</h1>
//     </div>


//     <div >
//           <button className='text-4xl' onClick={() =>{setCount(count+1)}}>+</button>
//           <button className='text-4xl' onClick={() =>{setCount(0)}}>Reset</button>
//           <button className='text-4xl' onClick={() =>{setCount(count-1)}}>-</button>

//           <p>{count}</p>
//     </div>
//     </>
//   )
// }







// function App() 
// {
//   const[num ,setNum] = useState(0)
//   const[power,setPower] = useState(2)


//   const powerOf = useCallback(function() {
//     return num ** power
//   },[num,power])


//   return (
//     <div>
//      Power : <input className='border' onChange={(e) => {setPower(e.target.value)}} type="number" />
//     Number :  <input className='border' onChange={(e) => {setNum(e.target.value)}} type="number" />

//       <p>{powerOf()}</p>
//     </div>
//   )
// }






export default App
