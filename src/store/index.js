import { Tuple, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import movieReducer from "./slices/movie";
import authReducer from "./slices/auth";
import rootSaga from "./saga/movie";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
	reducer: { movies: movieReducer, auth: authReducer },
	middleware: () => new Tuple(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
