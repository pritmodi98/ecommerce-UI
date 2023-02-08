import React from "react";
import Form from "react-bootstrap/Form";
import { brandsOptions } from "../../constants/brandOptions";
import "./filters.css";

const Filters = () => {
	return (
		<div>
			<h3 className="filters-heading">Filters</h3>
			<div className="filters-main">
				<div className="brands-filter">
					<div className="brands-top">
						<h5 className="filter-section-heading">Brands</h5>
						<a href="#/" className="pink-link">
							View All
						</a>
					</div>
					<div className="brands-options">
						{brandsOptions.map(({ name, count }) => (
							<div className="brands-option">
								<div className="d-flex">
									<input type="checkbox" />
									<span>{name}</span>
								</div>
								<span>{count}</span>
							</div>
						))}
					</div>
				</div>
				<hr className="filters-separator" />
				<div className="price-filter">
					<div className="price-top">
						<h5 className="filter-section-heading">Price</h5>
					</div>
					<div className="price-main">
						<Form.Label className="custom-price-value">
							₹10,000-₹25,000
						</Form.Label>
						<Form.Range />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filters;
