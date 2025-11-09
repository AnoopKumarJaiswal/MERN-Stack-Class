require("dotenv").config()
const express = require("express")
const { bookRouter } = require("./router/BooksRouter")
const {userRouter} = require("./router/UserRouter")
const app = express()


app.use(express.json())
app.use(bookRouter)
app.use(userRouter)



app.use((req,res) =>{
   res.send(`<div style = "background-color:black; color:white; height: 98vh; width: 98vw; display:flex; justify-content: center; align-items:center; font-size: 60px"><h1>ERROR</h1>:<p>Page Not Found!</p></div>`)
})




 

 app.listen(process.env.PORT, () =>{
    console.log(`server runing on Port  ${process.env.PORT}`);
    
 })