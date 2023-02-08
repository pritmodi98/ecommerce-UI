import React from "react";
import PhoneProduct from "../../../../common/components/phone-product";
import { SAMPLE_PHONES_PRODUCT_LIST } from "../../../../common/constants/samplephonesProductList";
import Pagination from "react-bootstrap/Pagination";
import "./products-main.css";

const ProductsMain = () => {
	return (
		<div className="products-main">
			<div className="all-products-list">
				<div className="row">
					{SAMPLE_PHONES_PRODUCT_LIST.map((phone) => (
						<div className="col-md-3">
							<PhoneProduct {...phone} key={phone.id} />
						</div>
					))}
				</div>
			</div>
			<div className="pagination">
				<Pagination className="custom-pagination">
					<Pagination.Prev />
					<Pagination.Item active>{1}</Pagination.Item>
					<Pagination.Item>{2}</Pagination.Item>
					<Pagination.Item>{3}</Pagination.Item>
					<Pagination.Item>{4}</Pagination.Item>
					<Pagination.Item>{5}</Pagination.Item>
					<Pagination.Next />
				</Pagination>
			</div>
		</div>
	);
};

export default ProductsMain;
