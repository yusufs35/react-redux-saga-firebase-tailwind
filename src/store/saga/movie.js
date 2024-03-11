import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { createNewMovie, deleteMovie, getMovies } from "../../api/movies";
import {
	createMovieSuccess,
	getMoviesSuccess,
	removeMovieSuccess,
} from "../slices/movie";

function* workGetMoviesFetch() {
	const movies = yield call(() => getMovies());
	console.log(movies)
	yield put(getMoviesSuccess(movies));
	console.log("Ok")
}

function* workCreateMovieFetch({ payload }) {
	const newId = yield call(() => createNewMovie(payload));
	yield put(createMovieSuccess({ ...payload, id: newId }));
}

function* workRemoveMovieFetch({ payload: id }) {
	yield call(() => deleteMovie(id));
	yield put(removeMovieSuccess(id));
}

function* watchGetMovies() {
	yield takeEvery("movies/getMoviesFetch", workGetMoviesFetch);
}

function* watchCreateMovie() {
	yield takeEvery("movies/createMovieFetch", workCreateMovieFetch);
}

function* watchRemoveMovie() {
	yield takeEvery("movies/removeMovieFetch", workRemoveMovieFetch);
}

const rootSaga = function* () {
	yield all([
		fork(watchGetMovies),
		fork(watchCreateMovie),
		fork(watchRemoveMovie),
		// Other forks
	]);
};

export default rootSaga;
