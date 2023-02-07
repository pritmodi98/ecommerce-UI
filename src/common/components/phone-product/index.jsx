import React from "react";
import "./phone-product.css";

const PhoneProduct = (props) => {
	const {
		imageFile,
		name,
		currentPrice,
		originalPrice,
		discount,
		offer,
		emi,
		id,
	} = props;
	return (
		<div className="phone-product col">
			<div className="phone-image">
				<img src={imageFile} alt={`${id}-${name}`} />
			</div>
			<div className="phone-offer">{offer}</div>
			<div className="phone-name">{name}</div>
			<div className="phone-prices">
				<div className="current-price">{currentPrice}</div>
				<div className="original-price">{originalPrice}</div>
				<div className="discount">{discount}</div>
			</div>
			<div className="emi">{emi}</div>
		</div>
	);
};

export default PhoneProduct;
