const uuid = require("uuid")

let books = [
    { id: 1, title: "DSA", price: 300, author: "Narasimha Karumanchi" },
    { id: 2, title: "MERN", price: 600, author: "Brad Traversy" },
    { id: 3, title: "Clean Code", price: 550, author: "Robert C. Martin" },
    { id: 4, title: "JavaScript: The Good Parts", price: 400, author: "Douglas Crockford" },
    { id: 5, title: "Atomic Habits", price: 450, author: "James Clear" }
]


const getBookData = (req, res) =>{
    try{
        res.json(books)
    } catch(error)
    {
        res.status(404).json({msg : error.message})
    }
}

const getABook = (req,res) =>{
    try{
        const {id} = req.params
    const foundBook = books.find((item) =>{
        return item.id == id
    })
    res.json(foundBook || {})
    } catch (error)
    {
        res.json({msg : error.message})
    }
}



const addAbook = (req ,res) =>{
    try{
        const { title , price, author ,} = req.body
        const newBook = {id : uuid.v1() , title, price, author}
        books.push(newBook)
        res.status(201).json(books || {})
    } catch(error)
    {
        res.status(404).json({msg : error.message})
    }
}


const EditABook = (req, res) =>{
    try{
        const {id} = req.params
        const {title, price,author} = req.body
        for(let item of books)
        {
            if(item.id == id)
            {
                item.title = title,
                item.author = author,
                item.price = price
            }
        }
      res.status(201).json(books || {})
    } catch(error)
    {
        res.status(404).json({msg : error.message})
    }
}


const deleteABook = (req,res) =>{
    try{
        const {id} = req.params
        const filterdBook = books.filter((item) =>{
            return item.id != id
        })
        books = filterdBook
        res.json(books || {})
    } catch(error)
    {
        res.status(404).json({msg : error.message})
    }
}




module.exports = {getBookData, getABook, addAbook , EditABook ,deleteABook}