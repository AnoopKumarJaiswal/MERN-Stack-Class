import {createSlice} from "@reduxjs/toolkit"
const cacheSlice = createSlice({
    name : "Chache",
    initialState : [],
    reducers : {
       addReciepe : (state,action) =>{
        state.push(action.payload)
       }
    }
})

export default cacheSlice.reducer
export const{addReciepe} = cacheSlice.actions