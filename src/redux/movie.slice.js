import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "MovieSlice",
    initialState: {
        movies: [],
        user: null,
        movie: null,
        transaction: null
    },
    reducers: {
        addMovie: (state, action) => {
            state.movies.push(action.payload)
        },
        saveMovie(state, action) {
            console.log("saveMovie action: " + action);
            state.movie = action.payload;
        },
        saveMovies(state, action) {
            console.log("saveMovies action: " + action);
            state.movies = action.payload;
        },
        saveTransaction(state, action) {
            console.log("saveTransaction action: " + action);
            state.transaction = action.payload;
        }
    }
})

export default MovieSlice
export const { saveMovie, saveMovies, saveTransaction } = MovieSlice.actions