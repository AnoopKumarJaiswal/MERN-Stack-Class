// let arr = [1,2,3,4,5,6,7,8,9,10]
// const data = arr.map((item) =>{
//     return item ** 2
// })

// const data2 = arr.map((item ) =>{
//     return item % 2 == 0 ? "Even" : "Odd"
// })

// console.log(data);
// console.log(data2)






// filter 




// let arr = [1,3,4,5,6,45,60,33,60]

// let nums = arr.filter((item) =>{
//     return item % 3 == 0
// //     return true
// //     return false
// })


// console.log(nums);



// let names = [ "Akash" , "Anoop" ,"Yug" , "Om" , "Priyanshu"]

// const n = names.filter((item) => {
//     return item.includes("a")  || item.includes("A")
// })

// console.log(n);





// Reduce 




// let arr = [ 1,2,3,4,5,6,76]
// let sum = arr.reduce(( acc , cur) => {
//     return acc + cur
// })

// console.log(sum);


// let arr2 =[ "a", "b", "c", "d"]
// let str = arr2.reduce((acc , cur) =>{
//     return acc+cur
// })

// console.log(str);



// let arr3 = [ 3,4,5,6,7]
// let multi = arr3.reduce((acc, cur) => {
//     return acc * cur
// })
// console.log(multi);



let arr = [1,2,3,4,5,6,7,8]
let sum = arr.reduce((acc , res) => {
    return acc + res
}, 10)
console.log(sum);




let arr2 = [1,2,3,4,5,6]
let ans = arr2.map((item , index) => {
    console.log();
    
    return index
})
console.log(ans);
