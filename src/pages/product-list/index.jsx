import React from "react";
import NavbarMain from "../../common/components/navbar-main";
import Header from "../../common/components/header";
import Footer from "../../common/components/footer";
import Filters from "./components/filters";
import SortBy from "./components/sort-by";
import ProductsMain from "./components/products-main";
import "./product-list.css";

const ProductList = () => {
	return (
		<div className="product-list-main">
			<Header />
			<NavbarMain />
			<div className="body-main">
				<div className="container">
					<div className="row">
						<div className="col-md-3 text-align-left">
							<Filters />
						</div>
						<div className="col-md-9 text-align-left">
							<div className="products-main-heading">
								<h2 className="products-heading">All Mobile Phones</h2>
								<SortBy />
							</div>
                            <ProductsMain />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProductList;
