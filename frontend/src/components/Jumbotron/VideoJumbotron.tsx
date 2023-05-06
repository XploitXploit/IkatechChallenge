import React, { useRef, useState } from "react";
import { Container, Row } from "react-bootstrap";
import video1 from "../../assets/video/video1.mp4";
import playIcon from "../../assets/icons/play.svg";
import pauseIcon from "../../assets/icons/pause.svg";
import styles from "./VideoJumbotron.module.css";

const VideoJumbotron: React.FC = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);

	const handleVideoClick = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	return (
		<div style={{ position: "relative" }} onClick={handleVideoClick} className={styles.jumbotronVideo}>
			<video
				style={{
					width: "100%",
					height: "600px",
					objectFit: "cover",
				}}
				autoPlay
				loop
				muted
                ref={videoRef}
                className={styles.video}>
				<source src={video1} type='video/mp4' />
			</video>
			<div className={styles.overlay}
				style={{
					position: "absolute",
					bottom: "1rem",
					right: "1rem",
					display: "flex",
					alignItems: "center",
				}}>
				<button
					style={{
						border: "none",
						background: "none",
						marginRight: "0.5rem",
						cursor: "pointer",
					}}
					onClick={handleVideoClick}>
					<img
						src={isPlaying ? pauseIcon : playIcon}
						alt={isPlaying ? "Pause" : "Play"}
						style={{ width: "80px", height: "80px" }}
					/>
				</button>
			</div>
			<Container
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					zIndex: 1,
				}}>
				<Row className='justify-content-center'>
					<h1 className='text-light'>Welcome to My Website</h1>
				</Row>
				<Row className='justify-content-center'>
					<p className='text-light'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</Row>
			</Container>
		</div>
	);
};

export default VideoJumbotron;
