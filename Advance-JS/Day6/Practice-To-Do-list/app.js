const inputTag = document.getElementById("input")
const textBar = document.getElementById("text")
const button = document.getElementById("btn")
const rightTag = document.getElementById("right")

// localStorage.setItem("todos", JSON.stringify([]))


let existingTodosStr = localStorage.getItem("todos")
let existingTodo =JSON.parse(existingTodosStr) 


for ( let item of existingTodo)
{
    const card = document.createElement("div")
    const wrapper = document.createElement("div")
    const titleBar = document.createElement("h2") 
    const textDesc = document.createElement("p")
    const dltBtn = document.createElement("button")
    


    card.setAttribute("id" , "card")
    wrapper.setAttribute("id" , "w")
    titleBar.setAttribute("id", "tB")
    textDesc.setAttribute("id", "td")
    dltBtn.setAttribute("id", "db")
    


    titleBar.innerText = item.title
    textDesc.innerText = item.desc
    dltBtn.innerText = "❌"


    wrapper.appendChild(titleBar)
    wrapper.appendChild(textDesc)
    
    card.appendChild(wrapper)
    rightTag.appendChild(card)
    card.appendChild(dltBtn)



    dltBtn.addEventListener("click" , () =>{
        dltTodo(item.title)
        card.remove()
    })

}



function dltTodo(todoTitle)
{
     let arr = JSON.parse(localStorage.getItem("todos"))
     let temp = []
     for ( let item of arr)
     {
        if ( item.title != todoTitle)
        {
            temp.push(item)
        }
     }
     localStorage.setItem("todos" , JSON.stringify(temp))
}



button.addEventListener("click" , () => {
    

    if( inputTag.value == "" &&  textBar.value == "")
    {
        alert("input can not access")
        return
    }



    let todosArrStr = localStorage.getItem("todos")
    let arr = JSON.parse(todosArrStr)


    let obj = {
        title : inputTag.value,
        desc : textBar.value
    }

    arr.push(obj)
    localStorage.setItem("todos", JSON.stringify(arr))



    
    const card = document.createElement("div")
    const wrapper = document.createElement("div")
    const titleBar = document.createElement("h2") 
    const textDesc = document.createElement("p")
    const dltBtn = document.createElement("button")



    dltBtn.addEventListener("click" , () =>{
        dltTodo(obj.title)
        card.remove()
    })
    


    card.setAttribute("id" , "card")
    wrapper.setAttribute("id" , "w")
    titleBar.setAttribute("id", "tB")
    textDesc.setAttribute("id", "td")
    dltBtn.setAttribute("id", "db")
    


    textDesc.innerText = textBar.value
    titleBar.innerText = inputTag.value
    dltBtn.innerText = "❌"


    wrapper.appendChild(titleBar)
    wrapper.appendChild(textDesc)
    
    card.appendChild(wrapper)
    rightTag.appendChild(card)
    card.appendChild(dltBtn)




    inputTag.value = ""
    textBar.value = ""


})