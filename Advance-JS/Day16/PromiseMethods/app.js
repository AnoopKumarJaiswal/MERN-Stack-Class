// const p1 = new Promise((resolve , reject) =>{
//     setTimeout(() => {
//         resolve(["cat", "Dog"])
//     },2000)
// })


// const p2 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve(["Black", "White"])
//     }, 3000)
// })


// const p3 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         reject( "Promise three Rejected")
//     },5000)
// })




// Promise.all([p1,p2,p3])
// .then((...arr) =>{
//     for (let item of arr)
//     {
//         console.log(item);
        
//     }
// })
// .catch((err) =>{
//     console.log(err);
    
// })



// Promise.all([p1,p2,p3])
// .then(([d1,d2,d3]) =>{
//     console.log(d1);
//     console.log(d2);
//     console.log(d3);
    
// })


const p1 = new  Promise((resolve,reject) =>{
       setTimeout(() =>{
        reject("P1 resolved" );
        
       }, 2000)
})


  const p2 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
         resolve("P2 rejected")
    },3000)
})



const p3 = new Promise((resolve,reject) =>{
    setTimeout(() =>{

        resolve("P3 Resolved")
    }, 5000)
})

// p1
// .then((data) =>{
//     console.log(data);
    
// })


// p2
// .then((data) => {
//     console.log(data);
    
// })

// p3
// .then((item) =>{
//     console.log(item);
    
// })
// .catch((data) =>{
//     console.log("p3 Rejected");
    
// })





// Promise.all([p1,p2,p3])
// .then(([d1,d2,d3]) =>{
//     console.log(d1);
//     console.log(d2);
//     console.log(d3);    
// })


// Promise.all([p1,p2,p3])
// .then(([d1,d2,d3]) =>{
//      console.log(d1);
//      console.log(d2);
//      console.log(d3);    
// })
// .catch((err) =>{
//     console.log(err);
    
// })


//  Promise.race([p1,p2,p3])
//  .then((data) =>{
//     console.log(data);
    
//  })
//  .catch((date) => {
//     console.log("P1 rejected");
    
//  })




// Promise.allSettled([p1,p2,p3])
// .then((arr)=>{
//     console.log(arr);
    
// })

Promise.any([p1,p2,p3])
.then((data) =>{
    console.log(data);
    
})
