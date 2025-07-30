let button1 = document.getElementById("btn1")
let button2 = document.getElementById("btn2")

let text = document.querySelector("h4")
let id = document.querySelector("h2")



button1.addEventListener("click" , () =>{
    text.innerText = "Freinds"
     button1.style.backgroundColor = "gray"
     button1.style.color = "black"
     button2.style.color = "white"
     button2.style.backgroundColor = "rgb(11, 177, 243)"  
     id.style.color = "green"
})


button2.addEventListener("click" , () =>{
    text.innerHTML = "Stranger"
    button2.style.backgroundColor = "gray"
    button2.style.color = "black"
    button1.style.color = "white"
    button1.style.backgroundColor = "rgb(11, 177, 243)"
    id.style.color = "red"
})


