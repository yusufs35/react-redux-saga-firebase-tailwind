import React from "react";
import TrashIcon from "./icons/trash";
import { useDispatch } from "react-redux";
import { removeMovieFetch } from "../store/slices/movie";

const MovieCardToolbar = (props) => {
	const { movie, setRemove } = props;
	const dispatch = useDispatch();

	const handleDelete = () => {
		const result = confirm("Are you sure to delete");
		if (!result) return;

		setRemove(true);
		setTimeout(() => {
			dispatch(removeMovieFetch(movie.id));
		}, 1000);
	};




	return (
		<div className="opacity-0 group-hover:opacity-100 transition delay-150 duration-300 absolute top-2 right-2">
			<TrashIcon
				onClick={handleDelete}
				className="w-6 h-6 bg-slate-300 cursor-pointer rounded-full p-1"
			/>
		</div>
	);
};

export default MovieCardToolbar;
