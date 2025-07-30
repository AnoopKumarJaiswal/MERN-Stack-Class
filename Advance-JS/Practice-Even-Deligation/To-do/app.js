const button = document.getElementById("btn")
const inputTag = document.getElementById("text")
const textArea = document.getElementById("ta")
const rightTag = document.getElementById("right")



button.addEventListener("click" , () =>{
    console.log("done");
    
   let  container = document.createElement("div")
   let textWrapper = document.createElement("div")
   let innerText = document.createElement("h2")
   let textArea = document.createElement("li")
   innerText = inputTag.value
   textArea = textArea.value
   textWrapper.appendChild(innerText)
   textWrapper.appendChild(textArea)
   container.appendChild(textWrapper)
   rightTag.appendChild(container)

})