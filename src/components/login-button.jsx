import React from "react";
import LoginIcon from "./icons/login-icon";
import { useDispatch } from "react-redux";
import { setFormVisibility } from "../store/slices/auth";

const LoginButton = () => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(setFormVisibility(true));
	};
	return (
		<button
			onClick={handleClick}
			className="bg-slate-200 rounded-full inline-flex items-center p-1 fixed bottom-5 left-5 cursor-pointer overflow-hidden group "
		>
			<div className="w-12 h-12 bg-orange-500 rounded-full flex justify-center items-center transition duration-200 group-hover:text-white">
				<LoginIcon />
			</div>
			<div className="p-0 w-0 opacity-0 -z-20  transition-all duration-200 group-hover:w-fit group-hover:p-3 group-hover:opacity-100 ">
				Login
			</div>
		</button>
	);
};

export default LoginButton;
