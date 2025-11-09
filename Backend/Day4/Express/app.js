const express = require("express")
const app = express()
app.use(express.json())



// app.get("/hello", (req, res) =>{
//       res.send("Hello from Get API")
// })

let arr = [
    {
        name : "Anoop", 
        age : 24
    },
    {
        name : "Shubham" ,
        age : 25
    },
    {
        name : "Hardik",
        age : 30
    }
]



// app.use("/get-data", (req, res) => {
//       res.json(arr)  
// })



// app.get("/get-user-data", (req, res) =>{
//     const {userName} = req.body

//     const foundUser = arr.find((item) =>{
//         return item.name.toLowerCase() == userName.toLowerCase()
//     })
//     res.json(foundUser)
// })





app.get("/get-user-query-data", (req,res) =>{
    console.log(req.query);
    
    const {userName} = req.query

    const foundUser = arr.find((item) =>{
        return item.name.toLowerCase() == userName.toLowerCase()
    })
    res.json(foundUser)
})


app.listen(8080, () =>{
    console.log("Sever Runing on Port 8080");
    
})