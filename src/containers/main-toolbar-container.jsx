import React from "react";
import { useSelector } from "react-redux";
import CloseButton from "../components/close-button";
import AddButton from "../components/add-button";

const MainToolbarContainer = () => {
    const isFormVisible = useSelector((state) => state.movies.isFormVisible);
    const isUserLogin = useSelector((state) => state.auth.isUserLogin);

    if(!isUserLogin) return null;

	return <>{isFormVisible ? <CloseButton /> : <AddButton />}</>;
};

export default MainToolbarContainer;
