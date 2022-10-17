import {createSlice} from "@reduxjs/toolkit";
const initialState:{todoData:string[]}={todoData:[]}
const name:string='TodoList'
export const ListSlice=createSlice({
    name,
    initialState,
    reducers:{
        setData:(state,{payload}):void=>{
            state.todoData=payload
        }
    }
})
export const {setData}=ListSlice.actions;
export default ListSlice.reducer;