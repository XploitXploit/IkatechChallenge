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
		clearFilters: (state) => {
			state.color = null;
			state.precioMax = null;
			state.precioMin = null;
		},
	},
});

export const { setColorFilter, setPriceFilter, clearFilters } =
	filterSlice.actions;

export default filterSlice.reducer;
