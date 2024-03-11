import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createMovieFetch, setFormVisibility } from "../store/slices/movie";
import { useOnClickOutside } from "../hooks/use-onclick-outside";
import { motion } from "framer-motion";

const MovieForm = () => {
	const dispatch = useDispatch();
	const ref = useRef(null);
	const [formState, setFormState] = useState({
		title: "",
		releaseYear: "",
		receivedAnOscar: false,
	});

	const handleFormSate = (e) => {
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
	};

	const handleAddMovie = (e) => {
		e.preventDefault();
		e.target.disabled = true;

		try {
			dispatch(createMovieFetch(formState));
			e.target.reset();
			dispatch(setFormVisibility(false));
		} catch (err) {
			console.log(err);
		} finally {
			e.target.disabled = false;
		}
	};

	useOnClickOutside(ref, () => {
		dispatch(setFormVisibility(false));
	});

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="absolute top-0 left-0 right-0 bottom-0 bg-orange-200 bg-opacity-80 flex justify-center items-center"
		>
			<form
				ref={ref}
				onSubmit={handleAddMovie}
				className="rounded p-8 bg-white shadow"
			>
				<div className="mb-3">
					<label
						htmlFor="name"
						className="block text-gray-600 text-sm mb-1"
					>
						Movie Name
					</label>
					<input
						name="title"
						type="text"
						value={formState.title}
						onChange={handleFormSate}
						id="title"
						className="w-full border border-orange-300 rounded shadow px-2 py-1 focus:outline-none "
					/>
				</div>

				<div className="mb-3">
					<label
						htmlFor="releaseYear"
						className="block text-gray-600 text-sm mb-1"
					>
						Released Year
					</label>
					<input
						name="releaseYear"
						type="number"
						value={formState.releaseYear}
						onChange={handleFormSate}
						id="releaseYear"
						className="w-full border border-orange-300 rounded shadow px-2 py-1 focus:outline-none "
					/>
				</div>

				<div className="mb-3">
					<input
						name="receivedAnOscar"
						type="checkbox"
						id="oscar"
						className="shadow"
						checked={formState.receivedAnOscar}
						onChange={handleFormSate}
					/>

					<label
						htmlFor="oscar"
						className="text-gray-600 text-sm mb-1 ms-1"
					>
						Oscar
					</label>
				</div>
				<div className="mb-3">
					<button
						type="submit"
						className=" bg-orange-400 rounded w-full py-1"
					>
						Save
					</button>
				</div>
			</form>
		</motion.div>
	);
};

export default MovieForm;
