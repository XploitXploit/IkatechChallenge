import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
	return (
		<footer className='mx-auto text-center'>
			<div className='d-flex align-items-center m-0' style={{ fontFamily: "Montserrat-Regular" }}>
				<Container
					fluid
					style={{ backgroundColor: "#e7e6e2", height: "120px" }}>
					<Col>
						<p style={{ fontSize: "36px", fontFamily: "Montserrat-Regular" }}>@HUSHPUPPIESCO</p>
						<div className='social-icons px-2'>
							<FontAwesomeIcon icon={faFacebook} size='2x' className='mx-2' />
							<FontAwesomeIcon icon={faInstagram} size='2x' />
						</div>
					</Col>
				</Container>
			</div>
			<div className='second-row d-flex align-items-center m-3' style={{ fontFamily: "Montserrat-Regular" }}>
				<Container>
					<Row>
						<Col xs={12} sm={6} md={3}>
							<ul style={{ listStyle: "none", textAlign: "left" }}>
								<h5>SERVICIO AL CLIENTE</h5>
								<li>CONTACTENOS</li>
								<li>CAMBIO Y DEVOLUCIONES</li>
								<li>POLITICAS DE LA TIENDA</li>
								<li>POLITICA DE DATOS</li>
							</ul>
						</Col>
						<Col xs={12} sm={6} md={3}>
							<ul style={{ listStyle: "none", textAlign: "left" }}>
								<h5>MI CUENTA</h5>
								<li>MIS PEDIDO</li>
								<li>MIS DEVOLUCIONES</li>
							</ul>
						</Col>
						<Col xs={12} sm={6} md={3}>
							<ul style={{ listStyle: "none", textAlign: "left" }}>
								<h5>RECURSOS</h5>
								<li>TIENDAS</li>
								<li>DEVOLUCIONES</li>
							</ul>
						</Col>
						<Col xs={12} sm={6} md={3}>
							<ul style={{ listStyle: "none", textAlign: "left" }}>
								<h5>NEWSLETTER</h5>
								<li>REGISTRATE PARA SER EL PRIMERO</li>
								<li>
									<div
                                        className={`search-wrapper d-flex flex-column ${styles.searchWrapper}`}
                                        style={{ alignItems: "flex-end" }}>
										<div
											className={`search-container ${styles.searchContainer}`}>
											<input
												type='search'
												className={`form-control ${styles.searchInput}`}
                                                placeholder='Email'
                                                style={{ textAlign: "left" }}
											/>
											<svg
												className={`search-icon ${styles.searchIcon}`}
												viewBox='0 0 512 512'
												xmlns='http://www.w3.org/2000/svg'
												fill='currentColor'>
												<path d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z'></path>
											</svg>
										</div>
									</div>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
