import React from "react";
import NavbarMain from "../../common/components/navbar-main";
import Header from "../../common/components/header";
import "./home.css";

const Home = () => {
	return (
		<div className="home-page">
			<Header />
			<NavbarMain />

			<section className="common-section">image slider</section>
			<section className="common-section">Popular offers</section>
			<section className="common-section">Payments</section>
			<section className="common-section">footer</section>
		</div>
	);
};

export default Home;
