import React, { useRef, useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
import { motion } from "framer-motion";
import { useOnClickOutside } from "../hooks/use-onclick-outside";
import { setFormVisibility, setUser } from "../store/slices/auth";
import { useDispatch } from "react-redux";

const Auth = () => {
	const [formState, setFormState] = useState({
		email: "fakeemail@gmail.com",
		password: "123456",
	});
	const ref = useRef(null);
	const dispatch = useDispatch();

	const handleFormSate = (e) => {
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
	};

	const signInWithCredentials = async () => {
		try {
			const res = await signInWithEmailAndPassword(
				auth,
				formState.email,
				formState.password
			);

			dispatch(setUser(res.user));
			dispatch(setFormVisibility(false));
			
			
			

		} catch (e) {
			// https://firebase.google.com/docs/auth/admin/errors
			if (e.code === "auth/invalid-credential") {
				alert("Invalid credentials");
			}
			console.log(e);
		}
	};

	const signInWithGoogle = async () => {
		try {
			const res = await signInWithPopup(auth, googleProvider);
			dispatch(setUser(res.user));
			dispatch(setFormVisibility(false));
		} catch (err) {
			console.error(err);
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
			<form ref={ref} className="rounded p-8 bg-white shadow">
				<div className="mb-3">
					<label
						htmlFor="name"
						className="block text-gray-600 text-sm mb-1"
					>
						Email
					</label>
					<input
						name="email"
						type="text"
						value={formState.email}
						onChange={handleFormSate}
						id="email"
						className="w-full border border-orange-300 rounded shadow px-2 py-1 focus:outline-none "
					/>
				</div>
				<div className="mb-3">
					<label
						htmlFor="password"
						className="block text-gray-600 text-sm mb-1"
					>
						Password
					</label>
					<input
						name="password"
						type="password"
						value={formState.password}
						onChange={handleFormSate}
						id="password"
						className="w-full border border-orange-300 rounded shadow px-2 py-1 focus:outline-none "
					/>
				</div>

				<div className="mb-3">
					<button
						type="button"
						onClick={signInWithCredentials}
						className=" bg-orange-400 rounded w-full py-1"
					>
						Sign In With Credentials
					</button>
				</div>

				<div className="mb-3">
					<button
						type="button"
						onClick={signInWithGoogle}
						className=" bg-orange-400 rounded w-full py-1"
					>
						Sign In With Google
					</button>
				</div>
			</form>
		</motion.div>
	);
};

export default Auth;
