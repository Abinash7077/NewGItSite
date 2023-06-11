import { createSlice } from "@reduxjs/toolkit";

const initialState={
    show:false,
   

}
export const darkSlide=createSlice({
    name:"darker",
    initialState,
    reducers:{
        darkLight:(state,action)=>{
            
            state.show=action.payload.show
        }
    }
})
export const {darkLight}=darkSlide.actions;
export default darkSlide.reducer;