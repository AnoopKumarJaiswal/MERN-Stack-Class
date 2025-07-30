const grid = document.getElementById("grid")




window.addEventListener("load" , () =>{
    let data = fetch("https://api.imgflip.com/get_memes")
    data
    .then( (val) =>{
        return val.json()
    })
    .then((ans) => {
        // console.log(ans);
       let arr = ans.data.memes
    //    console.log(arr);
       
       for(let item of arr)
       {
           console.log(item.name);
         let cardTag = document.createElement("div")
         let imageTag = document.createElement("img")
         let nameTag = document.createElement("p")

         cardTag.setAttribute("id", "card")
         imageTag.setAttribute("id" , "img")
         nameTag.setAttribute("id", " name")

         imageTag.setAttribute("id" ,"img")
         

         imageTag.src = item.url
         nameTag.innerText = item.name


        cardTag.appendChild(imageTag)
        cardTag.appendChild(nameTag)
        grid.appendChild(cardTag)
       }
        
    })
})

 
    

      
