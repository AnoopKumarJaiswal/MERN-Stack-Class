import {configureStore} from "@reduxjs/toolkit"
import counterSliceReducer from "./slice"
const store = configureStore({
    reducer : {
       counter : counterSliceReducer

    }
})


export default store
