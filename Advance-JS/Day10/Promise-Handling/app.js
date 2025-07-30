// let p1 = new Promise ((resolve, reject) =>{
//     let data = true
//     let arr = [{name: "Anoop"} , { name : "Vision"}, {name:"hathi"}]
//     if ( data)
//     {
//         resolve(arr)
//     }
//     else
//     {
//         reject("Not OK")
//     }
// })


// p1
// .then((d) =>{
//     console.log("Promise Resolved");
//     console.log(d);
    
    
// })

// .catch(() =>{
//     console.log("Promise Rejected");
    
// })
// .finally(() => {
//     console.log("Finally Chala");
    
// })



// let p2 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve([1,2,3,4,5,6])
//     }, 5000)
// })


// p2
// .then((arr) =>{
//     console.log(arr);  
// })
// .catch(() =>{
//     console.log("Promise failed");
    
// })
// .finally(() => {
//     console.log("Finally Chala")
// })





let p2 = new Promise ( (resolve, reject) =>{

    setTimeout(() =>{
        resolve([1,2,3,4,5])
    },5000)
})

p2
.then((arr)  =>{
    console.log(arr);
    
})
.catch(() =>{
    console.log("Promise Failed");
    
})
.finally(() =>{
    console.log("Finally Chala");
    
})