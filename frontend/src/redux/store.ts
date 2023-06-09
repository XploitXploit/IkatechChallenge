import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import exampleReducer from "./slices/exampleSlice.tsx";
import filterReducer from "./slices/filterSlice.tsx";
import productReducer from "./slices/productSlice.tsx";
// Import your reducers here
// import exampleReducer from './reducers/exampleReducer';

const rootReducer = {
	example: exampleReducer,
	filter: filterReducer,
	product: productReducer,
};

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
