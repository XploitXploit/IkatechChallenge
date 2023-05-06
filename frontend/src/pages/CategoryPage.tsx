import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ShoeFilter from "../components/ShoeFilter/ShoeFilter.tsx";
import ShoeList from "../components/ShoeList/ShoeList.tsx";
import { zapatos } from "../assets/json/zapatos.js";
const ShoePage: React.FC = () => {
	const shoes = zapatos;

	return (
		<Container>
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
