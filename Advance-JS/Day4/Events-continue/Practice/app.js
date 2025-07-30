const inputTag = document.getElementById("input")
const button = document.getElementById("list")
const myList = document.getElementById("li")
const button2 = document.getElementById("btn2")
const body = document.getElementById("body")
const text = document.getElementById("text")
const button3 = document.getElementById("btn3")





myList.style.border = " 1px solid black"




button.addEventListener("click" , () => {
    let val = inputTag.value
    if ( val == "")
    {
        alert("Please input Text")
        return
    }
    listItem = document.createElement("li")
    listItem.innerText = val
    myList.appendChild(listItem)
    inputTag.value = ""
    
})


window.addEventListener("keydown" , (e) => {
    if( e.key == "Enter")
    {
        let val = inputTag.value
        if( val == "")
        {
            alert("Please input Text")
            return
        }
        listItem = document.createElement("li")
        listItem.innerText = val
        myList.appendChild(listItem)
        inputTag.value = ""
    }
})


window.addEventListener("scroll" ,() =>{
    if( scrollY > 105)
    {
        body.style.backgroundColor = "black"
        text.style.color = "white"
    }
    else
    {
        body.style.backgroundColor = "white"
        text.style.color = "black"
    }
})


button2.addEventListener("click", () => {
    window.scrollBy(
        {
            top : 3000,
            behavior :"smooth"
        }
    )
})



button3.addEventListener("click", () =>{
    scrollTo(0,0)
    window.location.reload()
})







