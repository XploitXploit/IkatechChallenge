import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./InstagramCarrousel.module.css";

const images = [
	require("../../assets/img/c1.jpg"),
	require("../../assets/img/c2.jpg"),
	require("../../assets/img/c3.jpg"),
	require("../../assets/img/c4.jpg"),
	require("../../assets/img/c5.jpg"),
];

const InstagramCarrousel: React.FC = () => {
	return (
		<div>
			<h2 style={{ fontFamily: "Montserrat-Regular" } }>
				<FontAwesomeIcon icon={faInstagram} /> Instagram - HUSHPUPPIESCO
			</h2>
			<div className={styles.imagesContainer}>
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Carousel Image ${index}`}
						className={styles.image}
					/>
				))}
			</div>
		</div>
	);
};

export default InstagramCarrousel;
