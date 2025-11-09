import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Addtask from "./Components/NewTask";
import {Toaster} from "react-hot-toast"
import EditTodo from "./Components/EditToDo";
const App = () =>{
  return (
    <div>
      <Toaster />
       <Navbar />

       <Routes >
          <Route path = "/" element = {<Home />} />
         <Route path="/home" element = {<Home />}/>
         <Route path="/new" element = {<Addtask />}/>
         <Route path="/edit/:id" element = {<EditTodo />} />
       </Routes>
    </div>
  )
}


export default App