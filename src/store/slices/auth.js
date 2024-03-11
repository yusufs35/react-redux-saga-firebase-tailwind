import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
		isUserLogin: false,
		isFormVisible: false,
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
			state.isUserLogin = Boolean(action.payload);
		},
		setFormVisibility: (state, action) => {
			state.isFormVisible = action.payload;
		},
	},
});

export const { setFormVisibility, setUser } = authSlice.actions;
export default authSlice.reducer;
