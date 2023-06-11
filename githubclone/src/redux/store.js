import { configureStore } from "@reduxjs/toolkit";
import darkSlideReducer from "./darkSlide";

import repoSlideReducer from './repoSlide'

export const store=configureStore({
    reducer:{
        darker:darkSlideReducer,
        reposData:repoSlideReducer,
    },
})