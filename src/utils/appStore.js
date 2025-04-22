import { configureStore } from "@reduxjs/toolkit";

import userReducer  from "./userSlice";

import moviesReducer from "./moviesSlice";

import GptReducer from "./gptslice";
 
import LanguageReducer from "./LanguageSlice";
 

 const appStore = configureStore({
    reducer:{
      user : userReducer,
      movies : moviesReducer,
      Gpt : GptReducer,
      Language : LanguageReducer,
    }
 });

 export default appStore;
