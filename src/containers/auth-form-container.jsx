import React from "react";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";
import Auth from "../components/auth";

const AuthFormContainer = () => {
	const isFormVisible = useSelector((state) => state.auth.isFormVisible);

	const modal = createPortal(<Auth />, document.body);

	return <>{isFormVisible ? modal : null}</>;
};

export default AuthFormContainer;
