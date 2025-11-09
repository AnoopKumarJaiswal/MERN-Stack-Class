const mongoose = require("mongoose")


const toschema = new mongoose.Schema({
    title : {
        type : String,
        strim : true,
        minLength : 10,
        maxLength : 50,
        required : true
      },
    desc :{
        type : String,
        strim : true,
        minLength : 10,
        maxLength : 150,
        required : true        
      },
    isCompleted :{
        type : Boolean,
        required : true,
        default : false
    }
    
})



const Todo = mongoose.model("ToDo" , toschema)

module.exports = {
    Todo
}