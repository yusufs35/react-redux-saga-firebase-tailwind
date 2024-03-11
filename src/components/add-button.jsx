import React from "react";
import PlusCircleIcon from "./icons/plus-circle-icon";
import { useDispatch } from "react-redux";
import { setFormVisibility } from "../store/slices/movie";

const AddButton = () => {
	const dispatch = useDispatch();

	return (
		<PlusCircleIcon
			onClick={() => dispatch(setFormVisibility(true))}
			className="w-16 h-16 p-2 text-orange-600 bg-slate-100 shadow cursor-pointer rounded-full fixed bottom-5 right-5 hover:animate-pulse"
		/>
	);
};

export default AddButton;
