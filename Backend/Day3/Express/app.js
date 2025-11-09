require("dotenv").config()
const express = require("express")
const app = express()








console.log(process.env.PORT);




app.listen(process.env.PORT , () =>{
    console.log(`Server connected to Port ${process.env.PORT}`)
})