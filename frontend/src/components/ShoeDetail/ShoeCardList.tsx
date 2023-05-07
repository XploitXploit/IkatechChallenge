import React from "react";
import { Row, Col } from "react-bootstrap";
import ShoeCard from "../ShoeCard/ShoeCard.tsx";

interface ShoeCardListProps {
	shoes: {
		foto: string;
		nombre: string;
		precio: number;
		color: string;
		referencia: string;
	}[];
	showButton?: boolean;
}

const ShoeCardList: React.FC<ShoeCardListProps> = ({ shoes, showButton }) => {
	const startIndex = Math.floor(Math.random() * (shoes.length - 4));
	const slicedShoes = shoes.slice(startIndex, startIndex + 4);

	return (
		<Row>
			{slicedShoes.map((shoe) => (
				<Col xs={12} sm={6} lg={3} key={shoe.referencia}>
					<ShoeCard {...shoe} showButton={showButton} />
				</Col>
			))}
		</Row>
	);
};
export default ShoeCardList;
