import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todo:[]
}

const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
           const id=Math.random()
           state.todo.push({id:id,text:action.payload})
        },
        removeTodo:(state,action)=>{
            state.todo=state.todo.filter((item)=>{
                return item.id !== action.payload.id
            })
        },
        clearTodo:state=>{
            state.todo=[]
        }
    }
})

export const {addTodo,removeTodo,clearTodo}=todoSlice.actions
export default todoSlice.reducer