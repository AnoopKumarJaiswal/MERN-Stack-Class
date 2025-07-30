const inputBar = document.getElementById("input")
const textareaBar = document.getElementById("ta")
const inputBtn = document.getElementById("btn")
const outPutBar = document.getElementById("main")
// localStorage.setItem("todos", JSON.stringify([]))



let existingTodosStr = localStorage.getItem("todos")
let existingTodos = JSON.parse(existingTodosStr)


for( let item of existingTodos)
{
    const taskTitle = document.createElement("h2")
    const taskDesc = document.createElement("p")
    const textWrapper = document.createElement("div")
    const card = document.createElement("div")
    const deletBtn = document.createElement("button")


    taskDesc.setAttribute("id" , "td")
    taskTitle.setAttribute("id" , "tt")
    textWrapper.setAttribute("id", "tW")
    card.setAttribute("id", "c")
    deletBtn.setAttribute("id" , "dB")
    


    deletBtn.addEventListener("click", () =>{
        delTodo(item.title)
        card.remove()
    })
    



    taskTitle.innerText = item.title
    taskDesc.innerText = item.desc


    textWrapper.appendChild(taskTitle)
    textWrapper.appendChild(taskDesc)
    
    card.appendChild(textWrapper)
    deletBtn.innerText ="🥛"
    card.appendChild(deletBtn)
    outPutBar.appendChild(card)



    deletBtn.addEventListener("click" , () =>{
            card.remove()
    })

}






function delTodo(todoTitle)
{
    console.log(todoTitle);
    let arr = JSON.parse(localStorage.getItem("todos"))
    let temp = []

    for(let item of arr)
    {
        if(item.title != todoTitle)
        {

            temp.push(item)
        }
    }
    localStorage.setItem( "todos", JSON.stringify(temp))
    
}



inputBtn.addEventListener("click" , () =>{
    if ( textareaBar.value == "" && inputBar.value == "")
    {
        alert("Input can not empty")
        return
    }



    let strArr = localStorage.getItem("todos")
    let arr = JSON.parse(strArr)

    let obj = {
        title: inputBar.value,
        desc : textareaBar.value
    }



    arr.push(obj)
    localStorage.setItem("todos", JSON.stringify(arr))

    

    const taskTitle = document.createElement("h2")
    const taskDesc = document.createElement("p")
    const textWrapper = document.createElement("div")
    const card = document.createElement("div")
    const deletBtn = document.createElement("button")


    taskDesc.setAttribute("id" , "td")
    taskTitle.setAttribute("id" , "tt")
    textWrapper.setAttribute("id", "tW")
    card.setAttribute("id", "c")
    deletBtn.setAttribute("id" , "dB")



    deletBtn.addEventListener("click" , () =>{
        delTodo(obj.title)
        card.remove()
    })
    



    taskTitle.innerText = inputBar.value
    taskDesc.innerText = textareaBar.value


    textWrapper.appendChild(taskTitle)
    textWrapper.appendChild(taskDesc)
    
    card.appendChild(textWrapper)
    deletBtn.innerText ="🥛"
    card.appendChild(deletBtn)
    outPutBar.appendChild(card)


    inputBar.value = ""
    textareaBar.value = ""

    deletBtn.addEventListener("click",() =>{
        card.remove()
    })

})






 