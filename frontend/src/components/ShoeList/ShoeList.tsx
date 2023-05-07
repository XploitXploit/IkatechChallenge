import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import ShoeCard from "../ShoeCard/ShoeCard.tsx";
import styles from "./ShoeList.module.css";

interface ShoeListProps {
	shoes: {
		foto: string;
		nombre: string;
		referencia: string;
		precio: number;
		color: string;
	};
}

const ShoeList: React.FC<ShoeListProps> = ({ shoes }) => {
	const { color, precioMax, precioMin } = useSelector((state) => state.filter);

	const filteredShoes = shoes.filter((shoe) => {
		if (color && shoe.color !== color) {
			return false;
		}
		if (precioMax && shoe.precio > precioMax) {
			return false;
		}
		if (precioMin && shoe.precio < precioMin) {
			return false;
		}
		
		return true;
	});
	return (
		<Row className={`my-5 ${styles.shoeListContainer}`}>
			{filteredShoes.map((shoe, index) => (
				<Col key={index} md={4} className='my-3'>
					<ShoeCard
						foto={shoe.foto}
						nombre={shoe.nombre}
						referencia={shoe.referencia}
						precio={shoe.precio}
						color={shoe.color}
					/>
				</Col>
			))}
		</Row>
	);
};

export default ShoeList;
