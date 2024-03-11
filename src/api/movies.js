import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
} from "firebase/firestore";
import { db } from "../config/firebase";

const moviesCollectionRef = collection(db, "movies");

export const getMovies = async () => {
	const data = await getDocs(moviesCollectionRef);
	const filteredData = data.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));
	return filteredData;
};

export const createNewMovie = async (movie) => {
	const data = await addDoc(moviesCollectionRef, movie);
	return data.id;
};

export const deleteMovie = async (id) => {
	const movieDoc = doc(db, "movies", id);
	await deleteDoc(movieDoc);
};
