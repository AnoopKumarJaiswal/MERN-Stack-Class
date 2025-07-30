// let arr=[1,2,3,4,5]

//  for ( let i=0;i<arr.length-1;i++)
//  {
//     for (let j=0;j<arr.length-1;j++)
//     {
//         if (arr[j]>arr[j+1])
//         {
//             let temp= arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
//  }
//  console.log(arr);
 




// let arr = [2,3,43,-5,6,3,2]
// for (let i=0 ;i<arr.length;i++)
// {
//     for (let j=0;j<arr.length-1-i;j++)
//     {
//         console.log("ok");
        
//         if (arr[j]>arr[j+1])
//         {
//             let temp = arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr);



// let arr= [3,4,32,4,2,-1,3]

// for (let i=0;i<arr.length-1;i++)
// { 
//     let isSwapDone= false
//     for (let j=0;j<arr.length-1-i;j++)
//     {
//         console.log("ok");
//         if(arr[j]>arr[j+1])
//         {
//             let temp = arr[j]
//             arr [j]=arr[j+1]
//             arr[j+1]=temp
//             isSwapDone=true

//         }
        
//     }
//     if(isSwapDone==false)
//         {
//             break
//         }
// }

// console.log(arr);



// Disending order 




// let arr= [3,4,32,4,2,-1,3]

// for (let i=0;i<arr.length-1;i++)
// { 
//     let isSwapDone= false
//     for (let j=0;j<arr.length-1-i;j++)
//     {
//         console.log("ok");
//         if(arr[j]<arr[j+1])
//         {
//             let temp = arr[j]
//             arr [j]=arr[j+1]
//             arr[j+1]=temp
//             isSwapDone=true

//         }
        
//     }
//     if(isSwapDone==false)
//         {
//             break
//         }
// }

// console.log(arr);






// slection sort





// let arr=[6,1,5,2,3,4]

// for( let i=0;i<arr.length-1;i++)
// {
//     let minIdx=i
//     for (let j=i;j<arr.length;j++)
//     {
//              if (arr[j]<arr[minIdx])
//              {
//                 minIdx=j
//              }
//     }
//     let temp=arr[i]
//     arr[i]=arr[minIdx]
//     arr[minIdx]=temp
// }
// console.log(arr);







// let arr= [1,3,-6,-4,0,6]
// for (let i=0;i<arr.length-1;i++)
// {
//     let minIdx=i
//     for ( let j=i;j<arr.length;j++)
//     {
//         if (arr[j]<arr[minIdx])
//         {
//             minIdx=j
//         }
//     }
//     {
//         let temp=arr[i]
//         arr[i]=arr[minIdx]
//         arr[minIdx]=temp
//     }
// }
// console.log(arr);


// // let arr = [2,3,43,-5,6,3,2]
// let arr= [6,5,4,3,2,1]

// for (let i=0;i<arr.length-1;i++)
// {
   
    
//     for (let j=0;j<arr.length-1;j++)
//     {
//     console.log("ok");

//         if (arr[j]>arr[j+1])
//         {
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr)




// let arr= [6,-30,4,0,2,1]
// for (let i=0;i<arr.length-1;i++)
// {
//     isswappng=false
//     for (let j=0;j<arr.length-1-i;j++)
//     {
//         console.log("ok");
        
//         if (arr[j]>arr[j+1])
//         {
            
//             let temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//             isswappng=true
//         }
//     }
    
//         if (isswappng==true)
//         {
//             break
//         }
    
// }
// console.log(arr);




// let arr=[7,6,5,4,3,2,1]
// for (let i=0;i<arr.length-1;i++)
// {
//     let minIdx=i
//     for (let j=i;j<arr.length;j++)
//     {
//         if(arr[j]<arr[minIdx])
//         {
//             minIdx=j
//         }

//     }
//     {
//         let temp=arr[i]
//         arr[i]=arr[minIdx]
//         arr[minIdx]=temp

//     }
// }
// console.log(arr);
