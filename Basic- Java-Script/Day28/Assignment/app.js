// function  pattern(n)
// {
//     if (n==0)
//     {
//         return
//     }
//     pattern (n-1)
//     console.log("* ".repeat(n));
    
// }
// pattern(4)





// function power (x,  n)
// {
//     if ( n == 0)
//     {
//         return 1
//     }

//     return x * power( x, n-1)
// }

// let ans = power( 3, 3)
// console.log(ans);




// function power( x, n)
// {
//     if (n == 0)
//     {
//         return 1
//     }
//      return x * power( x, n-1)
// }
// console.log(power( 3, 6));





// function munt(n, m)
// {
//     if ( m == 0 )
//     {
//         return 0
//     }
//     return  n + munt( n , m-1)
// }
// console.log(munt(3,4));




// function power ( n ,m)
// {
//     if ( m== 0)
//     {
//         return 1 
//     }
//      return n * power ( n, m-1)
// }

// console.log(power(3,2));



// function num(n, i,str )
// {
//     if ( i > n)
//     {
//         console.log(str);
//         return 
        
//     }

//     str += i + " "
//     num(n,i+1, str)
     
// }
// num ( 4 , 1,"")


// OR



// 




// let arr = [1,2,3,4,5]
//  arr.forEach( (val) => {
//     console.log( val * val);
    
//  }
// )


// let  arr = [1 ,2, 3, 4, 5, 6, 7]
 
// arr.forEach(  (val) => {
//     console.log(  val );
    
// })

// let arr = [ "delhi" ,"mumbai", "anoop"]
// arr.forEach( ( char) =>
// {
//     console.log(char.toUpperCase());
    
// })



// let arr = [1,2,3,5,6,7,8]

// let sum = arr.reduce( (res, churr) => {
//     return res + churr
// })
// console.log(sum);



// let arr = [23,54,65,324,643,4,89]
// let op = arr.filter( ( val ) => {
//     return  val > 45
// })
// console.log( op );



// let arr = [ 1,2,3,4,5,6]
// let fact = arr.reduce (  ( pre, val ) => {
//     return pre * val
// })
// console.log(fact);


// let n = prompt ( " Enter Number :")
// let arr = []


// for ( i =1; i <=n; i++)
// {
//     arr.push(i)
    
// }
// console.log(arr);
// let sum = arr.reduce ( (pre , churr) => {
//     return pre + churr
// })
// console.log(sum);



// // function binSearch( arr, tar, st, end)
// // {
// //     if ( st <= end)
// //     {
// //         mid = (st + end)/2
// //         if ( arr[mid] == tar)
// //         {
// //             return mid
// //         }
// //         else if ( arr[mid] <= tar)
// //         {
// //             return binSearch ( arr, tar, mid+1, end)

// //         }
// //         else 
// //         {
// //             return binSearch(arr, tar, st, mid-1)
// //         }
// //     }
// //     return -1
// }
// let ans = binSearch ( arr= [1,2,3,4,5,6,7], 5, 0, arr.length-1)
// console.log(ans);




// let arr = [1, 2, 3, 4, 0, 5, 6, 7, 8,9]

// arr.splice(1,4)
// console.log(arr);
// let ans = arr.splice(1,4)
// console.log(ans);


// let arr = [1,2,4,5,6,7,8,]

// let s = 0
// let end = arr.length-1

// while(s<=end)
// {
//     let temp = arr[s]
//     arr[s] = arr[end]
//     arr[end] = temp
//     s++
//     end--
// }
// console.log(arr);





// let arr = [1,2,3,4,5,6,7,8]
// let isSwappingDone = false

// for ( let i = 0; i <arr.length-1; i++)
// {
//     for ( let j = 0; j < arr.length-i; j++)
//     {
//         console.log("OK");
        
//         if (arr[j] > arr[j+1])
//         {
//             isSwappingDone = true
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
//     if(isSwappingDone== false)
//     {
//         break
//     }
// }

// console.log(arr);


// let arr = [1,32,45,-1,0,20]
 
// for( let i =0; i < arr.length-1; i++)
// {
//     let minIdx = i
//     for( let j = i; j < arr.length; j++)
//     {
//         if ( arr[j] < arr[minIdx])
//         {
//             minIdx = j
//         }
//     }
//     {
//         let temp = arr[minIdx]
//         arr[minIdx] = arr[i]
//         arr[i] = temp
//     }
// }
// console.log(arr);

// for( let i = 0; i < arr.length-1; i++)
// {
//     for(let j = i+1; j > 0; j--)
//     {
//         if (arr[j-1] > arr[j])
//         {
//             let temp = arr[j-1]
//             arr[j-1] = arr[j]
//             arr[j] = temp
//         }

//     }

// }
// console.log(arr);



let arr = [1,9,27,33,45 ]
let st = 0
let end = arr.length-1
let target = 30
while(st <= end)
{
    let mid = (Math.floor((st+end)/2))
    if (arr[mid] == target)
    {
        
        console.log(mid); 
        break
    }
    else if (arr[mid] < target)
    {
        st = mid+1
    }
    else
    {
        end = mid-1
    }
    
}
if (st > end)
{
    console.log(-1);
    
}
