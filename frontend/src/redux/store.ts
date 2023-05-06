import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import exampleReducer from './slices/exampleSlice.ts';

// Import your reducers here
// import exampleReducer from './reducers/exampleReducer';

const rootReducer = {
	example: exampleReducer,
};

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
