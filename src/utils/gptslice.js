import { createSlice } from "@reduxjs/toolkit";


const gptslice = createSlice({
    name : "Gpt",
    initialState :{
        gptSearch : false,
    },
    reducers:{
        tooglegptSearch : (state)=>{
            state.gptSearch = !state.gptSearch;
        }
    }
});

export const {tooglegptSearch} = gptslice.actions;
export default gptslice.reducer;