import React, { useState, useEffect } from "react";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import SizeSelector from "../SizeSelector/SizeSelector.tsx";
import ShoeLook from "./ShoeLook.tsx";
import BreadcrumbComponent from "../Breadcrumb/Breadcrumb.tsx";
import {
	setReference,
	setColor,
	setSize,
	clearSelection,
} from "../../redux/slices/productSlice.tsx";
import { useDispatch } from "react-redux";
import styles from "./ShoeDetail.module.css";

interface Shoe {
	foto: string;
	nombre: string;
	referencia: string;
	precio: number;
	color: string;
	talle: number;
	descripcion: string;
}

interface ShoeDetailProps {
	shoe: Shoe;
}

const ShoeDetail: React.FC<ShoeDetailProps> = ({ shoe }) => {
	const dispatch = useDispatch();
	const [selectedSize, setSelectedSize] = useState("");
	const [imagePath, setImagePath] = useState("");

	useEffect(() => {
		const loadImage = async () => {
			try {
				const img = await import(`../../assets/img/shoes/${shoe.foto}`);
				setImagePath(img.default);
			} catch (error) {
				console.error("Error loading image", error);
			}
		};

		if (shoe.foto) {
			loadImage();
		}
	}, [shoe.foto]);

	const handleSizeChange = (size: string) => {
		const sizeAsNumber = parseInt(size, 10);
		setSelectedSize(size);
		dispatch(setSize(sizeAsNumber));
	};

	return (
		<Container className={`{mt-1 ${styles.fontCustom}`}>
			<Row className='mb-3 py-3'>
				<BreadcrumbComponent />
			</Row>
			<Row>
				<Col md={8}>
					<Image src={imagePath} alt={shoe.nombre} fluid />
					<hr />
					<Row>
						{Array.from({ length: 5 }).map((_, index) => (
							<Col xs={4} md={2} key={index}>
								<Image
									src={imagePath}
									alt={`Preview ${index + 1}`}
									fluid
									thumbnail
								/>
							</Col>
						))}
					</Row>
				</Col>
				<Col md={4}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
						}}>
						<Row
							className='mb-3'
							style={{
								textAlign: "left",
							}}>
							{" "}
							<h3>{shoe.nombre}</h3>
							<p>${shoe.precio}</p>
							<p>Code: {shoe.referencia}</p>
						</Row>

						<Row >
							{Array.from({ length: 5 }).map((_, index) => (
								<Col xs={4} md={3} key={index} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
									<Image
										src={imagePath}
										alt={`Preview ${index + 1}`}
										className={styles.thumbnailCustom}
										style={{ marginTop: "5px" }}
									/>
								</Col>
							))}
						</Row>
						<Row className='mb-5'>
							<SizeSelector
								selectedSize={selectedSize}
								onSizeChange={handleSizeChange}
								onClearFilter={() => setSelectedSize("")}
							/>
						</Row>
						<Row style={{ display: "flex", flexDirection: "column" }}>
							<Col style={{ textAlign: "left", paddingTop: "0px" }}>
								<a
									href='/guia-de-talles'
									target='_blank'
									rel='noopener noreferrer'>
									GUIA DE TALLES
								</a>
							</Col>
							<Col style={{ width: "100%", paddingTop: "75px" }}>
								<Button style={{ borderRadius: "0px" }}>Add to cart</Button>
							</Col>
						</Row>
					</div>
				</Col>
			</Row>

			<Row style={{ textAlign: "left", paddingTop: "70px" }}>
				<h1>DETALLES DEL PRODUCTO</h1>
				<hr></hr>
				<p>{shoe.descripcion}</p>
			</Row>
			<Row style={{ textAlign: "left", paddingTop: "70px", paddingBottom: "70px" }}>
				<h1>TECNOLOGIAS</h1>
				<hr></hr>
				<p>{shoe.descripcion}</p>
			</Row>
			<Row >
				<h4 style={{ textAlign: "left",backgroundColor: "#e7e6e2"}}>
					COMPLETA TU LOOK
				</h4>
				<ShoeLook showButton={true} />
			</Row>
			<Row>
				<h4 style={{ textAlign: "left", paddingTop: "70px" }}>
					PRODUCTOS RECOMENDADOS
				</h4>
				<hr></hr>
				<div style={{ paddingBottom: "70px" }}>
					<ShoeLook showButton={false} />
				</div>
			</Row>
		</Container>
	);
};

export default ShoeDetail;
