// if(!Array.prototype.BinarySearch)
// {
//     Array.prototype.BinarySearch = function (tar) {
//            let arr = this
//            let si = 0
//            let ei = arr.length - 1
//            while(si <= ei)
//            {
//             let mid = Math.floor((si+ei)/2)
//             if(arr[mid] == tar )
//             {
//                 return mid
//             }
//             else if( arr[mid] > tar)
//             {
//                 ei = mid - 1
//             }
//             else
//             {
//                 si = mid + 1
//             }
//            }
//     }
// }

// let arr = [1,4,5,6,8,10,15,17.19]
// let tar = 15
// console.log(arr.BinarySearch(tar))




// if(!String.prototype.contains)
// {
//      String.prototype.contains = function(tar) {
//         let str = this
//         for(let i = 0; i < str.length; i++)
//         {
//             if(str[i] == tar)
//             {
//                 return i
//             }
//         }
//         return -1
//      } 
// }

// let str = "Anoop"
// let tar = "p"
// console.log(str.contains(tar))