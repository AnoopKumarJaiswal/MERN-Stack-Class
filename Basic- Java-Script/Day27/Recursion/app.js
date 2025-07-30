// function random (n)
// {
//     if (n==10)
//     {
//         return
//     }
//     console.log(n);
//     random(n+1)
    
// }
// random(1)




// OR





// function random(n)
// {
//     if (n > 10)
//     {
//         return
//     }
//     console.log(n);
//     random(++n)
    
// }
//  random(1)



// let n=10
// while ( n > 0)
// {
//     console.log(n);
//     n--
    
// }




// function abc (n)
// {
//     if ( n == 0)
//     {
//         return
//     }
//     console.log(n);
//     abc(n-1)
    
// }
// abc(10)



// function random (n)
// {
//     if ( n > 10)
//     {
//         return
//     }
//     random(n + 1)
//     console.log(n);
    
// }
// random (1)




// let n = 3 
// let fact = 1
//  while ( n > 1)
//  {
//     fact *= n
//     n--

//  }
//  console.log(fact);
 


 
// function fact (n)
// {
//      if ( n == 0 )
//      {
//         return 1
//      }
     
//      return n * fact(n-1)
// }


// let ans = fact(10)
// console.log(ans);


function sum (n)
{
    if (n == 0 )
    {
        return 0
    }
    return n + sum (n-1)
}
let ans = sum(5)
console.log(ans);
