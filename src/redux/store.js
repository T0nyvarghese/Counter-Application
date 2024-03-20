import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store = configureStore({
    // reducer is predefined key which is an  object that can hold more than one reducer as key value pairs
    reducer:{
        counter:counterSlice
    }
})