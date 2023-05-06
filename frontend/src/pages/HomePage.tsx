import React from "react";
import { Container, Row } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron/Jumbotron.tsx";
import CardList from "../components/CardList/CardList.tsx";
import VideoJumbotron from "../components/Jumbotron/VideoJumbotron.tsx";
import CardListP, { CardData } from "../components/CardList/CardListP.tsx";
import InstagramCarousel from "../components/InstagramCarrousel/InstagramCarrousel.tsx";


const cards: CardData[] = [
	{
		image: require("../assets/img/cardimg3.jpg"),
		buttonText: "Button 1",
	},
	{
		image: require("../assets/img/cardimg4.jpg"),
		buttonText: "Button 2",
	},
	{
		image: require("../assets/img/cardimg5.jpg"),
		buttonText: "Button 3",
	},
];

const HomePage: React.FC = () => {
	return (
		<div className='mx-auto text-center'>
			<Jumbotron />
			<CardList />
			<VideoJumbotron />
			<Container className='mx-auto p-0'>
				<Row className='m-0'>
					<CardListP cards={cards} />
				</Row>
			</Container>
			<Container>
				<InstagramCarousel />
			</Container>

		</div>
	);
};

export default HomePage;
