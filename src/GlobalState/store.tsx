import { configureStore } from "@reduxjs/toolkit";
import  ListSlice  from "./listSlice";

export const store=configureStore({
    reducer:{
        TodoData:ListSlice
    }
})