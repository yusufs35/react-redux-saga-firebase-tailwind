import React from "react";
import MovieForm from "../components/movie-form";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";

const AddMovieFormContainer = () => {
	const isFormVisible = useSelector((state) => state.movies.isFormVisible);

	const modal = createPortal(<MovieForm />, document.body);

	return <>{isFormVisible ? modal : null}</>;
};

export default AddMovieFormContainer;
