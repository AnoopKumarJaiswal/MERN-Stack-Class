const imgTag = document.getElementById("img")
const button = document.getElementById("btn")


button.addEventListener("click", () => {
   let data =  fetch("https://dog.ceo/api/breeds/image/random")
    data
    .then((val) =>{
        let a =  val.json()
        return a
    })
    .then((ans) => {
        console.log(ans);
        
        imgTag.src = ans.message
        

    })
})




