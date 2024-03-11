import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
	name: "movies",
	initialState: {
		movies: [],
		isLoading: false,
		isDeleting: false,
		isCreating: false,
		isUpdating: false,
		isFormVisible: false,
	},
	reducers: {
		getMoviesFetch: (state) => {
			state.isLoading = true;
		},
		getMoviesSuccess: (state, action) => {
			state.isLoading = false;
			state.movies = action.payload;
		},
		getMoviesFailure: (state) => {
			state.isLoading = false;
		},
		removeMovieFetch: (state) => {
			state.isDeleting = true;
		},
		removeMovieSuccess: (state, action) => {
			state.movies = state.movies.filter(
				(item) => item.id !== action.payload
			);
			state.isDeleting = false;
		},
		removeMovieFailure: (state) => {
			state.isDeleting = false;
		},
		createMovieFetch: (state) => {
			state.isCreating = true;
		},
		createMovieSuccess: (state, action) => {
			state.movies.push(action.payload);
			state.isCreating = false;
		},
		createMovieFailure: (state) => {
			state.isCreating = false;
		},
		setFormVisibility: (state, action) => {
			state.isFormVisible = action.payload;
		},
	},
});

export const {
	getMoviesFetch,
	getMoviesSuccess,
	getMoviesFailure,
	removeMovieFetch,
	removeMovieSuccess,
	removeMovieFailure,
	createMovieFetch,
	createMovieSuccess,
	createMovieFailure,
	setFormVisibility,
} = movieSlice.actions;
export default movieSlice.reducer;
