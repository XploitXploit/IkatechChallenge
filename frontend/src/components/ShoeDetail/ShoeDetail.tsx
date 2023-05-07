import React, { useState, useEffect } from "react";
import { Row, Col, Image, Button, Container, Carousel } from "react-bootstrap";
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
	const [imagePaths, setImagePaths] = useState<string[]>([]);
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	useEffect(() => {
		const loadImages = async () => {
			try {
				const mainImage = await import(`../../assets/img/shoes/${shoe.foto}`);
				const images = [mainImage.default];

				// Load other thumbnail images
				for (let i = 1; i <= 4; i++) {
					const thumbnail = await import(`../../assets/img/shoes/${i}.png`);
					images.push(thumbnail.default);
				}

				setImagePaths(images);
			} catch (error) {
				console.error("Error loading image", error);
			}
		};

		if (shoe.foto) {
			loadImages();
		}
	}, [shoe.foto]);

	const handleSizeChange = (size: string) => {
		const sizeAsNumber = parseInt(size, 10);
		setSelectedSize(size);
		dispatch(setSize(sizeAsNumber));
	};

	const handleImageChange = (selectedIndex: number) => {
		console.log('Selected Index:', selectedIndex);
		setSelectedImageIndex(selectedIndex);
	};

	return (
		<Container className={`mt-1 ${styles.fontCustom}`}>
			<Row className='mb-3 py-3'>
				<BreadcrumbComponent />
			</Row>
			<Row>
				<Col md={8}>
					<Carousel variant="dark" onSelect={handleImageChange} activeIndex={selectedImageIndex}>
						{imagePaths.map((path, index) => (
							<Carousel.Item key={`${path}-${index}`}>
								<Image src={path} alt={shoe.nombre} fluid />
							</Carousel.Item>
						))}
					</Carousel>
					<hr />
					<Row>
						{imagePaths.map((path, index) => (
							<Col xs={4} md={2} key={index}>
								<Image
									src={path}
									alt={`Preview ${index + 1}`}
									style={selectedImageIndex === index ? { border: '2px solid #7a4a58' } : {}}
									onClick={() => handleImageChange(index)}
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

						<Row>
							{imagePaths.map((path, index) => (
								<Col
									xs={4}
									md={3}
									key={index}
									style={{ paddingLeft: "0px", paddingRight: "0px" }}>
									<Image
										src={path}
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
			<Row
				style={{
					textAlign: "left",
					paddingTop: "70px",
					paddingBottom: "70px",
				}}>
				<h1>TECNOLOGIAS</h1>
				<hr></hr>
				<p>{shoe.descripcion}</p>
			</Row>
			<Row>
				<h4 style={{ textAlign: "left", backgroundColor: "#e7e6e2" }}>
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
