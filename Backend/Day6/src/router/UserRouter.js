const express = require("express")
const route = express.Router()
const {getUser, getAUser, addAuser, EditAUser, deleteAUser} = require("../Controller/UserContollere")


route.get("/user",getUser)
route.get("/user/:id", getAUser)
route.post("/user", addAuser)
route.put("/user/:id",EditAUser)
route.delete("/user/:id",deleteAUser)


module.exports = {
    userRouter : route
}