import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newDisney: null,
    originals: null,
    recommends: null,
    trending:null,
}

const movieSlice = createSlice({
    name: "Movie",
    initialState,
    reducers: {
        setMovie: (state,action)=> {
            state.newDisney = action.payload.newDisney;
            state.originals = action.payload.originals;
            state.recommends = action.payload.recommends;
            state.trending = action.payload.trending;
             
        },
    }
})

export const { setMovie } = movieSlice.actions;

export const selectNewDisney = (state) => state.Movie.newDisney;
export const selectOriginals = (state) => state.Movie.originals;
export const selectRecommends = (state) => state.Movie.recommends;
export const selectTrending = (state) => state.Movie.trending;

// export reducer
export default movieSlice.reducer;