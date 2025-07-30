// let n=4
// for(let i=1;i<=n;i++)
// {
//    let str= ""
//    for(let j=1;j<=n;j++)
//    {
//     str+=" *"
//    }
//    console.log(str);
   
// }//OR





// let n= 4
// for (let i=1 ;i<=n;i++)
// {
//     let str=""
//     for (let j=1;j<=i;j++)
//     {
//         str+="* "
//     }
//     console.log(str);
    
// }


  // OR       // Right Way

// let n=4 
// let row=n
// let stars=1
// for(let i=1;i<=row;i++)
// {
//     let str=""
//     for(let j=1;j<=stars;j++)
//     {
//         str+="* "

//     }
//     stars++
//     console.log(str);
    
// }





// * * * * 
// * * *
// * *
// *



// let n=4 
// let row=n
// let stars=n
// for(let i=1;i<=row;i++)
// {
//     let str=""
//     for(let j=1;j<=stars;j++)
//     {
//         str+="* "

//     }
//     stars--
//     console.log(str);
    
// }




//OR


// let n=4
// for (let i=1; i<=n;i++)
// {
//     let str=""
//   for (let j=1;j<=n-i+1;j++)
//   {
//     str+="* "
//   }
//   console.log(str);
  
// }



// OR

// let n=4
// for (let i=n;i>0;i--)
// {
//     let str=""
//     for (let j=1;j<=i;j++)
//     {
//         str+="* "
//     }
//     console.log(str);
    
// }




//       *
//     * *
//   * * *
// * * * *




// let n=Number(prompt("Enter  Number"))
// let spaces=n-1
// let stars=1

// for (let i=1;i<=n;i++)
// {
//      let str=""
//      for (let j=1;j<=spaces;j++)
//      {
//         str+="  "
//      }
//      for (let k=1;k<=stars;k++)
//      {
//         str+="* "
//      }
//      spaces--
//      stars++
//      console.log(str);
     
// }




// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// let n=Number(prompt("Enter Number"))
// let spaces=0
// let stars = n
// let rows = n
// for (let i=1;i<=rows;i++)
// {
//     let str=""
//     for(let j=1;j<=spaces;j++)
//     {
//         str+="  "

//     }
//     for(let k=1;k<=stars;k++)
//     {
//         str+="* "
//     }
//     stars--
//     spaces++
//     console.log(str);
    
// }






// let n= 7 
// let rows=n
// let stars=n
// for (let i=1;i<=rows;i++)
// {
//   let str=""
//   for (let j=1;j<=stars;j++)
//   {
//     str+="* "
//   }
//   console.log(str);
  
// }


// * * * * *
// * * * *
// * * *
// * * 
// *

// let n=5
// let row=n
// let stars=n

// for(let i=1;i<=row;i++)
// {
//   let str=""
  
//     for(let j=1;j<=stars;j++)
//     {
//       str+="* "
//   }
//   stars--
//   console.log(str);
  
// }




//       *
//     * *
//   * * *
// * * * *


// let n=5
// let row=n
// let stars=1
// let spaces= n-1
 
// for (let i=1;i<=row;i++)
// {
//   let str=""
//   for(let j=1;j<=spaces;j++)
//   {
//     str+="  "
//   }
//   for(let k=1;k<=stars;k++)
//   {
//     str+="* "
//   }
//   stars++
//   spaces--
//   console.log(str);
  
// }







// 1 
// 1 2
// 1 2 3
// 1 2 3 4

// let n=4 
// let rows=n
// let stars=1
// for ( let i=1;i<=rows;i++)
// {
//   let str=""
//   for (let j=1;j<=stars;j++)
//   {
//     str+=j+" "
//   }
//   stars++
//   console.log(str);
  
// }

 // 1 to n (print all prime number )



// let n= 8

// for (let i=2;i<=n;i++)
// {
  
//   let isPrime=true
//   for (let j=2;j<=i**(1/2);j++)
//   {
//     if (i%j===0)
//     {

//       isPrime=false
//       break;
//     }
    
    
  // or
    
//   }
//   if(isPrime)
//     {
//       console.log(i);
      
//     }
    

// }




// let n = 8;

// for (let i = 2; i <= n; i++) {
//   let isPrime = true;

//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(i);
//   }
// }









