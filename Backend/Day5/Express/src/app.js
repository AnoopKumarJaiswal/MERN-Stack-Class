const express = require("express")
const app = express()
app.use(express.json())
let data = [
  { name: "Anoop", age: 25, gender: "Male" },
  { name: "Priya", age: 23, gender: "Female" },
  { name: "Rohit", age: 28, gender: "Male" },
  { name: "Sneha", age: 21, gender: "Female" },
  { name: "Vikash", age: 26, gender: "Male" },
  { name: "Neha", age: 24, gender: "Female" },
  { name: "Rahul", age: 29, gender: "Male" },
  { name: "Simran", age: 22, gender: "Female" }
]


// app.get("/hello", (req, res) =>{
// //     res.json("Hello My Name is Anoop")
// // })




// app.get("/get-user-data" , (req, res) =>{
//     res.json(data)
// })


// app.get("/get-profile", (req,res)=>{
//     const {name} = req.query

//     const found = data.find((item) =>{
//         return item.name.toLowerCase().includes(name.toLowerCase())
//     })

//     res.json(found || {})
// })


// app.get("/user-data", (req, res) =>{
//     const {name} = req.body

//     const foundUser = data.find((item) =>{
//         return item.name.toLowerCase().includes(name.toLowerCase())
//     })

//     res.json(foundUser || {})
// })




app.get("/new-endpoint/:name/:age/:surname", (req,res) =>{
    const {name} = req.params

    const foundObj = data.find((item) =>{
        return item.name.toLowerCase().includes(name.toLowerCase())
    })

    res.json(foundObj)
})


app.listen(8080, () =>{
    console.log("Server Runing on port 8080");
})