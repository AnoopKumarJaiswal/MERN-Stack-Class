const outerDiv = document.getElementById("outer")
const lorem = document.getElementById("text")

console.log(outerDiv.parentElement);
console.log(outerDiv.children);
console.log(outerDiv.children[0].children[0]);
console.log(outerDiv.children[0].children[0].children[0].innerText);
console.log(outerDiv.children[0].children[0].children[0].nextElementSibling.innerText);



outerDiv.children[0].children[0].children[0].addEventListener("click" ,() =>{
    outerDiv.parentElement.style.backgroundColor = "red"
})



outerDiv.children[0].children[0].addEventListener("click" , () => {
    lorem.remove()
})


lorem.addEventListener("click" , (e) =>{
    console.log(e);
    
})

 
"use strict";
a = 100
console.log(a);
