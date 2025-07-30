let inputTag = document.getElementById("input")
let textTag = document.getElementById("texta")
let button = document.getElementById("btn")
let rightDiv = document.getElementById("cC")

// localStorage.setItem("todos" ,JSON.stringify([]))


let exisitingTodosStr = localStorage.getItem("todos")
let exisitingTodo = JSON.parse(exisitingTodosStr)


for ( let item of exisitingTodo)
{
    let cardContainer =  document.createElement("div")
    let card = document.createElement("div")
    let textWrapper = document.createElement("div")
    let titleTask = document.createElement("h2")
    let descTask = document.createElement("p")
    let dltBtn = document.createElement("button")



   
    

    titleTask.innerText = item.title
    descTask.innerText = item.desc
    dltBtn.innerText = "❌"



    dltBtn.addEventListener("click" , () =>{
        delTodo(item.title)
        card.remove()
    })
    

    card.setAttribute("id", "card")
    textWrapper.setAttribute("id" , "tW")
    titleTask.setAttribute("id" , "tT")
    descTask.setAttribute("id" , "dT")
    dltBtn.setAttribute("id", "dlt")
    cardContainer.setAttribute("id" , "cC")


    textWrapper.appendChild(titleTask)
    textWrapper.appendChild(descTask)
    card.appendChild(textWrapper)
    card.appendChild(dltBtn)
    rightDiv.appendChild(card)

}



function delTodo(delTitile)
{
    let arr = JSON.parse(localStorage.getItem("todos"))
    let temp = []
    for ( let item of arr)
    {
        if ( item.title != delTitile)
        {
            temp.push(item)
        }
    }
    localStorage.setItem("todos" , JSON.stringify(temp))
}


button.addEventListener("click", () =>{
    if (inputTag.value === "" && textTag.value === ""  )
    {  
        alert("Input can not be Empty")
        return
    }

    

    let todosArrStr = localStorage.getItem("todos")
    let arr = JSON.parse(todosArrStr)

    let obj = {
        title: inputTag.value,
        desc : textTag.value
    }

    arr.push(obj)
    localStorage.setItem("todos", JSON.stringify(arr))


    let cardContainer =  document.createElement("div")
    let card = document.createElement("div")
    let textWrapper = document.createElement("div")
    let titleTask = document.createElement("h2")
    let descTask = document.createElement("p")
    let dltBtn = document.createElement("button")



   
    

    titleTask.innerText = inputTag.value
    descTask.innerText = textTag.value
    dltBtn.innerText = "❌"

    dltBtn.addEventListener("click" , () => {
        delTodo(obj.title)
        card.remove()
    })
    

    card.setAttribute("id", "card")
    textWrapper.setAttribute("id" , "tW")
    titleTask.setAttribute("id" , "tT")
    descTask.setAttribute("id" , "dT")
    dltBtn.setAttribute("id", "dlt")
    cardContainer.setAttribute("id" , "cC")


    textWrapper.appendChild(titleTask)
    textWrapper.appendChild(descTask)
    card.appendChild(textWrapper)
    card.appendChild(dltBtn)
    rightDiv.appendChild(card)


    inputTag.value = ""
    textTag.value = ""


}) 