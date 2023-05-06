import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./InstagramCarrousel.module.css";

const images = [
	"https://via.placeholder.com/200",
	"https://via.placeholder.com/200",
	"https://via.placeholder.com/200",
];

const InstagramCarousel: React.FC = () => {
	return (
		<div>
			<h2>
				<FontAwesomeIcon icon={faInstagram} /> Instagram - HUSHPUPPIESCO
			</h2>
			<div className={styles.carouselContainer}>
				<Carousel
					showArrows={true}
					showStatus={false}
					showThumbs={false}
					autoPlay={true}
					infiniteLoop={true}
					interval={3000}>
					{images.map((image, index) => (
						<div key={index}>
							<img
								src={image}
								alt={`Carousel Image ${index}`}
								className={styles.carouselImage}
							/>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default InstagramCarousel;
