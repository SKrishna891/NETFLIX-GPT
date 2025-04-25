import { createSlice } from "@reduxjs/toolkit";


const gptslice = createSlice({
    name : "Gpt",
    initialState :{
        gptSearch : false,
        movienames:null,
        movieresults:null
    },
    reducers:{
        tooglegptSearch : (state)=>{
            state.gptSearch = !state.gptSearch;
        },
        addgptMovies : (state,action)=>{
         const {movienames,movieresults} = action.payload;
         state.movienames = movienames;
         state.movieresults = movieresults;
        }
    }
});

export const {tooglegptSearch,addgptMovies} = gptslice.actions;
export default gptslice.reducer;