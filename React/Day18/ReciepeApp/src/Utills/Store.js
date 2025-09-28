import {configureStore} from "@reduxjs/toolkit"
import reciepeSliceReducer from "./Slice"
import cacheSliceReducer from "./CacheSlice"
const store = configureStore({
    reducer : {
        reciepe : reciepeSliceReducer ,
        cache : cacheSliceReducer
    }
})
export default store