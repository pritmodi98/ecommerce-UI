import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PopularOffersPhones from "../popular-offers-phones";
import { CustomNavigate } from "../../../../navigateCustomHook/navigate";
import "./popular-offers.css";

const PopularOffers = () => {
	const goToProductList = CustomNavigate();
	return (
		<div className="container popular-offers-main">
			<div className="top-cart">
				<div className="heading">
					<h3 className="section-heading">Popular mobile offers</h3>
					<button
						className="sub-btn py-1 px-2 mx-3"
						onClick={() => goToProductList("/products")}
					>
						View All
					</button>
				</div>
				<div className="tabs">
					<Tabs
						defaultActiveKey="10000"
						id="justify-tab-example"
						className="mb-3"
					>
						<Tab eventKey="10000" title="Under Rs. 10000" className="cutom-tab">
							<PopularOffersPhones />
						</Tab>
						<Tab
							eventKey="15000"
							title="Rs. 10000 - Rs. 15000"
							className="cutom-tab"
						>
							<PopularOffersPhones />
						</Tab>
						<Tab
							eventKey="25000"
							title="Rs. 15000 - Rs. 25000"
							className="cutom-tab"
						>
							<PopularOffersPhones />
						</Tab>
						<Tab
							eventKey="50000Plus"
							title="Above Rs. 50000"
							className="cutom-tab"
						>
							<PopularOffersPhones />
						</Tab>
					</Tabs>
				</div>
			</div>
			<div className="bottom-cart"></div>
		</div>
	);
};

export default PopularOffers;
