import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "./CardListP.module.css";

interface CardData {
	image: string;
	buttonText: string;
}

interface CardListProps {
	cards: CardData[];
}

const CardListP: React.FC<CardListProps> = ({ cards }) => {
	return (
		<Container className='mx-auto'>
			<Row>
				<Col xs={12} md={6} className='d-flex align-items-stretch px-0'>
					<Card className='w-100 h-50'>
						<Card.Img
							variant='top'
							src={cards[0].image}
							className={`w-100 h-100 ${styles.cardImage}`}
						/>
						<Card.ImgOverlay>
							<Button variant='secondary' className='w-100 mt-2 rounded-0'>
								{cards[0].buttonText}
							</Button>
						</Card.ImgOverlay>
					</Card>
				</Col>
				<Col xs={12} md={6} className='d-flex flex-column px-0'>
					<Card className='w-100 h-25 py-0'>
						<Card.Img
							variant='top'
							src={cards[1].image}
							className={`w-100 h-100 ${styles.cardImage}`}
						/>
						<Card.ImgOverlay>
							<Button variant='secondary' className='w-100 mt-2 rounded-0'>
								{cards[1].buttonText}
							</Button>
						</Card.ImgOverlay>
					</Card>
					<Card className='w-100 h-25 py-0'>
						<Card.Img
							variant='top'
							src={cards[2].image}
							className={`w-100 h-100 ${styles.cardImage}`}
						/>
						<Card.ImgOverlay>
							<Button variant='secondary' className='w-100 mt-2 rounded-0'>
								{cards[2].buttonText}
							</Button>
						</Card.ImgOverlay>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default CardListP;
