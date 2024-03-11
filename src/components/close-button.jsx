import React from "react";
import { useDispatch } from "react-redux";
import { setFormVisibility } from "../store/slices/movie";
import XCircleIcon from "./icons/x-circle-icon";

const CloseButton = () => {
	const dispatch = useDispatch();

	return (
		<XCircleIcon
			onClick={() => dispatch(setFormVisibility(false))}
			className="w-16 h-16 p-2 text-orange-600 bg-slate-100 shadow cursor-pointer rounded-full fixed bottom-5 right-5  hover:animate-pulse"
		/>
	);
};

export default CloseButton;
