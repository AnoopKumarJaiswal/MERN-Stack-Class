const express = require("express")
const { getBookData, getABook, addAbook, EditABook, deleteABook } = require("../Controller/BookController")
const route = express.Router()

route.get("/books",getBookData)
route.get("/books/:id",getABook)
route.put("books/:id",addAbook)
route.post("/books",EditABook)
route.delete("/books/id",deleteABook )


module.exports = {
    bookRouter : route
}