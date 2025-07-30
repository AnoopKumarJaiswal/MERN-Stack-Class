 const grid = document.getElementById("grid")



// const api = "https://hp-api.onrender.com/api/characters"



// const data = fetch(api)






let api = "https://hp-api.onrender.com/api/characters"
fetch(api)

let data = fetch(api)
data.then((val) => {
 let ans = val.json() 
 return ans   
})
.then((finalData) =>{

    

    for ( let item of finalData)
    {
        let card = document.createElement("div")
        let image = document.createElement("img")
        let name = document.createElement("p")

        card.setAttribute("id", "card")
        image.setAttribute("id", "img")
        name.setAttribute("id" , "name")


        image.src = item.image || "https://media.gettyimages.com/id/2178996056/photo/actor-helena-daniel-radcliffe-on-the-set-of-the-film-harry-potter-and-the-order-of-the.jpg?s=612x612&w=gi&k=20&c=BTcp8A012GmqnnC2D8NdpMq2W9LxPiai1lXiBGAHRh4="
        name.innerText = item.name

        card.appendChild(image)
        card.appendChild(name)

        grid.appendChild(card)

    }
    
})



