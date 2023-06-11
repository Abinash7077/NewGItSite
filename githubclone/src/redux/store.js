import { configureStore } from "@reduxjs/toolkit";
import darkSlideReducer from "./darkSlide";

import repoSlideReducer from './repoSlide'
import authSlideReducer from './authSlide'

export const store=configureStore({
    reducer:{
        darker:darkSlideReducer,
        reposData:repoSlideReducer,
        GitName:authSlideReducer
    },
})