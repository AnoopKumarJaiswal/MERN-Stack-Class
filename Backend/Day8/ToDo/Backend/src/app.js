require("dotenv").config()

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const { Todo } = require("./Models/ToDo")
app.use(express.json())
const {todoRouter} = require("./Routes/ToDoRoutes")
const cors = require("cors")

app.use(cors())


mongoose.connect(process.env.MONGO_URL)
.then(() =>{
    console.log("DataBase Connected SuccessFully")

    app.listen(process.env.PORT, () =>{
        console.log(`Server Runing On Port ${process.env.PORT}`)
    })
})
.catch(() =>{
    console.log("DB Connection Faild")
})


app.use(todoRouter)




app.use((req , res) =>{
    res.send(`<div style = "height : 100vh; width : 100vw; backgroundColor: red;" > 404</div>`)
})






