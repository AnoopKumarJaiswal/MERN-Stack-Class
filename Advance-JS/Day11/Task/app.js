const dislay = document.getElementById("displsy")
const img = document.getElementById("img")
const button = document.getElementById("btn")

button.addEventListener("click" , () =>{


    let data = fetch("https://api.thecatapi.com/v1/images/search")
data
.then((val) =>{
    let ans = val.json()
    return ans
})
.then((finalData) =>{
    console.log(finalData);
    for (let item of finalData)
    {
        img.src = item.url
     
    }
    
})

})

