// function photoClicked(cb)
// {
//     setTimeout(() =>{
//         console.log("Photo Clicked");
//         cb()
//     }, 4000)
// }





// function selecetedPhoto(cb)
// {
//     setTimeout(() => {
//         console.log("Photo Selected");
//        cb() 
//     }, 3000);
// }


// function applyFilter(cb)
// {
//    setTimeout(() =>{
//     console.log("Apply Filter");
//     cb()
//    },2000)
// }




// function writeCaption(cb)
// {
//     setTimeout(() =>{
//         console.log("Write Captiion");
//         cb()
//     },3000)
// }




// function photoUploaded(cb)
// {
//     setTimeout(() => {
//        console.log("Photo Uploaded");
        
//     }, 1000);
// }


// photoClicked(() =>{
//     selecetedPhoto(() =>{
//         applyFilter(() =>{
//             writeCaption(() =>{
//                 photoUploaded(() =>{

//                 })
//             })
//         })
//     })
// })













function photoClicked()
{
   return new Promise((resolve ) =>{
       setTimeout(() =>{
        console.log("Photo Clicked");
        resolve()
       },4000)
   }) 
}


function photoSeletcted()
{
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log("Photo Selected");
            resolve()
        }, 3000);
    })
}



function applyFilter()
{
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log("Apply filter");
            resolve()
        }, 2000);
    })
}




function writeCaption()
{
    return new Promise((resolve) =>{
      setTimeout(() => {
        console.log("Write caption");
        resolve()
      }, 3000);
    })
}



function photoUploaded()
{
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log("Photo Uploaded");
            resolve()
        }, 2000);
    })
}



photoClicked()
.then(photoSeletcted)
.then(applyFilter)
.then(writeCaption)
.then(photoUploaded)