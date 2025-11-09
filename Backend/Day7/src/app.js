require("dotenv").config()
const express = require("express")
const app = express()
const mongos = require("mongoose")



mongos.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DB Connected Successfully")
})  


app.listen(process.env.PORT ,()=>{
    console.log(`server runing on Port ${process.env.PORT

    }` )
})