import React from "react";
import LogoutIcon from "./icons/logout-icon";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/auth";

const LogoutButton = () => {
	const dispatch = useDispatch();

	const logout = async () => {
		const result = confirm("Are you sure to logout?");
		if (!result) return;

		try {
			await signOut(auth);
			dispatch(setUser());
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<button
			onClick={logout}
			className="bg-slate-200 rounded-full inline-flex items-center p-1 fixed bottom-5 left-5 cursor-pointer overflow-hidden group "
		>
			<div className="w-12 h-12 bg-orange-500 rounded-full flex justify-center items-center transition duration-200 group-hover:text-white">
				<LogoutIcon />
			</div>
			<div className="p-0 w-0 opacity-0 -z-20  transition-all duration-200 group-hover:w-fit group-hover:p-3 group-hover:opacity-100 ">
				Logout
			</div>
		</button>
	);
};

export default LogoutButton;
