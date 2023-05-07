import React, { createContext, useContext, useState } from "react";

interface RouteHistoryContextType {
	routeHistory: string[];
	setRouteHistory: (route: string[]) => void;
}

const RouteHistoryContext = createContext<RouteHistoryContextType>({
	routeHistory: [],
	setRouteHistory: () => {},
});

export const useRouteHistory = () => {
	return useContext(RouteHistoryContext);
};

export const RouteHistoryProvider: React.FC = ({ children }) => {
	const [routeHistory, setRouteHistory] = useState<string[]>([]);

	return (
		<RouteHistoryContext.Provider value={{ routeHistory, setRouteHistory }}>
			{children}
		</RouteHistoryContext.Provider>
	);
};
