const  bodayTag = document.getElementById("main")
const box = document.getElementById("dabba")



box.addEventListener("click" , (e) =>{
    //  console.log(e);
    //  if(e.target.tagName == "DIV")
    //  {
    //     bodayTag.style.backgroundColor = e.target.innerText
    //  }
    if(e.target.tagName == "DIV")
    {
        bodayTag.style.backgroundColor = e.target.style.backgroundColor
    }
})