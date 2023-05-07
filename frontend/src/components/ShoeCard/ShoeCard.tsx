import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Container, Row } from "react-bootstrap";
import styles from "./ShoeCard.module.css";

interface ShoeCardProps {
	foto: string;
	nombre: string;
	precio: number;
	color: string;
	referencia: string;
	showButton?: boolean;
}

const ShoeCard: React.FC<ShoeCardProps> = ({
	foto,
	nombre,
	referencia,
	precio,
	color,
	showButton = false,
}) => {
	const navigate = useNavigate();
	const [imagePath, setImagePath] = useState("");

	const onClick = () => {
		navigate(`/product/${referencia}`);
		window.scrollTo(0, 0);
	};

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
		<Container>
			<Card
				style={{
					border: "none",
					borderBottom: "1px solid #ccc",
					borderRadius: 0,
					cursor: "pointer",
				}}
				className={styles.cardContainer}
				onClick={() => onClick()}>
				<Row>
					<Card.Img
						style={{ width: "100%", height: "200px", objectFit: "cover" }}
						variant='top'
						src={imagePath}
					/>
					<Card.Img
						style={{ width: "40px", height: "auto", marginTop: "5px" }}
						src={imagePath}
					/>
				</Row>
				<Row>
				<Card.Body>
					<Card.Title style={{ textAlign: "center" }}>{nombre}</Card.Title>
					<Card.Text
						style={{
							textAlign: "center",
							color: "#7A4A58",
						}}>{`$${precio}`}</Card.Text>
					{showButton && (
						<Button
							style={{ width: "100%", borderRadius: 0 }}
							variant='primary'
							onClick={() => {
								// Do something when the button is clicked
							}}>
							Add to cart
						</Button>
					)}
				</Card.Body>
				</Row>
			</Card>
		</Container>
	);
};

export default ShoeCard;
