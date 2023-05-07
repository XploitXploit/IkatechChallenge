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
		talle: number;
	};
}

const ShoeList: React.FC<ShoeListProps> = ({ shoes }) => {
	const { color, precioMax, precioMin, talle } = useSelector(
		(state) => state.filter
	);
	console.log(shoes);
	console.log(color, precioMax, precioMin, talle);

	const filteredShoes = shoes.filter((shoe) => {
		console.log("shoe:", shoe);
		console.log("color:", color);
		console.log("precioMax:", precioMax);
		console.log("precioMin:", precioMin);
		console.log("talle:", talle);

		if (color && shoe.color !== color) {
			console.log("filtered out by color");
			return false;
		}

		if (precioMax && shoe.precio > precioMax) {
			console.log("filtered out by precioMax");
			return false;
		}

		if (precioMin && shoe.precio < precioMin) {
			console.log("filtered out by precioMin");
			return false;
		}

		if (talle && talle !== shoe.talle) {
			console.log("filtered out by talle");
			return false;
		}

		console.log("included");
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
