// let arr = [ -10, 0, 1, 11,12,13,8,9]

//                               Lexografical  or Dicnory order


// arr.sort()
// console.log(arr);



//                                Acending Order


// arr.sort(function(a,b)
// {
//     return a-b
// })
// console.log(arr);

// arr.sort((a,b) => {return a-b})
// console.log(arr);




//                                         Decending Order



// arr.sort((a,b) => {return b-a})
// console.log(arr);





//                                  Frequency Map




// let arr = [1,1,1,2,2,2,3,3,3,0,5]
// let obj = {}
// for ( let item of arr)
// {
//     if (obj[item])
//     {
//         obj[item] = obj[item] + 1
//     }
//     else 
//     {
//         obj[item] = 1
//     }
// }
// console.log(obj);



// let num = [1,2,3,4,5,5,65,1,6,6,6,]
// let obj = {}
// for ( let item of num)
// {
//     if (obj[item])
//     {
//         obj[item] = obj[item] + 1
//     }
//     else
//     {
//         obj[item] = 1
//     }
     
// }
// console.log(obj);






//                         sorting



// let arr = [0,2,3,4,1]
// arr.sort((a,b) => { return a-b})
// console.log(arr);



// arr.sort()
// console.log(arr);



// arr.sort((a,b) => { return b-a})
// console.log(arr);




// arr.sort(function (a,b)
// {
//     return a-b
// })

// console.log(arr);



// arr.sort(function(a,b)
// {
//     return b-a
// })

// console.log(arr);




//                 Missing Number





// arr.sort((a,b) => {
//     return a-b
// })

// for ( let i = 0; i <= arr.length; i++)
// {
//     if ( arr[i] != i)
//     {
//         console.log(i);
        
//     }
// }

 // or

// let n = arr.length
// let sumAll = (n*(n+1))/2
// let sum = 0
// for(let item of arr)
// {
//     sum += item
// }
// console.log(sumAll-sum);


//               Single Number


// let arr = [2,2,2,3,3,2,3,2,3,1,4,5,4,5]
// let obj = {}
// for ( let item of arr)
// {
//     if (obj[item])
//     {
//         obj[item] = obj[item] + 1
//     }
//     else  
//     {
//         obj[item] = 1
//     }
// }
// for ( let item in obj)
// {
//     if (obj[item] == 1)
//     {
//         console.log(item);
        
//     }
// }












