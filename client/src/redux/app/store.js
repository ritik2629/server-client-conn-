import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
import logger from 'redux-logger';

export const store=configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})