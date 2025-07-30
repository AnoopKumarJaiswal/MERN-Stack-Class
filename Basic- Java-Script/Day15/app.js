//    * 
//  * * *
//* * * * *
//  * * *
//    *

// let n= 5 
// let row =n
// let star=1
// let spaces= 2

// for ( let i=1;i<=row;i++)
// {
//     let str=""
//     for (let j=1;j<=spaces;j++)
//     {
//         str+="  "
//     }
//     for(let k=1;k<=star;k++)
//     {
//         str+="* "
//     }
//     console.log(str);
//     if(i<n/2)
//     {
//         star+=2
//         spaces--
//     }
//     else
//     {
//         star-=2
//         spaces++
//     }
    
// }




// * * * * * 
//   * * *
//     *
//   * * * 
// * * * * * 


// let n=5
// let star=n
// let spaces=0
// for ( let i=1;i<=n;i++)
// {
//     let str=""
//     for (let j=1; j<=spaces;j++)
//     {
//         str+="  "
//     }
//     for(let k=1;k<=star;k++)
//     {
//         str+="* "
//     }
//         console.log(str);

//     if(i<n/2)
//     {
//         star-=2
//         spaces++
//     }
//     else
//     {
//         star+=2
//         spaces--
//     }

    
// }



//  * * * * * 
//    * * * * *
//      * * * * * 
//        * * * * *
//          * * * * * 
// let n=7
// let spaces=0
// let star=n
// for (let i=1;i<=n;i++)
// {
//     let str=""
//     for (j=1;j<=spaces;j++)
//     {
//         str+=" "
//     }
//     for (let k=1;k<=star;k++)
//     {
//         str+="* "
//     }
//     spaces++
//     console.log(str);
    
// }







// * * * * *
// * * * 
// *
// * * *
// * * * * *


// let n=5 
// let star=n
// for (let i=1;i<=n;i++)
// {
//     let str=""
//     for (j=1;j<=star;j++)
//     {
//         str+="* "
//     }
//     console.log(str);
//     if(i<n/2)
//     {
//         star-=2
//     }
//     else
//     {
//         star+=2
//     }
    

// }

   


// * * * * * 
//     * * * 
//         *
//     * * * 
// * * * * * 





// let n=5
// let star=n
// let spaces=0
// for (let i=1;i<=n;i++)
// {
//     let str=""
//     for (let j=1;j<=spaces;j++)
//     {
//         str+="  "
//     }
//     for (let k=1;k<=star;k++)
//     {
//         str+="* "
//     }
//     console.log(str);
//     if(i<n/2)
//     {
//         star-=2
//         spaces+=2
//     }
//     else
//     {
//         star+=2
//         spaces-=2
//     }
    
// }



// *               *
// * *           * * 
// * * *       * * *
// * * * *   * * * *
// * * * * * * * * *
// * * *       * * *
// * *           * *
// *               *


// let n=5 
// let stars=1
// let spaces=2*n-3

// for ( let i=1;i<2*n;i++)
// {
//     let str=""
//     for (let j=1;j<=stars;j++)
//     {
//         str+="* "
//     }
//     for ( let k=1;k<=spaces;k++)
//     {
//         str+="  "
//     }
//     for ( let l=1;l<=stars;l++)
//     {
//         if ( i==n&&l==stars)
//         {
//             break
//         }
//         str+="* "
//     }
//     if (i<n)
//     {
//         stars++
//         spaces-=2
//     }
//     else
//     {
//         stars--
//         spaces+=2
//     }
//     console.log(str);
    
// }




// *               *
// * *           * *
// * * *       * * *
// * * * *   * * * *
// * * * * * * * * *

// let n= 5 
// let star=1
// let spaces=2*n-3


// for( let i=1;i<=n;i++)
// {
//     let str=""
//     for (let j=1;j<=star;j++)
//     {
//         str+="* "
//     }
//     for(let k=1;k<=spaces;k++)
//     {
//         str+="  "
//     }
//     for(let l=1;l<=star;l++)
//     {
//         if (i==n&&l==star)
//             {
//                 break
//             }
        
//         str+="* "
//     }
//     star++
//     spaces-=2
//     console.log(str);
    
// }






// * * * * * * * * *
// * * * *   * * * *
// * * *       * * *
// * *           * *
// *               *


// let n=5
// let spaces=-1
// let star=n


// for (let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=star;j++)
//     {
//        if (i==1&&j==star)
//        {
//         break
//        }
//         str+="* "
//     }
//     for (let k=1;k<=spaces;k++)
//     {
//         str+="  "
//     }
//     for(let l=1;l<=star;l++)
//     {
//         str+="* "
//     }
//     spaces+=2
//     star--
//     console.log(str);
    
// }



// let n=7 
// let star=n
// let  spaces=0
//  for (let i=1 ;i<=n;i++ )
//  {
//     let str=""
//     for (let j=1;j<=spaces;j++)
//     {
//         str+=" "
//     }
//     for (let k=1;k<=star;k++)
//     {
//         str+="* "
//     }
//     star--
//     spaces++
//     console.log(str);
    
//  }



// let n=14
// let star=1
// let spaces=Math.floor(n/2)
// for (let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=spaces;j++)
//     {
//         str+=" "
//     }
//     for (let k=1;k<=star;k++)
//     {
//         str+="* "
//     }
//     if (i<n/2)
//     {
//         star++
//         spaces--
//     }
//     else
//     {
//         star--
//         spaces++
//     }
//     console.log(str);
    
// }





// let n=13

// let star=Math.ceil(n/2)
// let spaces=0

// for(let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=spaces;j++)
//     {
//         str+=" "
//     }
//     for(let j=1;j<=star;j++)
//     {
        
//         str+="* "
//     }
    
    
//     if(i<(n/2))
//     {
//         star--
//         spaces++
//     }
//      else if (i<=n/2&& n>=n/2+ 1){
//          str+"* "
//      }
//     else
//     {
//         star++
//         spaces--
//     }

//     console.log(str);
    
// }


// 

// let n=11
// let star=Math.floor(n/2)
// for (let i=1;i<=n;i++)
// {
//     let str=""
//     for(let j=1;j<=star;j++)
//     {
//         str+="* "
//     }
//     if (i<=n/2)
//     {
//         star--
//     }
//     else
//     {
//         star++
//     }
//     console.log(str);
    
// }





// let n=9
// let spaces=Math.floor(n/2)
// let star=1
// for (let i=1;i<=n;i++)
// {
//    let str=""
//    for(let j=1 ;j<=spaces;j++)
//    {
//     str+="  "
//    }
//    for (let k=1;k<=star;k++)
//    {
//     str+="* "
//    }
//       console.log(str);

//    if(i<n/2)
//    {
//     star+=2
//     spaces--
//    }
   
// }



// let n=5
// let star=1
// let spaces=2*n-3
//  for (let i=1;i<=2*n-1;i++)
//  {
//     let str=""
//     for(let j=1;j<=star;j++)
//     { 
//
//         str+="* "
//     }
//     for( let k=1;k<=spaces;k++)
//     {
//         str+="  "
//     }
//     for ( let l=1;l<=star;l++)
//     { 
//         //   if (i==n&&l==star)
//         //   {
//         //     break
//         //   }
//           str+="* "
//     }
//     if(i<n)
//     {
        
//         star++
//         spaces-=2
//     }
//     else 
//     {
        
//         star--
//         spaces+=2
//     }
//     console.log(str);
    
//  }

// 1
// 2 3 
// 3 4 5 
// 4 5 6 7
// 5 6 7 8 9 


// let n=9
// let row =5
// let number =1
// for(let i=1;i<=row;i++)
// {
//     let str=""
//     for(let j=i;j<=number;j++)
//     {
//         str+=j+" "
//     }
//     number+=2
    

//     console.log(str);
    
// }





// let n= 9
// let star=1 
// let spaces=Math.floor(n/2)
//  for (i=1 ;i<=n;i++)
//  {
//      let str=""
//      for (let j=1;j<=spaces;j++)
//      {
//         str+="  "
//      }
//      for (let k=1 ;k<=star;k++)
//      {
//         str+="* "
//      }
//      if ( i<n/2 )
//      {
//         star+=2
//         spaces--   
//      }
//      else
//      {
//         star-=2
//         spaces++
//      }
//      console.log(str);
     
//  }



// let n=9
// let spaces=0
// let star=n
// for (let i=1;i<=n;i++)
// {
//     let str=""
//     for (let j=1;j<=spaces;j++)
//     {
//         str+="  "
//     }
//     for(let k=1;k<=star;k++)
//     {
//         str+="* "
//     }
//     if(i<n/2)
//     {
//         star-=2
//         spaces++
//     }
//     else
//     {
//         star+=2
//         spaces--
//     }
//     console.log(str);
    
// }
    

// *               *
// * *           * * 
// * * *       * * *
// * * * *   * * * *
// * * * * * * * * *
// * * * *   * * * *
// * * *       * * *
// * *           * *
// *               *


    
// let n=5
// let spaces= 2*n-3
// let star=1

// for (let i=1;i<=2*n-1;i++)
// {
//     let str=""
//     for ( let j=1;j<=star;j++)
//     {
//         str+="* "
//     }
//     for (let j=1;j<=spaces;j++)
//     {
//         str +="  "
//     }
//     for (let k=1;k<=star;k++)
//     {
//         if(i==n&&k==star)
//         {
//             break
//         }
//         str+="* "
//     }
//     if(i<n)
//     {
//         star++
//         spaces-=2
//     }
//     else
//     {
//         star--
//         spaces+=2
//     }
//     console.log(str);
    
// }


// * * * * * * * * *
// * * * *   * * * *
// * * *       * * *
// * *           * *
// *               *


// let n=5
// let spaces=-1
// let star=n

// for (let i=1;i<=n;i++)
// {
//     let str=""
//     for (let j=1;j<=star;j++)
//     {
//         if(i==1&&j==star)
//         {
//             break
//         }
//         str+="* "
//     }
//     for ( let k=1;k<=spaces;k++)
//     {
//         str+="  "
//     }
//     for ( let l=1;l<=star;l++)
//     {
//         str+="* "
//     }
//     star--
//     spaces+=2
//     console.log(str);
    
// }



// * * * * *
// * * * 
// *
// * * *
// * * * * *
