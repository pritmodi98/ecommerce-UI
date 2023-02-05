import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar-main.css";

const NavbarMain = () => {
	return (
		<Navbar bg="primary" variant="dark" className="">
			<Container>
				<Nav className="me-auto">
					<Nav.Link href="#/Samsung" className="custom-nav-link">
						Samsung Mobile
					</Nav.Link>
					<Nav.Link href="#/iPhones" className="custom-nav-link">
						iPhones
					</Nav.Link>
					<Nav.Link href="#/Mi" className="custom-nav-link">
						Mi Phones
					</Nav.Link>
					<Nav.Link href="#/Oppo" className="custom-nav-link">
						Oppo Phones
					</Nav.Link>
					<Nav.Link href="#/Oneplus" className="custom-nav-link">
						Oneplus Phones
					</Nav.Link>
					<Nav.Link href="#/Vivo" className="custom-nav-link">
						Vivo Phones
					</Nav.Link>
					<Nav.Link href="#/Others" className="custom-nav-link">
						Others
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default NavbarMain;
