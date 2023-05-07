import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
	color: string | null;
	precioMax: int | null;
	precioMin: int | null;
}

const initialState: FilterState = {
	color: null,
	precioMax: null,
	precioMin: null,
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setColorFilter: (state, action) => {
			state.color = action.payload;
		},
		setPriceFilter: (state, action) => {
			state.precioMin = action.payload.minPrice;
			state.precioMax = action.payload.maxPrice;
		},
		clearFiltersColor: (state) => {
			state.color = null;
        },
        clearFiltersPrice: (state) => {
			state.precioMax = null;
			state.precioMin = null;
		},
	},
});

export const { setColorFilter, setPriceFilter, clearFiltersColor,clearFiltersPrice } =
	filterSlice.actions;

export default filterSlice.reducer;
