import { createSlice } from "@reduxjs/toolkit";

const initialState={
    repos:"",
}
export const repoSlide=createSlice({
    name:"reposdata",
    initialState,
    reducers:{
        repoData:(state,action)=>{
            console.log("rr",action.payload.repos)
            state.repos=action.payload.repos
        }
    }

})
export const {repoData}=repoSlide.actions;
export default repoSlide.reducer