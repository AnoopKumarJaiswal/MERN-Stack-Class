const myCard = document.getElementById("myCard")
const button = document.getElementById("btn")

button.addEventListener("click" , () =>{
    async function getdata()
    {
        const retVal = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await retVal.json()

        for(let item of data)
        {
            const card = document.createElement("div")
            const name = document.createElement("p")
            const email = document.createElement("p")
            const body = document.createElement("p")


            name.innerText = item.name
            email.innerText = item.email
            body.innerText = item.body

            card.setAttribute("id", "card")

            card.appendChild(name)
            card.appendChild(email)
            card.appendChild(body)
            myCard.appendChild(card)
        }
        }
        getdata()
     })