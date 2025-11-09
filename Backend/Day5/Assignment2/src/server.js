
const express = require("express")
const app = express()
app.use(express.json())
const uuid = require("uuid")


let list = [
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "year": 1925,
    "genre": "Fiction"
  },
  {
    "id": 2,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "year": 1960,
    "genre": "Classic"
  },
  {
    "id": 3,
    "title": "1984",
    "author": "George Orwell",
    "year": 1949,
    "genre": "Dystopian"
  },
  {
    "id": 4,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "year": 1951,
    "genre": "Classic"
  },
  {
    "id": 5,
    "title": "Moby Dick",
    "author": "Herman Melville",
    "year": 1851,
    "genre": "Adventure"
  }
]



app.get("/book", (req ,res) =>{
    try
    {
        res.json(list || {})
    }
    catch(error)
    {
        res.status(400).json({msg : error.message})
    }
})



app.get("/book/:id", (req, res) =>{
    try{
        const {id} = req.params
        const foundBook = list.find((item) =>{
            return item.id == id
        })

        res.json(foundBook || {})
    }
    catch(error)
    {
        res.status(400).json({msg : error.message})
    }
})

app.post("/book", (req,res) =>{
    try{
    const {title , author, year, genre} = req.body
    let newObj = {id: uuid.v1(), title, author, year , genre}
    list.push(newObj)
    res.status(201).json(list)
  }
  catch(error)
  {
    res.status(400).json({msg : error.message})
  }

})



app.put("/book/:id" , (req,res) =>{
    try{
          const {id} = req.params
          const {title, author, year, genre} = req.body
          for(let item of list)
          {
            if(item.id == id)
            {
                item.author = author,
                item.title = title,
                item.year = year,
                item.genre = genre
            }
          }
          res.status(201).json(list)
    } catch(error)
    {
        res.status(400).json({msg : error.message})
    }
})


app.get("/",(req,res) =>{
    res.json("Welcome to the Bookstore API!")
})

app.delete("/book/:id", (req,res) =>{
    try 
    {
        const {id} = req.params
        let filterBook = list.filter((item) =>{
            return item.id != id
        })

        list = filterBook
        res.json(list)
    }
    catch(error)
    {
        res.status(400).json({msg : error.message})
    }

})



app.listen(8080, () =>{
    console.log("server running on Port 8080");
    
})










