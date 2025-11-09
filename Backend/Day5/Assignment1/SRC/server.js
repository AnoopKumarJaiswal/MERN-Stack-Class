const express = require("express")
const app = express()
const uuid = require("uuid")

let data = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "age": 28,
    "city": "New York"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "janesmith@example.com",
    "age": 32,
    "city": "Los Angeles"
  },
  {
    "id": 3,
    "name": "Mike Johnson",
    "email": "mikej@example.com",
    "age": 40,
    "city": "Chicago"
  },
  {
    "id": 4,
    "name": "Emily Davis",
    "email": "emilyd@example.com",
    "age": 24,
    "city": "Houston"
  },
  {
    "id": 5,
    "name": "Robert Brown",
    "email": "robertb@example.com",
    "age": 36,
    "city": "Miami"
  },
  {
    "id": 6,
    "name": "Sarah Wilson",
    "email": "sarahw@example.com",
    "age": 29,
    "city": "San Francisco"
  },
  {
    "id": 7,
    "name": "David Lee",
    "email": "davidl@example.com",
    "age": 45,
    "city": "Seattle"
  },
  {
    "id": 8,
    "name": "Jessica Miller",
    "email": "jessicam@example.com",
    "age": 31,
    "city": "Boston"
  },
  {
    "id": 9,
    "name": "William Anderson",
    "email": "williamand@example.com",
    "age": 50,
    "city": "Denver"
  },
  {
    "id": 10,
    "name": "Olivia Martinez",
    "email": "oliviam@example.com",
    "age": 27,
    "city": "Austin"
  }
]



app.use(express.json())


app.get("/users",(req,res) =>{
  try {
        
        res.json(data)
  } catch (error) {
    res.status(400).json({msg : error.message})
  }
})



app.get("/users/:id", (req,res) =>{
  try {
      const {id} = req.params
  const foundUser = data.find((item) =>{
    return item.id == id 
  })
  res.json(foundUser || {})
  } catch (error) {
    res.status(400).json({msg : error.message})
  }
})



app.post("/users", (req,res) =>{
  try
  {
     const {name, email,city,age,} = req.body
      const newObj = {id: uuid.v1(), name ,email, age, city}
      data.push(newObj)
      res.json(data)
  }
  catch(error)
  {
      res.status(400).json({msg : error.message})
  }
})


app.put("/users/:id", (req,res) =>{
  try{
    const {id} = req.params
    const {name , age , city ,email} = req.body
    for(let item of data)
    {
      if(item.id == id )
      {
        item.name = name,
        item.email = email,
        item.age = age,
        item.city = city
      }
    }
    res.status(201).json(data)
  } catch(error)
  {
    res.status(400).json({msg : error.message})
  }

})



app.delete("/users/:id", (req,res) =>{
 try 
 {
    const{id} =  req.params
    const filterdUser = data.filter((item) =>{
      return item.id != id
  })
  data = filterdUser
  res.json(data)
 } catch(error)
 {
    res.status(400).json({msg : message.error})
 }
})


app.listen(8080, () =>{
    console.log("Surver Runing on 8080 Port")
})