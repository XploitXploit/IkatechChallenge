import React, { useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Breadcrumb.module.css";
import { useRouteHistory } from "../../routerHistoryContext.tsx";

const BreadcrumbComponent: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { routeHistory, setRouteHistory } = useRouteHistory();
	const pathnames = location.pathname.split("/").filter((x) => x);

	useEffect(() => {
		setRouteHistory((prevRouteHistory) => {
			if (prevRouteHistory[prevRouteHistory.length - 1] !== location.pathname) {
				return [...prevRouteHistory, location.pathname];
			}
			return prevRouteHistory;
		});
	}, [location.pathname, setRouteHistory]);

	const handleClick = (routeIndex: number) => {
		setRouteHistory((prevRouteHistory) => {
			return prevRouteHistory.slice(0, routeIndex + 1);
		});
		navigate(routeHistory[routeIndex]);
	};

	return (
		<Breadcrumb className={styles.customFont}>
			<Breadcrumb.Item onClick={() => handleClick(0)}>Home</Breadcrumb.Item>
			{routeHistory.map((route, index) => {
				const name = route
					.split("/")
					.filter((x) => x)
					.pop();
				const isLast = index === routeHistory.length - 1;

				return isLast ? (
					<Breadcrumb.Item active key={route}>
						{name}
					</Breadcrumb.Item>
				) : (
					<Breadcrumb.Item onClick={() => handleClick(index)} key={route}>
						{name}
					</Breadcrumb.Item>
				);
			})}
		</Breadcrumb>
	);
};

export default BreadcrumbComponent;
