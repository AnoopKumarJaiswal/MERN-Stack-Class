const bodyTag = document.getElementById("body")
const mainTag = document.getElementById("main")



mainTag.addEventListener("click" , (e) => {
   
    console.log(e);
    
if (e.target.tagName == "DIV")
{
   bodyTag.style.backgroundColor = e.target.style.backgroundColor
}
    
})















