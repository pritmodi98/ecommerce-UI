import React from "react";
import { CustomNavigate } from "../../../navigateCustomHook/navigate";
import "./phone-product.css";

const PhoneProduct = (props) => {
	const routeHandler = CustomNavigate();

	const goToProductDetailPage = () => {
		const prodName = name.replaceAll(" ", "-");
		routeHandler(`/products/${prodName}/${id}`);
	};
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
		<div className="phone-product" onClick={goToProductDetailPage}>
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
