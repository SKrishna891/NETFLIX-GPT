import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name : "movies",
    initialState: {
        NowPlayingMovies : null,
        trailerVideo : null
    },
    reducers:{
        addNowPlayingMovies : (state,action)=>{
            state.NowPlayingMovies = action.payload;
        },
        addPlayingTrailerVideos :(state,action)=>{
            state.trailerVideo = action.payload;
        }
    }   
});

export const {addNowPlayingMovies,addPlayingTrailerVideos} = moviesSlice.actions;
export default moviesSlice.reducer;