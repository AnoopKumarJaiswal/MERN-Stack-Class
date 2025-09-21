import { createSlice } from "@reduxjs/toolkit";

const counteSlice = createSlice({
    name : "counterSlice",
    initialState : 0,
    reducers : {
        increment : (state,action) =>{
            return state + 1
        },
        decrement : (state,action) =>{
            return state - 1
        },
        reset : (state,action) => {
            return 0
        }
    }
})
export default counteSlice.reducer
export const{increment} = counteSlice.actions
export const{decrement} = counteSlice.actions
export const{reset} = counteSlice.actions
