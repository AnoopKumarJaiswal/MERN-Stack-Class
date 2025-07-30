const bodyTag = document.getElementById("bdy")




setInterval(() =>{
    
    bodyTag.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
},500)