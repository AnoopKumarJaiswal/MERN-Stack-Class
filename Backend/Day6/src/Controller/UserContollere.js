const users = [
  {
    id: 1,
    name: "Anoop Kumar Jaiswal",
    age: 25,
    gender: "Male",
    email: "anoop.jaiswal@example.com"
  },
  {
    id: 2,
    name: "Priya Sharma",
    age: 23,
    gender: "Female",
    email: "priya.sharma@example.com"
  },
  {
    id: 3,
    name: "Ravi Singh",
    age: 28,
    gender: "Male",
    email: "ravi.singh@example.com"
  },
  {
    id: 4,
    name: "Neha Verma",
    age: 26,
    gender: "Female",
    email: "neha.verma@example.com"
  },
  {
    id: 5,
    name: "Vikash Yadav",
    age: 24,
    gender: "Male",
    email: "vikash.yadav@example.com"
  }
];


const getUser = (req,res) =>{
    try{
        res.json(users)
    } catch(error)
    {
        res.status(404).json({msg : error.message})
    }
}



const getAUser = (req, res) =>{
    try{
          const {id} = req.params
          const foundUser = users.find((item) =>{
            return item.id == id
          })
          res.json(foundUser || {})
    } catch(error)
    {
        res.status(404).json({msg : error.message})
    }
}

const addAuser = (req, res) =>{
    try{
        const {name ,age, gendre, email} = req.body
        const newUser = {id : uuid.v1(), name , age ,gendre, email}
        users.push(newUser)
        res.status(201).json(users || {})
    } catch(error)
    {
        res.status(404).json({msg : error.message})
    }
}

const EditAUser = (req, res) =>{
    try{
                const {id} = req.params
        for(let item of users)
        {
            if(item.id == id)
            {
                item.name = name,
                item.age = age,
                item.email = email,
                item.gender = gender
            }
        }

        res.status(201).json(users || {})
    } catch(error)
    {
        res.status(404).json({msg : error.message})
    }
}



const deleteAUser = (req, res) =>{
    try{
        const {id} = req.params
        const filterdUser = users.filter((item) =>{
            return item.id != id
        })

        users = filterdUser
        res.status(201).json(users || {})
    } catch(error)
    {
        res.status(400).json({msg : error.message})
    }
}


module.exports = {
    getUser,getAUser,addAuser,EditAUser,deleteAUser
}