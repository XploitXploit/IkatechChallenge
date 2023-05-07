import React, { FC, CSSProperties } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import backgroundImage from "../../assets/img/jumbotronimg.jpg";

const Jumbotron: FC = () => {
	const jumbotronStyle: CSSProperties = {
		backgroundImage: `url(${backgroundImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		minHeight: "70vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontFamily: "Montserrat-Regular",
	};

	const buttonStyle: CSSProperties = {
		position: "absolute",
		bottom: "2rem",
		right: "2rem",
		fontFamily: "Montserrat-Regular",
		borderRadius: "0",
	};

	return (
		<div style={jumbotronStyle}>
			<Container>
				<Row>
					<Col>
						<h1 className='secondary text-light'>Welcome to Our Shoe Store</h1>
						<p className='text-light'>
							Discover the latest styles and trends in shoes for men and women.
							Explore our collection and find the perfect pair for any occasion.
						</p>
						<Button variant='secondary' style={buttonStyle} >
							Shop Now
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Jumbotron;
