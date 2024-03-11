import React from "react";
import MovieCard from "./movie-card";
import { useSelector } from "react-redux";
import Loading from "./loading";

const Movies = () => {
	const { isLoading, movies } = useSelector((state) => state.movies);

	if(isLoading) return <Loading/>

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{movies.map((movie) => (
				<MovieCard movie={movie} key={movie.id} />
			))}
		</div>
	);
};

export default Movies;
