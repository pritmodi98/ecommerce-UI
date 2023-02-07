import React from "react";
import "./footer-bottom.css";
import { footerLinks } from "./constants/footer-options";
import PaymentIcons from "../../assets/images/payment-icons.svg";
import AppDownload from "../../assets/images/app-download.svg";
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";
import Instagram from "../../assets/images/instagram.svg";
import Youtube from "../../assets/images/youtube.svg";

const FooterBottom = () => {
	return (
		<section className="footer-bottom-main">
			<div className="container">
				<div className="row">
					<div className="left-main col-md-9">
						<div className="left-top">
							<div className="row">
								{footerLinks.map(({ heading, items }) => (
									<div className="col-md-3" key={heading}>
										<h2 className="footer-list-heading">{heading}</h2>
										<ul>
											{items.map((item) => (
												<li className="footer-list-item" key={item}>
													<a href="#/">{item}</a>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
						<div className="left-bottom">
							<img src={PaymentIcons} alt="all payment icons" />
						</div>
					</div>
					<div className="right-main col-md-3">
						<div className="right-top">
							<h3 className="footer-right-subheading">
								Download our amazing app
							</h3>
							<div className="footer-right-icons">
								<img src={AppDownload} alt="download apps" />
							</div>
						</div>
						<div className="right-bottom">
							<h3 className="footer-right-subheading">connect us on</h3>
							<div className="footer-right-icons">
								<img src={Facebook} alt="facebook" />
								<img src={Instagram} alt="instagram" />
								<img src={Twitter} alt="twitter" />
								<img src={Youtube} alt="youtube" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FooterBottom;
