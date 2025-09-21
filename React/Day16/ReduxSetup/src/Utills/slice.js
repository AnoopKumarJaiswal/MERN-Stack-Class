import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
        name : "counterSlice",
        initialState : 0,
        reducers : {
            increment : (state, action) => {
                return state + 1
            },
            decrement : (state,action)=>{
                return state - 1
            },
            reset : (state,action) =>{
                return 0
            }
        }
})

export default counterSlice.reducer
export const{increment} = counterSlice.actions
export const{decrement} = counterSlice.actions
export const{reset} = counterSlice.actions
