import React from "react";
import "./footer-top.css";
import { features } from "./constants/features";

const FooterTop = () => {
	return (
		<section className="footer-top-main">
			<div className="container">
				<div className="row">
					{features.map(({ icon, title, subTitle }, index) => (
						<div className="col-md-3  feature-container" key={title}>
							<div>
								<img
									src={icon}
									alt="icon of the feature"
									className="feature-image"
								/>
							</div>
							<h3 className="feature-title">
								{title}
								{index}
							</h3>
							<p className="feature-subtitle">{subTitle}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FooterTop;
