const { createSlice } = require("@reduxjs/toolkit");

const LanguageSlice = createSlice({
    name :"Language",
    initialState:{
        langkey : "en",
    },
    reducers : {
        SelectLangKey :(state,action) =>{
            state.langkey = action.payload;
        }
}});

export const {SelectLangKey} = LanguageSlice.actions;
export default LanguageSlice.reducer;