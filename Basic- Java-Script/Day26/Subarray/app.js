// printing all possible subarrys


// let arr=[1,2,3,4,5]



// for (  let i=0;i<arr.length;i++)
// {
//     let temp =[]
//     for ( let j=i;j<arr.length;j++)
//     {
//         temp.push(arr[j])
//         console.log(temp);
        

//     }
// }



//  let n=6
//  let row=n

//  for ( let i=0;i<row;i++)
//  {
//     let str=""
//     for (let j=0;j<=i;j++)
//     {
//         if (j%2==0)
//         {
//             str+=1+" "
            
//         }
//         else 
//         {
//            str+=0+" "
            
//         }
            
//     }
//     console.log(str);
    
//  }



// let n=6
// for ( let i=1;i<=n;i++)
// {
//     let row=""
//     let val = 1
//     for (let j=1;j<=i;j++)
//     {
//         row+=val
//         if (val==1)
//         {
//             val=0
//         }
//         else 
//         {
//             val=1
//         }

//     }
// }









// let arr =[ 1,7,22,3,6,39]
// let max= arr[0]
// let secondMax = arr[1]
// for ( let i = 0; i<arr.length ; i++)
// {
//     if ( arr[i]>max)
//     {
//         secondMax=max
//         max=arr[i]
//     }
//     else if (arr[i]>secondMax && arr[i]<max)
//     {
//         secondMax=arr[i]
//     }
// }
// console.log(secondMax);



// let max=-Infinity
// let sMax =-Infinity
// for (let item of arr)
// {
//     if ( item > max )
//     {
//         sMax=max
//         max = item
//     }
//     else if ( item > sMax && item < max  )
//     {
//         sMax = item
//     }
// }
// console.log(sMax);





// let arr = [1,2,3,4,5,6,6,7]

// for ( let i = 0 ; i <arr.length ;i++)
// {
//     let temp=[]
//     for ( let j = i ; j < arr.length ; j++)
//     {
//         temp.push(arr[j])
//         console.log(temp);   
//     }
// }




// for ( let i =0 ; i < arr.length; i++ )
// {
//     let temp =[]
//     for ( let j =i ; j<arr.length ; j++)
//     {
//         temp.push(arr[j])
//         console.log(temp);
//     }
// }



// let arr = [1,2,3,4,5,3,2,2,34,15]
// let max=arr[0]
// let sMax = arr[1]
// for (let item of arr)
// {
//    if(item>max)
//    {
//     sMax=max
//     max=item
//    }
//    else if (item >sMax && item <max)
//    {
//     sMax=item
//    }
// }
// console.log(sMax);



// let n=6 
// let val =1

// for ( let i = 0; i < n; i++)
// {
//     let str=""
    
//     for ( let j=0; j<i; j++)
// {
//     str += val +" "
//     if (val==1)
//     {
//         val=0
//     }
//     else 
//     {
//         val =1
//     }
// }
//     console.log(str);

// }



// let arr = [1,2,3,4,5,6,7,8]
// let k = 6


// for ( let i = 0; i < length ; i++)
// {
//     let temp = []
//     for (let j = i; j < i+n; i++)
//     {
//         temp.push(arr[j])
        
//     }
//     let sum=0
//     for ( let item of temp)
//     {
//          sum += item
        
//     }
//     if (sum ==s )
//     {
//         console.log("YES");
//         return
//     }
 
// }
//  console.log("NO");


//    let count = 0
//    for ( let i = 0; i<arr.length ; i++)
//    {
//       let sum = 0
//       for ( let j = i; j < arr.length ; j ++)
//       {
//         sum += arr[j]
//         if ( sum % k == 0)
//         {
//             count ++
//         }
//       }
     
//    }
//    console.log(count);
   




// let n = 6 
//  for ( let i = 1 ; i <= n ; i++)
//  {
//     let str = ""
//     for ( let j = 1; j <= i ; j++)
//     {
//           if ( j % 2 == 0)
//           {
//              str += 0+" "
//           }
//           else
//           {
//             str += 1+" "
            
//           }
//     }
//     console.log(str);
    
//  }




// let n = 6 
// for (let i = 0 ; i < n ;i++)
// {
//     let str =" "
//     let val = 1
//     for ( let j = 0; j <= i ; j++)
//      {
//         str += val
//         if ( val == 1)
//         {
//             val = 0
//         }
//         else 
//         {
//             val = 1
//         }
            
//      }
//      console.log(str); 
// }

// let n = 6
// let val = 1 
// for ( let i =1 ; i <= n ; i++)
// {
//     let str = ""
//     for ( let j = 1 ; j <= i; j++)
//     {
//          str += val+" "
//          if ( val == 1)
//          {
//             val = 0
//          }
//          else 
//          {
//             val = 1
//          }
//     }
//     console.log(str);
    

// }


// for ( let i = 1; i <= n; i++)
// {
//     let str = ""
//     for ( let j = 1; j <= i; j++)
//     {
//         str += val +" "
//         val = val == 1 ? 0 : 1

//     }
//     console.log(str);
    
// }



// let  n = 6
// for ( let i = 1; i <= n; i++)
// {
//     let val = 1
//     let str = ""
//     for ( let j = 1; j <= i; j++)
//     {
//         str += val+" " 
//         val = val == 1  ? 0 : 1
//     }
//     console.log(str);
    
// }





// let count =0

// function counter()
// {
//     return {
//         increment : () => {
//             count++
//             console.log(count); 
//         },
//         decrement: () =>
//         {
//             if ( count == 0)
//             {
//                  return
//             }
//             count--
//             console.log(count);
//         },
//         reset: () =>
//             {
//                 count = 0
//                 console.log(count);
                
//             } 
//     }
// }
// //  let ans = counter()
// //  ans.increment ()
// //  ans.increment ()
// //  ans.increment ()
// //  ans.increment ()
// //  ans.increment ()
// //  ans.increment ()
// //  ans.reset ()
// //  ans.increment ()
// //  ans.increment ()
// //  ans.increment ()
// //  ans.increment ()
//  ans.increment ()
//  ans.increment ()
//  ans.increment ()
//  ans.decrement ()
//  ans.decrement ()
//  ans.decrement ()
//  ans.decrement ()
//  ans.decrement ()
//  ans.decrement ()
//  ans.decrement ()
//  ans.decrement ()
//  ans.decrement ()
//  ans.decrement ()
//  ans.decrement ()
//  ans.increment ()
// ans.increment ()
// ans.increment ()
// ans.increment ()
// ans.increment ()
// ans.decrement ()
 



// let arr1 = [ 1,7,9,13,14]
// let arr2 = [2,8,11,12]
// let ans = []



// let i = 0
// let j = 0

// while (i < arr1.length  && j <arr2.length)
// {
//     if (arr1[i]<arr2[j])
//     {
//         ans.push(arr1[i])
//         i++

//     }
//     else 
//     {
//         ans.push(arr2[j])
//         j++
//     }
// }
// if (i<arr1.length)
// {
//     for (let k =i; k< arr1.length; k++)
//     {
//         ans.push(arr1[k])
//     }
// }
// if (j< arr2.length)
// {
//     for (let k = j; k<arr2.length;k++)
//     {
//         ans.push(arr2[k])
//     }
// }
// console.log(ans);


 
