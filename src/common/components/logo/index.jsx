import React from "react";
import logo from "../../assets/images/logo.svg";
import "./logo.css";
import { CustomNavigate } from "../../../navigateCustomHook/navigate";

const Logo = ({ lightMode }) => {
	// const { lightMode } = props;
	const textColor = lightMode ? "white-color" : "black-color";
	const handleRoute = CustomNavigate();
	return (
		<div
			className="d-flex align-items-center cursor-pointer"
			onClick={() => handleRoute("/")}
		>
			<img src={logo} alt="logo of company coffeee" />
			<div className={`logo-text mx-2 ${textColor}`}>mojoCart</div>
		</div>
	);
};

export default Logo;
