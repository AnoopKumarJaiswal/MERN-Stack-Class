const myCardTag = document.getElementById("myCard")



window.addEventListener("load" , () =>{
    async function getData()
    {
        const retVal = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await retVal.json()

        for ( let item of data)
        {
            
            let card = document.createElement("div")
            const name = document.createElement("p")
            const useName = document.createElement("p")
            const email = document.createElement("p")
  
  
            name.innerText = item.name
            useName.innerText = item.username
            email.innerText = item.email

            card.setAttribute("id", "card")


            card.appendChild(name)
            card.appendChild(useName)
            card.appendChild(email)

            myCardTag.appendChild(card)
        }
    }
    getData()
})