import React, { useState } from "react";
import MovieCardToolbar from "./movie-card-toolbar";
import Loading from "./loading";
import { useSelector } from "react-redux";

const MovieCard = ({ movie }) => {
	const [remove, setRemove] = useState(false);
	const isUserLogin = useSelector((state) => state.auth.isUserLogin);

	return (
		<div className="group relative rounded border border-slate-300 shadow cursor-pointer">
			{remove ? (
				<div className="rounded flex items-center justify-center border animate-pulse absolute w-full h-full bg-red-100">
					<Loading />
				</div>
			) : null}

			<div className="p-3">
				<h3 className="text-center font-medium text-orange-700 text-xl uppercase">
					{movie.title}
				</h3>
				<div className="flex justify-between mt-3">
					<p>Release Year: {movie.releaseYear}</p>
					<p>{movie.receivedAnOscar ? "Oscar" : ""}</p>
				</div>
				{isUserLogin ? (
					<MovieCardToolbar movie={movie} setRemove={setRemove} />
				) : null}
			</div>
		</div>
	);
};

export default MovieCard;
