import {configureStore} from "@reduxjs/toolkit"
import textSliceReduser from "./Slice"
const stroe = configureStore({
    reducer : {
       list : textSliceReduser 
    }
})
export default stroe
