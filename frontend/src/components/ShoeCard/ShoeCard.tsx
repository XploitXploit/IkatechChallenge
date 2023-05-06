import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import styles from "./ShoeCard.module.css";

interface ShoeCardProps {
	foto: string;
	nombre: string;
	precio: number;
	color: string;
	referencia: string;
}

const ShoeCard: React.FC<ShoeCardProps> = ({
	foto,
	nombre,
	referencia,
	precio,
	color,
}) => {
	const [imagePath, setImagePath] = useState("");

	useEffect(() => {
		const loadImage = async () => {
			try {
				const img = await import(`../../assets/img/shoes/${foto}`);
				setImagePath(img.default);
			} catch (error) {
				console.error("Error loading image", error);
			}
		};

		if (foto) {
			loadImage();
		}
	}, [foto]);

	return (
        <Card style={{border: 'none', borderBottom: '1px solid #ccc', borderRadius: 0}} className={styles.cardContainer}>
			<Card.Img style={{ width: "100%", height: "200px", objectFit: "cover" }} variant='top' src={imagePath} />
			<Card.Img style={{ width: "40px", height: "auto", marginTop: "5px" }} src={imagePath} />
			<Card.Body>
				<Card.Title style={{ textAlign: "center" }}>{nombre}</Card.Title>
				<Card.Text
					style={{
						textAlign: "center",
						color: "#7A4A58",
					}}>{`$${precio}`}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default ShoeCard;
