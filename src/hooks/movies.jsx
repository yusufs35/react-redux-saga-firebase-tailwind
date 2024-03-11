import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesFetch } from "../store/slices/movie";

export const useMovies = () => {
	const loading = useSelector((state) => state.movies.isLoading);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const loadMovies = async () => {
			try {
				dispatch(getMoviesFetch());
			} catch (err) {
				setError(err);
			}
		};

		loadMovies();
	}, []);

	return { loading, error };
};
