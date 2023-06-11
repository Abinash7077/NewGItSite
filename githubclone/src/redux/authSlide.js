import { createSlice } from "@reduxjs/toolkit";

const initialState={
    gitName:"",
   

}
export const authSlide=createSlice({
    name:"GitName",
    initialState,
    reducers:{
        gitData:(state,action)=>{
            
            state.gitName=action.payload.gitName
        }
    }
})
export const {gitData}=authSlide.actions;
export default authSlide.reducer;