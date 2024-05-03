import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./movie.slice";


const store = configureStore(
    {
        reducer: {
            movie: MovieSlice.reducer,
        }
    }
);

export default store;