const {Todo} = require("../Models/ToDo")


const addToto = async(req,res) =>{
    try {
        const { title, desc  } = req.body
        const data = await Todo.insertOne({title , desc ,  isCompleted : false })
        res.json({message : "Done", data })
    } catch (error) {   
       res.status(400).json({msg : error.message}) 
    }
}



const getAllTodo = async(req,res) =>{
    try {
        const data = await Todo.find()
        res.json({data})
    } catch (error) {
        res.status(404).json({msg : error.message})
    }
}

const getATodo =  async(req,res) =>{
    try {
        const {id} = req.params
        const data = await Todo.findOne({_id : id})
        res.json({data})
    } catch (error) {
        res.status(404).json({msg : error.message})
    }
}

const deleteTodo = async(req,res) =>{
    try {
        const {id} = req.params
        const data = await Todo.deleteOne({_id : id})
        res.json({data})
    } catch (error) {
        res.status(404).json({msg : error.message})
    }
}

const editTodo =  async(req,res) =>{
    try {
        const {id} = req.params
        const {title, desc, isCompleted} = req.body
        const data = await Todo.findByIdAndUpdate(id, {title , desc,isCompleted} , {new : true})
        res.json({data})
    } catch (error) {
        res.status(404).json({msg : error.message})
    }
}

module.exports = {
    getAllTodo , getATodo, addToto , deleteTodo, editTodo
}