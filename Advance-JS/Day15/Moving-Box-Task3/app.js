const box = document.getElementById("box")
const dabba = document.getElementById("dabba")



setInterval(() =>{
    box.style.left  =`${ Math.floor(Math.random() *90)}vw`
    box.style.top = `${Math.floor(Math.random()*90 )}vh`
    box.style.transitionDuration = "3sec"
    dabba.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
    box.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
},500)