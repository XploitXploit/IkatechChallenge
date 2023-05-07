import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const BreadcrumbComponent: React.FC = () =>  {
	const location = useLocation();
	const pathnames = location.pathname.split("/").filter((x) => x);

	return (
		<Breadcrumb>
			<Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
			{pathnames.map((name, index) => {
				const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
				const isLast = index === pathnames.length - 1;

				return isLast ? (
					<Breadcrumb.Item active key={name}>
						{name}
					</Breadcrumb.Item>
				) : (
					<Breadcrumb.Item href={routeTo} key={name}>
						{name}
					</Breadcrumb.Item>
				);
			})}
		</Breadcrumb>
	);
}

export default BreadcrumbComponent;
