                            // wrong code




// function mySetInterval( cb, timer)
// {
//     for ( let i = 0; i < 10; i++)
//         {
//             setTimeout(cb, 2000)
//         }
// }

// mySetInterval(() => {
//     console.log("ok")
// }, 2000)











//                                          right code



// function  mySetInterval(cb, timer, count)
// {
//     if ( count == 5)
//     {
//         return
//     }


//      setTimeout(() =>{
//         cb()
//         mySetInterval(cb, timer, count + 1)
//      }, timer)
// }


// mySetInterval(() =>{
//     console.log("ok")
// },1000, 0)




// function mySetInterval(cb, timer, count )
// {
//     if (  count == 6)
//     {
//         return
//     }

//     setTimeout(() =>{
//         cb() 
//         mySetInterval( cb , timer , count + 1)
//     }, timer)
// }
// mySetInterval(() =>{
//     console.log("OK")
    
// } ,1000, 0)