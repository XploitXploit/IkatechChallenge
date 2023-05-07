import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import App from "./App.tsx";
import "./custom.scss";
import "./fonts.css";
import { RouteHistoryProvider } from "./routerHistoryContext.tsx";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouteHistoryProvider>
				<App />
			</RouteHistoryProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
