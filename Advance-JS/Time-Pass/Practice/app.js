let inputTag = document.getElementById("input")
let textTag = document.getElementById("textArea")
let button = document.getElementById("btn")
let rightBox = document.getElementById("right-container")



let exisitingTodoStr = localStorage.getItem("todos")
let arr = JSON.parse(exisitingTodoStr)
for ( let item of arr)
{
    let card = document.createElement("div")
    let textContainer = document.createElement("div")
    let titeTask = document.createElement("h2")
    let descTask = document.createElement("p")
    let dletBtn = document.createElement("button")

    dletBtn.addEventListener("click", () =>{
        delTodo(item.tite)
        card.remove()
    })


    card.setAttribute("id" , "card")
    textContainer.setAttribute("id" , "tc")
    descTask.setAttribute("id" , "dt")
    titeTask.setAttribute("id" , "tT")
    dletBtn.setAttribute("id" , "dB")

    titeTask.innerText = item.title
    descTask.innerText = item.desc
    dletBtn.innerText = "❌"


    textContainer.appendChild(titeTask)
    textContainer.appendChild(descTask)
    card.appendChild(textContainer)
    card.appendChild(dletBtn)
    rightBox.appendChild(card)

}



function delTodo(delTitile)
{
   let arr = JSON.parse(localStorage.getItem("todos"))
   let temp = []
   for(let item of arr)
   {
    if( item.title != delTitile)
    {
         temp.push(item)
    }
   }
   localStorage.setItem("todos", JSON.stringify(temp))

}






button.addEventListener("click" , () => {
    if( inputTag.value == ""  ||  textTag.value == "")
    {
        alert("input cannot be empty")
        return
    }


    
    let todosArrStr = localStorage.getItem("todos")
    let todosArr = JSON.parse(todosArrStr)

    let obj = {
        title : inputTag.value,
        desc: textTag.value
    }
    

    todosArr.push(obj)

    localStorage.setItem("todos", JSON.stringify(todosArr))

    let card = document.createElement("div")
    let textContainer = document.createElement("div")
    let titeTask = document.createElement("h2")
    let descTask = document.createElement("p")
    let dletBtn = document.createElement("button")


    card.setAttribute("id" , "card")
    textContainer.setAttribute("id" , "tc")
    descTask.setAttribute("id" , "dt")
    titeTask.setAttribute("id" , "tT")
    dletBtn.setAttribute("id" , "dB")

    dletBtn.addEventListener("click" , () => {
        delTodo(obj.title)
        card.remove()
    })

    titeTask.innerText = inputTag.value
    descTask.innerText = textTag.value
    dletBtn.innerText = "❌"


    textContainer.appendChild(titeTask)
    textContainer.appendChild(descTask)
    card.appendChild(textContainer)
    card.appendChild(dletBtn)
    rightBox.appendChild(card)

    inputTag.value = ""
    textTag.value = ""
   
    
})


