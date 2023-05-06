import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import styles from "./CardList.module.css";
import image1 from "../../assets/img/cardimg1.jpg";
import image2 from "../../assets/img/cardimg2.jpg";

const CardList: React.FC = () => {
	return (
		<div className='d-flex justify-content-center'>
			<Col className='m-3' xs={12} md={6} lg={4}>
				<Card className={`${styles.cardImageContainer} mr-3`}>
					<Card.Img
						variant='top'
						src={image1}
						className={`${styles.cardImage}`}
					/>
					<Button
						variant='secondary'
						style={{
							position: "absolute",
							top: "95%",
							left: "50%",
							transform: "translate(-50%, -50%)",
						}}
						className='rounded-0'>
						Button 1
					</Button>
				</Card>
			</Col>
			<Col className='m-3' xs={12} md={6} lg={4}>
				<Card className={`${styles.cardImageContainer} mr-3`}>
					<Card.Img
						variant='top'
						src={image2}
						className={`${styles.cardImage}`}
					/>
					<Button
						variant='secondary'
						style={{
							position: "absolute",
							top: "95%",
							left: "50%",
							transform: "translate(-50%, -50%)",
						}}
						className='rounded-0'>
						Button 2
					</Button>
				</Card>
			</Col>
		</div>
	);
};

export default CardList;
