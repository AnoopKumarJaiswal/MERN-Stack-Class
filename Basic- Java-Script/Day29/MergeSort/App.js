// // MergeSort Array


// function mergeSoretdArray(arr1,arr2)
// {
//     let res = []
//     let  i = 0
//     let j = 0
//     while(i < arr1.length && j < arr2.length)
//     {
//         if ( arr1[i] <= arr2[j])
//         {
//             res.push(arr1[i])
//             i++
//         }
//         else 
//         { 
//             res.push(arr2[j])
//             j++
//         }
//     }
//     while ( i < arr1.length)
//     {
//         res.push(arr1[i])
//         i++
//     }
//     while ( j < arr2.length)
//     {
//         res.push(arr2[j])
//         j++
//     }
//     return res
// }


// function mergeSort (arr)
// {
//     if ( arr.length == 1)
//     {
//         return arr
//     }
//    let  mid = Math.floor((0+arr.length)/2)
//     let left = mergeSort(arr.slice(0,mid))
//     let right = mergeSort(arr.slice(mid))
//     return mergeSoretdArray(left, right)
// }

// let ans = mergeSort([999,8,6,3,1,-10])
// console.log(ans);



// function mergeSortedArray(arr1, arr2)
// {
//     let res = []
//     let i = 0
//     let j = 0
//     while ( i < arr1.length && j < arr2.length )
//     {
//         if ( arr1[i] < arr2[j])
//         {
//             res.push(arr1[i])
//             i++
//         }
//         else 
//         {
//             res.push(arr2[j])
//             j++
//         }
//     }
//     while ( i < arr1.length)
//     {
//         res.push(arr1[i])
//         i++
//     }
//     while(j < arr2.length)
//     {
//         res.push(arr2[j])
//         j++
//     }
//     return res
// }



// function mergesort(arr)
// {
//     if ( arr.length == 1)
//     {
//         return arr
//     }
//     let mid = Math.floor((0+arr.length)/2)
//     let left = mergesort(arr.slice(0,mid))
//     let right = mergesort(arr.slice(mid))
//     return mergeSortedArray(left , right)
// }
// let ans = mergesort([23,1,25,76,199,-1,0])
// console.log(ans);




