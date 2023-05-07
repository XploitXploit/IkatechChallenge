import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
	color: string | null;
	precioMax: number | null;
	precioMin: number | null;
	talle: number | null;
}

const initialState: FilterState = {
	color: null,
	precioMax: null,
	precioMin: null,
	talle: null,
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
		setSizesFilter: (state, action) => {
			state.talle = action.payload;
		},
		clearFilterSizes: (state) => {
			state.talle = null;
		},
	},
});

export const {
	setColorFilter,
	setPriceFilter,
	clearFiltersColor,
	clearFiltersPrice,
	setSizesFilter,
	clearFilterSizes,
} = filterSlice.actions;

export default filterSlice.reducer;
