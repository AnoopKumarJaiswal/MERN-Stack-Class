import {configureStore} from "@reduxjs/toolkit"
import textsliceReducer from "./Slice"
const store = configureStore({
    reducer : {
      todolist : textsliceReducer
    }
})

export default store 