import React from "react";
import NavbarMain from "../../common/components/navbar-main";
import Header from "../../common/components/header";
import "./home.css";
import ImageSlider from "./components/image-slider";
import PopularOffers from "./components/popular-offers";
import Footer from "../../common/components/footer";

const Home = () => {
	return (
		<div className="home-page">
			<Header />
			<NavbarMain />
			<ImageSlider />

			<div className="body-main">
				<PopularOffers />
			</div>
			<section className="common-section">Payments</section>
			<Footer />
		</div>
	);
};

export default Home;
