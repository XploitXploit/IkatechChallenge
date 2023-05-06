import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import styles from "./Header.module.css";
import CartIcon from "../../assets/icons/CartIcon.svg";

const Header: React.FC = () => {
	return (
		<header
			style={{
				borderBottom: "1px solid black",
				position: "sticky",
				top: 0,
				zIndex: 999,
				backgroundColor: "white",
			}}>
			<div className='bg-primary py-3'>
				<Container fluid>
					<Row>
						<Col className={`text-center text-white font-weight-bold ${styles.saleFont}`}>
							HOT SALE -30% EN SANDALIAS
						</Col>
					</Row>
				</Container>
			</div>
			<div
				className='bg-secondary d-flex align-items-center'
				style={{ paddingTop: "1px", paddingBottom: "1px" }}>
				<Container fluid>
					<Row>
						<Col>
							<div
								className='d-flex justify-content-end align-items-center'
								style={{ paddingTop: "10px", paddingBottom: "0px" }}>
								<p className='text-dark font-weight-bold mr-3'>
									DIRECTORIO DE TIENDAS
								</p>
								<p
									className='text-dark font-weight-bold mr-3'
									style={{ paddingLeft: "15px", paddingRight: "15px" }}>
									SERVICIO AL CLIENTE
								</p>
								<p className='text-dark font-weight-bold' style={{paddingRight: "50px"}}>MI CUENTA</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<Container fluid>
				<Row className='bg-white my-3 px-5'>
					<Col xs={12} md={4} className='px-0'>
						<img
							alt=''
							className='img-fluid p-0'
							src='https://static.overlay-tech.com/assets/812882af-0727-47b3-931a-6f8410b2dc30.png'
						/>
					</Col>
					<Col xs={12} md={8} className='d-flex justify-content-end'>
						<div
							className={`search-wrapper d-flex flex-column ${styles.searchWrapper}`}>
							<div className={`search-container ${styles.searchContainer}`}>
								<input
									type='search'
									className={`form-control ${styles.searchInput}`}
									placeholder='Buscar'
								/>
								<svg
									className={`search-icon ${styles.searchIcon}`}
									viewBox='0 0 512 512'
									xmlns='http://www.w3.org/2000/svg'
									fill='currentColor'>
									<path d='M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z'></path>
								</svg>
							</div>
							<p
								className='text-primary mt-2 mb-0'
								style={{ fontSize: "1.5rem" }}>
								ENVIOS GRATIS PARA PEDIDOS SUPERIORES A $300.000
							</p>
							<div className={`cart-container ${styles.cartContainer}`}>
								<span className={`cart-text ${styles.cartText}`}>Carrito</span>
								<img
									src={CartIcon}
									alt='Carrito'
									className={`cart-icon ${styles.cartIcon}`}
								/>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<Navbar expand='md' className={styles.customNavbar}>
				<Container fluid>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
							<Nav.Link
								href='#'
								className={`font-weight-bold mr-3 ${styles.nav_link_custom} ${styles.nav_link_hombre}`}>
								HOMBRE
							</Nav.Link>
							<Nav.Link
								href='#'
								className={`font-weight-bold mr-3 ${styles.nav_link_custom} ${styles.nav_link_mujer}`}>
								MUJER
							</Nav.Link>
							<Nav.Link
								href='#'
								className={`font-weight-bold mr-3 ${styles.nav_link_custom} ${styles.nav_link_blog}`}>
								BLOG
							</Nav.Link>
							<Nav.Link
								href='#'
								className={`font-weight-bold mr-3 ${styles.nav_link_custom} ${styles.nav_link_historia}`}>
								HISTORIA
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
