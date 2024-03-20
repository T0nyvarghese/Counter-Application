import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:'conterApp',
    initialState:{
        value:0
    },
    //actions are created inside reducers key
    reducers:{
        // first function - to increment value
        increment:(state, actions)=>{
          state.value+=actions.payload
        },
        //function to decrement
        decrement:(state, actions)=>{
          state.value-=actions.payload
        },
        reset:(state)=>{
            state.value=0
        }
    }
})
// actions are used by components to access the state
export const {increment , decrement , reset}=counterSlice.actions
// reduce is required for store to change the value of state
export default counterSlice.reducer
   