import React, { useEffect } from "react";
import { auth } from "../config/firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/auth";

const useUserAuth = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
                console.log(authUser)
				dispatch(setUser(authUser));
			} else {
				dispatch(setUser());
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return null;
};

export default useUserAuth;
