import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShoeFilter from "../components/ShoeFilter/ShoeFilter.tsx";
import ShoeList from "../components/ShoeList/ShoeList.tsx";
import { zapatos } from "../assets/json/zapatos.js";
import BreadcrumbComponent from "../components/Breadcrumb/Breadcrumb.tsx";
const ShoePage: React.FC = () => {
	const shoes = zapatos;

	return (
		<Container style={{ marginTop: "3vh", marginBottom: "3vh" }}>
			<Row>
                <h2 className='mx-auto text-left p-3' style={{ fontFamily: 'Nashville', fontSize: '60px' }}>CALZADO</h2>
                <BreadcrumbComponent />
			</Row>
			<Row>
				<Col md={3}>
					<ShoeFilter />
				</Col>
				<Col md={9}>
					<Row>
						<ShoeList shoes={shoes} />
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default ShoePage;
