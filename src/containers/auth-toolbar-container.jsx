import React from "react";
import LogoutButton from "../components/logout-button";
import LoginButton from "../components/login-button";
import { useSelector } from "react-redux";

const AuthToolbarContainer = () => {
	const isUserLogin = useSelector((state) => state.auth.isUserLogin);
	return <>{isUserLogin ? <LogoutButton /> : <LoginButton />}</>;
};

export default AuthToolbarContainer;
