import React from "react";

const ProductDetailSection = () => {
	return (
		<div>
			<h1 className="product-title">
				Samsung Galaxy Note 8 (Orchid Grey , 6GB RAM,64GB Storage)
			</h1>

			<div>
				<p className="features-heading">Key Features</p>
				<ul>
					<li>Capacity 6 kg :Suitable for bachelors & couples</li>
					<li>Warranty: 4 years on product, 4 years on motor 800 rpm:</li>
					<li>Higher the spin speed, faster the drying time</li>
				</ul>
			</div>

			<div className="color-picker">
				<p className="color-heading">Choose Color</p>
				<div className="d-flex align-items-center justify-space-between">
					<div className="color-picker"></div>
					<div className="color-picker"></div>
					<div className="color-picker"></div>
				</div>
			</div>

            
		</div>
	);
};

export default ProductDetailSection;
