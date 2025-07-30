// Print Max element

// let arr=[10,9,101,-10,3,88,57]
// let max=arr[0]
// for (let i=0;i<arr.length;i++)
// {
//     if(arr[i]>max)
//     {
//         max=arr[i]
//     }
// }
// console.log(max);




//Print min element

// let arr=[10,9,101,-10,3,88,57]
// let min=arr[0]
// for (let i=0;i<arr.length;i++)
// {
//     if(arr[i]<min)
//     {
//         min= arr[i]
//     }
// }
// console.log(min);



//sum / avg/ max

// let arr= [10,34,23,6,4,57,34,3]
// let avg=0
// let sum=0
// let max= arr[0]
// for (let i=0;i<arr.length;i++)
// {
//     if(arr[i]>max)
//     {
//         max=arr[i]
//     }
//     sum+=arr[i]
//     avg=Math.floor(sum/arr.length)
// }
// console.log(` ${sum} ${avg} ${max}`);


// max index 

// let arr =[1,2,3,4,44,2,4,3,454,55,5]
// let max=0
// for (let i=0;i<arr.length;i++)
// {
//     if(arr[i]>arr[max])
//     {
//         max=i
//     }
// }
// console.log(max);




// let arr=[1,2,3,4,5,6,4,3]
// let target =4
// let ans= ""
// for( let i=0;i<arr.length;i++)
// {
//         if (arr[i]==target)
//         {
//           ans+=i+1+" "
            
//         }
// }
// console.log(ans);



// let arr=[1,3,5,65,7,8,9,70,89]
// let max=0
// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i]>arr[max])
//     {
//         max=i
//     }
// }
// console.log(max);



let arr=[34,6,7,-7,-8,-4,-2,0,0,4,0,0,]
let p=0
let n=0
let z=0
for (let i=0;i<arr.length;i++)
{
    if(arr[i]==0)
    {
        z++
    }
    else if (arr[i]>0)
    {
        p++
    }
    else if(arr[i]<0)
    {
        n++
    }
}
console.log((p/arr.length).toFixed(6));
console.log((n/arr.length).toFixed(6));
console.log((z/arr.length).toFixed(6));







