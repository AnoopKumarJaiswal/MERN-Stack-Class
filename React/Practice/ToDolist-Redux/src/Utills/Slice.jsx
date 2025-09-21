import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
    name : "List",
    initialState : [],
    reducers : {
        addText : (state,action) =>{
            state.push(action.payload)
        },
        deleteText: (state,action) =>{
            const id = action.payload
           const filterArr = state.filter((item) =>{
                return item.id != id
            })
            return filterArr
        }
    }
})
export default textSlice.reducer
export const{addText , deleteText} = textSlice.actions