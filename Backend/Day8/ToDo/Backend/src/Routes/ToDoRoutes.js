const express = require("express")
const router = express.Router()
const {getAllTodo,getATodo,addToto, editTodo,deleteTodo} = require("../Controller/ToDoController")




router.post("/todos" ,addToto )

router.get("/todos" ,getAllTodo )

router.get("/todos/:id",  getATodo)


router.delete("/todos/:id" ,deleteTodo)

router.patch("/todos/:id" ,editTodo)

























module.exports = {
    todoRouter : router
}