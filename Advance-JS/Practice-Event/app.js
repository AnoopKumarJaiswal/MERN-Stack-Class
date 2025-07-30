const inputTag = document.getElementById("input")
const btnTag = document.getElementById("btn")
const myList = document.getElementById("list")
const textTag = document.getElementById("text")
const bodyTag = document.getElementById("body")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")




inputTag.setAttribute("placeholder", "Please fill ")



btnTag.addEventListener("click" , () =>{
    let val = inputTag.value
    if(val == "")
    {
        alert("Please Input your text")
        return
    }
    let listItem = document.createElement("li")
    listItem.innerText = val
    myList.appendChild(listItem)
    inputTag.value = ""
})


window.addEventListener("keydown" , (e) =>{
  if(e.key == "Enter")
  {

     let val = inputTag.value
     if ( val == "")
        {
            alert("Please input your text")
        }

     let listItem = document.createElement("li")
     listItem.innerText = val
     myList.appendChild(listItem)
     inputTag.value = ""
    }
})


window.addEventListener("scroll" , () =>{
    if(scrollY > 105)
    {
         bodyTag.style.backgroundColor = "black"
         textTag.style.color = "white"
    }
    else
    {
        bodyTag.style.backgroundColor = "white"
        textTag.style.color = "black"
    }
})



btn2.addEventListener("click", () => {
    window.scrollBy(
        {
            top : 3000,
            behavior : "smooth"
        }
    )
})


btn3.addEventListener("click" , () => {
    scrollTo(0,0)
    window.location.reload()
})

