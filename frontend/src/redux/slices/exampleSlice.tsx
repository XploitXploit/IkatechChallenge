import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
	name: "example",
	initialState: {},
	reducers: {
		updateExampleData: (state, action) => {
			return { ...state, ...action.payload };
		},
	},
});

export const { updateExampleData } = exampleSlice.actions;
export default exampleSlice.reducer;
