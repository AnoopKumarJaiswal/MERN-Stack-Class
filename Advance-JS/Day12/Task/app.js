 const cardtag = document.getElementById("card")


// window.addEventListener("load" ,() =>{


//      let data = fetch("https://dragonball-api.com/api/characters")
//      data
//      .then((item) =>{
//         return item.json()
//      })
//      .then((ans) =>{
//         console.log(ans);

//         let arr = ans.items
//         console.log(arr);
//         for(let item of arr)
//         {
//              let img = item.image
//              console.log(img);
             

//              let imageTag = document.createElement("img")
//              let btnTag = document.createElement("p")
//              let container = document.createElement("div")

//             imageTag.setAttribute("id" ,"img")
//             container.setAttribute("id" , "cont")


//              imageTag.src = item.image
//              btnTag.innerText = item.name
//              container.appendChild(imageTag)
//              container.appendChild(btnTag)
//              cardtag.appendChild(container)


//         }
        
        
//      })

// })



window.addEventListener("load" , () =>{
    async function getData()
    {
        const retVal = await fetch("https://dragonball-api.com/api/characters")
        const data = await retVal.json()

        for(let item of data.items)
        {
             let img = item.image
             console.log(img);
             

             let imageTag = document.createElement("img")
             let btnTag = document.createElement("p")
             let container = document.createElement("div")

            imageTag.setAttribute("id" ,"img")
            container.setAttribute("id" , "cont")


             imageTag.src = item.image
             btnTag.innerText = item.name
             container.appendChild(imageTag)
             container.appendChild(btnTag)
             cardtag.appendChild(container)


        }
    }
    getData()
})
