import React from "react";
import mobileLarge from "../../assets/images/mobile-large.svg";
import Logo from "../logo";
import { mobBottom } from "../../assets/images/mobile-bottom-svg";
import "./banner.css";

const Banner = () => {
	return (
		<div className="app-banner">
			<div className="padding-40">
				<Logo lightMode/>
				<img src={mobileLarge} alt="mobile icon" className="relative top70" />
				<img src={mobBottom} alt="mobile icon" />
				<div className="banner-text">India's largest e-commerce platform</div>
			</div>
		</div>
	);
};

export default Banner;
