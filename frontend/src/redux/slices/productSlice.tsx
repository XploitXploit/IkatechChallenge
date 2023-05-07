import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductSelection {
	referencia: string | null;
	color: string | null;
	talle: number | null;
}

const initialState: ProductSelection = {
	referencia: null,
	color: null,
	talle: null,
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		setReference: (state, action: PayloadAction<string>) => {
			state.referencia = action.payload;
		},
		setColor: (state, action: PayloadAction<string>) => {
			state.color = action.payload;
		},
		setSize: (state, action: PayloadAction<number>) => {
			state.talle = action.payload;
		},
		clearSelection: () => {
			return initialState;
		},
	},
});

export const { setReference, setColor, setSize, clearSelection } =
	productSlice.actions;

export default productSlice.reducer;
