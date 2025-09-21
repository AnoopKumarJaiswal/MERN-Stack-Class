import { createSlice} from "@reduxjs/toolkit"

const textSlice = createSlice({
    name : "ToDoList",
    initialState : [],
    reducers :{
        addItem : (state,action) =>{
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
export const{addItem } = textSlice.actions
export const{deleteText} = textSlice.actions