import React, { Suspense } from "react";
import "./App.css";
import Spacer from "./components/spacer";
import Header from "./components/header";
import { useMovies } from "./hooks/movies";
import Loading from "./components/loading";
import {
	AddMovieFormContainer,
	AuthFormContainer,
	AuthToolbarcontainer,
	MainToolbarContainer,
} from "./containers";
import useUserAuth from "./hooks/user-auth";

const Movies = React.lazy(() => import("./components/movies"));

const App = () => {
	useUserAuth();
	useMovies();


	return (
		<div className="container mx-auto mt-4">
			<Header />
			<Spacer />
			<Suspense fallback={<Loading />}>
				<Movies />
			</Suspense>

			<AddMovieFormContainer />
			<AuthFormContainer />
			<AuthToolbarcontainer />
			<MainToolbarContainer />
		</div>
	);
};

export default App;
